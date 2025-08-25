import { useEffect, useState } from "react";
import { useStats } from "../../context/StatsContext";
import { motion } from "motion/react";

export default function Events() {
  const { setEnergy, setMood, setMoney, lossesIntervalRef } = useStats();
  const [event, setEvent] = useState(null);

  //Listes des events avec leur effets
  const events = [
    {
      message: "Vous trouvez un billet de 20€ par terre !",
      effect: () => setMoney((prev) => Math.max(prev + 20), 100),
    },
    {
      message: "Vous avez oublié de payer votre loyer…",
      effect: () => setMoney((prev) => Math.max(prev - 30, 0)),
    },
    {
      message: "Un ami vous invite au cinéma gratuitement !",
      effect: () => setMood((prev) => Math.max(prev + 10, 100)),
    },
    {
      message: "Vous tombez malade…",
      effect: () => setEnergy((prev) => Math.max(prev - 15, 0)),
    },
  ];

  // Tirage aléatoire toutes les 30-60s
  useEffect(() => {
    if (!lossesIntervalRef.current) return; // si le jeu n’a pas commencé, pas d’evenbts

    const triggerRandomEvent = () => {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setEvent(randomEvent);
      randomEvent.effect(); // appliquer effet

      // disparition après 8s
      setTimeout(() => setEvent(null), 7000);
    };

    const interval = setInterval(() => {
      triggerRandomEvent();
    }, Math.floor(Math.random() * (60000 - 30000)) + 30000); // entre 30s et 60s

    return () => clearInterval(interval);
  }, [lossesIntervalRef.current]); // dépendance : relance si le jeu démarre

  if (!event) return null;
  return (
    <motion.div
      className="event-popup"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
    >
      <motion.p
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 150 }}
        transition={{ delay: 5, duration: 1 }}
      >
        {event.message}
      </motion.p>
    </motion.div>
  );
}
