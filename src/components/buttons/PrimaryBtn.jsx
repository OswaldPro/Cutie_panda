// PrimaryBtn.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrimaryBtn({ children, to, onClick }) {
  if (to) {
    // Cas lien
    return (
      <motion.div
        className="prim-btn"
        whileTap={{ scale: 0.95, filter: "brightness(0.6)" }}
      >
        <Link to={to}>{children}</Link>
      </motion.div>
    );
  }

  // Cas bouton
  return (
    <motion.div
      className="prim-btn"
      whileTap={{
        scale: 0.95,
        filter: "brightness(0.6)",
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
