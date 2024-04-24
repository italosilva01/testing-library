import React from "react";

import { Home } from "./Screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
