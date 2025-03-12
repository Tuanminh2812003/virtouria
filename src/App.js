import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutDefault from "./Layouts/LayoutDefault";
import Home from "./Layouts/Home";
import Game from "./Layouts/Game";
import DT from "./3D/layout/MinhWorkSpace";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
