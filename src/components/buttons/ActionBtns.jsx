import { useStats } from "../../context/StatsContext";
import { motion } from "framer-motion";

export default function ActionsBtns() {
  const { eat, sleep, work, play } = useStats();

  return (
    <div className="action-btn-flex">
      <motion.div
        className="action-btn"
        whileTap={{
          scale: 0.95,
          filter: "brightness(0.6)",
        }}
        onClick={eat}
      >
        Manger
      </motion.div>
      <motion.div
        className="action-btn"
        whileTap={{
          scale: 0.95,
          filter: "brightness(0.6)",
        }}
        onClick={sleep}
      >
        Dormir
      </motion.div>
      <motion.div
        className="action-btn"
        whileTap={{
          scale: 0.95,
          filter: "brightness(0.6)",
        }}
        onClick={work}
      >
        Travailler
      </motion.div>
      <motion.div
        className="action-btn"
        whileTap={{
          scale: 0.95,
          filter: "brightness(0.6)",
        }}
        onClick={play}
      >
        Jouer
      </motion.div>
    </div>
  );
}
