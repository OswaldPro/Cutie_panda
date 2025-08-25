import { useStats } from "../../context/StatsContext";

export default function PandaState() {
  const { energy, mood, money } = useStats();

  let PandaImg = "/images/joie.png"; // image par défaut

  switch (true) {
    case mood < 10:
      PandaImg = "/images/colere.png";
      break;
    case mood < 30:
      PandaImg = "/images/neutre.png";
      break;
    case energy < 10:
      PandaImg = "/images/sommeil.png";
      break;
    case energy < 30:
      PandaImg = "/images/faim.png";
      break;
    case money < 30:
      PandaImg = "/images/pauvre.png";
      break;
    default:
      PandaImg = "/images/joie.png";
      break;
  }

  return (
    <div className="panda-state">
      <img src={PandaImg} alt="État du panda" />
    </div>
  );
}
