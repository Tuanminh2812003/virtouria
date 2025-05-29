import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutDefault from "./Layouts/LayoutDefault";
import Home from "./Layouts/Home";
import Game from "./Layouts/Game";
import ListSpace from "./Layouts/ListSpace";
import ScrollToTop from "./action/ScrollToTop";
import Space from "./Layouts/Space";
import CustomSpace from "./Layouts/customSpace";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/listspace" element={<ListSpace />} />
          <Route path="/space/:prop" element={<Space />} />
          <Route path="/customSpace/:prop" element={<CustomSpace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
