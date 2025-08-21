import { Route, Routes } from "react-router";

import HomePage from "./components/pages/HomePage";
import MainPage from "./components/pages/MainPage";
import GameOver from "./components/pages/GameOver";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/GameOver" element={<GameOver />} />
      </Routes>
    </>
  );
}

export default App;
