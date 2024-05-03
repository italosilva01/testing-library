import React from "react";

import { Home } from "./Screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Raffle } from "Screens/Raffle";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<Raffle />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
