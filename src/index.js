import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home.jsx'
import "./main.scss";
import "./styles.scss";

const App = () => {
  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
