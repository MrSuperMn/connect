import React from "react";
import './Dialogs_item.css';

function Dialogs_item(props) {
	return (
		<div className="dialogs__container">
			<div className="dialogs__user">
				<div className={props.className}>
					{props.title}
				</div>
				<div className="dialogs__user-name"><a href="#">{props.user_name}</a></div>
			</div>
			<div className="dialogs__message">
				{/* {props.container > props.title2} */}
				<div className={props.className}>
					{props.title2}
				</div>
				<div className="dialogs__user-messages">{props.user_message}</div>
			</div>
		</div>
	)
}

export default Dialogs_item;