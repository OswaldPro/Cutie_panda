import React from "react";
import Header from "../header/header";
import PandaImg from "../Displays/PandaImg";
import ActionsBtns from "../buttons/ActionBtns";
import StatsDisplay from "../Displays/StatsBars";

export default function MainPage() {
  return (
    <div className="main-page-wrapper">
      <Header></Header>
      <div className="panda-hero">
        {/* <PandaImg src={state}></PandaImg> */}
      </div>
      <div className="stats-bars-wrapper">
        <div className="stats-icons"></div>
        <div className="stats-bars">
          <StatsDisplay></StatsDisplay>
        </div>
      </div>
      <div className="action-btns-wrapper">
        <ActionsBtns></ActionsBtns>
      </div>
      <div className="events-wrapper"></div>
    </div>
  );
}
