import logo from './logo.svg';
import './App.css';
import Login from "./cors/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Read from "./cors/Read";
import List from "./cors/List";
import Logout from "./cors/Logout";
import Register from "./cors/Register";
import Modify from "./cors/Modify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Logout />
        <Routes>
          <Route index element={<Login/>} />
          <Route path="read/:num" element={<Read/>} />
          <Route path="list" element={<List/>} />
          <Route path="register" element={<Register/> }/>
          <Route path="modify/:num" element={<Modify/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
