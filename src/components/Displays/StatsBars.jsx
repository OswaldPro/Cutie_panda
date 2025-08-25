import { useStats } from "../../context/StatsContext";
import { motion } from "framer-motion";

export default function StatsDisplay() {
  const { energy, mood, money } = useStats();

  function StatBar({ value, max = 100 }) {
    // on definit qu'une barre plein est a 100
    // Definir le % de remplissage des bar en fonction de la maximum
    const percent = Math.round((value / max) * 100); // prends la plus petite valeur des 2, pour ne pas depasser les 100 inutilement

    // Couleur en fonction de la stat
    let barColor = "#758478"; // par défaut
    if (value < 10) {
      barColor = "#E75A5A"; // danger
    } else if (value < 30) {
      barColor = "#E7A05A"; // attention
    }

    return (
      <div
        style={{
          background: "#EEEADE",
          border: "1px solid #758478",
          borderRadius: "8px",
          overflow: "hidden",
          height: "27px",
          width: "300px",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            background: barColor,
            width: `${percent}%`,
          }}
          animate={{ width: `${percent}%` }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      </div>
    );
  }

  return (
    <div className="bars-wrapper">
      <StatBar value={mood} />
      <StatBar value={energy} />
      <StatBar value={money} />
    </div>
  );
}
