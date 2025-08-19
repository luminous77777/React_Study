import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from "./chapter_15/MainPage";
import Sample from "./chapter_15/Sample";
import Sample2 from "./chapter_15/sample2";
import Blocks from "./chapter_15/Blocks";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sample />
    <Sample2 />
    < Blocks/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
