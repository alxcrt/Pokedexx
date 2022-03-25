import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function routes() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:pokeId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
