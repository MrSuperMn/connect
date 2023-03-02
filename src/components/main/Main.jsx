import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Main.css';
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import Sidebar from "./sidebar/Sidebar";


function Main() {
	return (
		<div className="main__wrapper">
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path="*" element={<Profile name='Володимир' surname='Воробйов' date='04.03.1993 р.' town='Дніпро' fem_status='В Шлюбі' work='Назва компанії' followers='150' photos='20' videos='12' />} />
					<Route path="/dialogs" element={<Dialogs />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Main;