import { useEffect, useState, createContext, useContext } from "react";

const StatsContext = createContext();

export default function StatsProvider({ children }) {
  const [energy, setEnergy] = useState(100);
  const [mood, setMood] = useState(100);
  const [money, setMoney] = useState(50);

  // Perte par seconde
  useEffect(() => {
    const lossesInterval = setInterval(() => {
      setEnergy((prev) => Math.max(prev - 5, 0));
      /* prev permet de recuperer la valeur precedente d'energy. 
      Si pas prev, et que je perd -5 puis je travaill donc - 30 , il ne fera que moins -30, et je perd un tick
      Donc utiliser prev (partout) plutot que de mettre energy(prev) directement 
      puis Math.max compare "prev -5" et  "0" pour prendre le plus grand des 2 */
      setMood((prev) => Math.max(prev - 5, 0));
    }, 10000); // toute les 10 secondes

    return () => clearInterval(lossesInterval); // cleanup : fonction integrée, evite les fuites de mémoires
  }, []);

  // Actions du jeu
  function eat() {
    setEnergy((prev) => Math.min(prev + 20, 100));
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
    setMoney((prev) => prev + 40);
  }

  function play() {
    setEnergy((prev) => Math.max(prev - 10, 0));
    setMood((prev) => Math.min(prev + 30, 100));
    setMoney((prev) => Math.max(prev - 20, 0));
  }

  return (
    <StatsContext.Provider
      value={{
        energy,
        mood,
        money,
        eat,
        sleep,
        work,
        play,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}

export function useStats() {
  return useContext(StatsContext);
}

/* 
Action 	     ⚡ Énergie 😊 Humeur	 💰 Argent
Travailler 	🔻 -30	    🔻 -10	  🔺 +40
Dormir 	    🔺 +50	    🔻 -5	0     0
S’amuser 	  🔻 -10	    🔺 +30	  🔻 -20
Manger 	    🔺 +20	    🔻 -5	    🔻 -10*/
