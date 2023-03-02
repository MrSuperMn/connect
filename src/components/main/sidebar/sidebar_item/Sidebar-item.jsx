import React from "react";
import './Sidebar-item.css'

function SidebarItem(props) {
	return (
			<div className="sidebar__item">
				<a href={props.link}><img src={props.icon_item} alt="icon-" /></a>
				<a href={props.link}>{props.name_item}</a>
			</div>
	);
}

export default SidebarItem;