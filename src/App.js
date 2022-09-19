import React from "react";
import Home2 from "./components/Home2";
import GraphState from "./context/GraphState";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TableJ from "./components/TableJ";
import Graph from "./components/Graph";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <GraphState>
      <div className="container-fuild">
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/table" element={<TableJ />} />
            <Route path="/graph" element={<Graph />} />
          </Routes>
        </Sidebar>
      </div>
    </GraphState>
  );
}

export default App;
