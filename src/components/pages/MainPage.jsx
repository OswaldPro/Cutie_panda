import Header from "../header/header";
import ActionsBtns from "../buttons/ActionBtns";
import StatsDisplay from "../Displays/StatsBars";
import PandaState from "../Displays/PandaState";
import Events from "../Displays/Events";

import { PiBatteryCharging, PiSmiley, PiMoneyWavy } from "react-icons/pi";
import { useStats } from "../../context/StatsContext";
import { useEffect } from "react";

export default function MainPage() {
  const { startLosses, stopLosses, resetStats } = useStats();

  useEffect(() => {
    resetStats();
    startLosses(); // start des tick
    return () => stopLosses(); // on les stop quand on quitte la page (GameOver)
  }, []);

  return (
    <div className="main-page-wrapper">
      <Header></Header>
      <div className="panda-hero">
        <PandaState></PandaState>
      </div>
      <div className="stats-bars-wrapper">
        <div className="stats-icons">
          <PiSmiley size={32} />
          <PiBatteryCharging size={32} />
          <PiMoneyWavy size={32} />
        </div>
        <div className="stats-bars">
          <StatsDisplay></StatsDisplay>
        </div>
      </div>
      <div className="action-btns-wrapper">
        <ActionsBtns></ActionsBtns>
      </div>
      <div className="events-wrapper">
        <Events></Events>
      </div>
    </div>
  );
}
