import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Board from "./api/Board";
import Reply from "./api/Reply";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Board />} />
        <Route path="reply/:bno" element={<Reply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
