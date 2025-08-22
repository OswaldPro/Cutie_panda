import ReStartBtn from "../buttons/StartBtn";
import Header from "../header/header";
import { useStats } from "../../context/StatsContext";
import { useNavigate } from "react-router";

export default function HomePage() {
  const { energy, mood, money, resetStats, startGame } = useStats();
  const navigate = useNavigate();

  // Definition du message selon la raison du game over
  let message = "Game Over...";
  if (energy <= 0) message = "Votre personnage s'est évanoui d’épuisement…";
  else if (mood <= 0)
    message = "Votre personnage est trop triste pour continuer…";
  else if (money <= 0) message = "Votre personnage fait faillite…";
  console.log(message);

  const handleRestart = () => {
    resetStats();
    navigate("/MainPage");
    startLosses();
  };

  return (
    <div className="gameover-page-wrapper">
      <Header></Header>
      <img
        src="/images/game-over.png"
        alt="Cartoon illustration of a smiling panda arms opened, closed eyes with a yellow luminous halo over is head. The background is plain white."
      />
      <p>{message}</p>
      <ReStartBtn onClick={handleRestart}>Rejouer</ReStartBtn>
    </div>
  );
}
