// PrimaryBtn.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStats } from "../../context/StatsContext";

export default function ReStartBtn({ children }) {
  const { resetStats } = useStats();
  const navigate = useNavigate();
  const reStartGame = () => {
    navigate("/MainPage");
  };

  return (
    <motion.div
      className="prim-btn"
      whileTap={{
        scale: 0.95,
        filter: "brightness(0.6)",
      }}
      onClick={reStartGame}
    >
      {children}
    </motion.div>
  );
}
