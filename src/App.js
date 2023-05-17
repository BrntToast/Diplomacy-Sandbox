import './styles.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Nav from './Components/Nav';
import Card from './Components/card';

export default function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Routes>
		</div>
	);
}
