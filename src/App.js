import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Dashboard from "./Views/Dashboard";
import Landing from "./Views/Landing";
import Login from "./Views/Login";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
