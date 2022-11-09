import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import "./main.scss";
import "./styles.scss";

const App = () => {
  return (
	<Router>
	  <Navbar />
	  <Routes>
		<Route path='/' exact element={<Home/>} />
	  </Routes>
	</Router>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
