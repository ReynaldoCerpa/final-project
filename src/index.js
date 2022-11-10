import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import "./main.scss";
import "./styles.scss";

const App = () => {
  return (
	<Router className="app-main-container">
	  <Navbar />
	  <Routes>
		<Route index path='/' exact element={<Home/>} />
		<Route path="*" element={<Home to="/" replace />} />
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
