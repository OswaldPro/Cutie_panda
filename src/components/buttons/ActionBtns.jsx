import { useStats } from "../../context/StatsContext";

export default function ActionsBtns() {
  const { eat, sleep, work, play } = useStats();

  return (
    <div>
      <button onClick={eat}>Manger</button>
      <button onClick={sleep}>Dormir</button>
      <button onClick={work}>Travailler</button>
      <button onClick={play}>Jouer</button>
    </div>
  );
}
