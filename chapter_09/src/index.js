import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import MainPage from "./MainPage";
import LandingPage from "./LandingPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<Mailbox messages={["메시지","메시지","또 메시지"]}/>*/}
      {/*<MainPage />*/}
    {/*<LoginControl />*/}
      <LandingPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
