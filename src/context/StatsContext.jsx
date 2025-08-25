import { useEffect, useState, createContext, useContext, useRef } from "react";
import { useNavigate } from "react-router";

const StatsContext = createContext();

export default function StatsProvider({ children }) {
  const navigate = useNavigate();

  // Init des etats + stats de base
  const [energy, setEnergy] = useState(100);
  const [mood, setMood] = useState(100);
  const [money, setMoney] = useState(50);

  const [isGameOver, setIsGameOver] = useState(false); // creer un etat gameover ou non, pour eviter de restart 2 fois car au restart

  // Ref pour stocker l'interval pour pouvoir y acceder partout notemment dans stopLosses
  const lossesIntervalRef = useRef(null);

  // Perte par seconde
  function startLosses() {
    if (lossesIntervalRef.current) return; // si déjà lancé, on ne recrée pas un interval

    lossesIntervalRef.current = setInterval(() => {
      setEnergy((prev) => Math.max(prev - 5, 0));
      setMood((prev) => Math.max(prev - 5, 0));
    }, 1000000); // toutes les 10 secondes
  }
  /* prev permet de recuperer la valeur precedente d'energy. 
      Si pas prev, et que je perd -5 puis je travaill donc - 30 , il ne fera que moins -30, et je perd un tick
      Donc utiliser prev (partout) plutot que de mettre energy(prev) directement 
      puis Math.max compare "prev -5" et  "0" pour prendre le plus grand des 2  pour eviter de passer en dessous de 0*/

  function stopLosses() {
    if (lossesIntervalRef.current) {
      clearInterval(lossesIntervalRef.current);
      lossesIntervalRef.current = null;
    }
  }

  // Actions du jeu
  function eat() {
    setEnergy((prev) => Math.min(prev + 20, 100)); // math min 100 evite de passer au dessus de 100
    setMood((prev) => Math.max(prev - 5, 0));
    setMoney((prev) => Math.max(prev - 10, 0));
  }

  function sleep() {
    setEnergy((prev) => Math.min(prev + 50, 100));
    setMood((prev) => Math.max(prev - 5, 0));
  }

  function work() {
    setEnergy((prev) => Math.max(prev - 30, 0));
    setMood((prev) => Math.max(prev - 10, 0));
    setMoney((prev) => Math.min(prev + 40, 100));
  }

  function play() {
    setEnergy((prev) => Math.max(prev - 10, 0));
    setMood((prev) => Math.min(prev + 30, 100));
    setMoney((prev) => Math.max(prev - 20, 0));
  }

  // Game Over
  useEffect(() => {
    if (!isGameOver && (energy <= 0 || mood <= 0 || money <= 0)) {
      stopLosses();
      setIsGameOver(true);
      navigate("/GameOver");
    }
  }, [energy, mood, money, navigate, isGameOver]);

  // Reset des stats après un gameOver
  function resetStats() {
    setEnergy(100);
    setMood(100);
    setMoney(50);
    setIsGameOver(false);
  }

  return (
    <StatsContext.Provider
      value={{
        energy,
        mood,
        money,
        lossesIntervalRef,
        setEnergy,
        setMood,
        setMoney,
        eat,
        sleep,
        work,
        play,
        resetStats,
        startLosses,
        stopLosses,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}

export function useStats() {
  return useContext(StatsContext);
}
