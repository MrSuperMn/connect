import React from "react";
import './Sidebar.css'
import SidebarItem from "./sidebar_item/Sidebar-item";

function Sidebar(){
	return(
		<nav className="sidebar">
			<SidebarItem link='/profile' icon_item='/img/main/sidebar/home.png' name_item='Моя сторінка'/>
			<SidebarItem icon_item='/img/main/sidebar/group.png' name_item='Друзі'/>
			<SidebarItem link='/dialogs' icon_item='/img/main/sidebar/message.png' name_item='Повідомлення'/>
			<SidebarItem icon_item='/img/main/sidebar/news.png' name_item='Новини'/>
			<SidebarItem icon_item='/img/main/sidebar/camera.png' name_item='Світлини'/>
			<SidebarItem icon_item='/img/main/sidebar/film.png' name_item='Відео'/>
			<SidebarItem icon_item='/img/main/sidebar/music.png' name_item='Музика'/>
		</nav>
	);
}

export default Sidebar;