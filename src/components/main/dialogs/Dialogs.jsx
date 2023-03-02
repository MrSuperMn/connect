import React from "react";
import './Dialogs.css';
import Dialogs_item from "./dialogs__item/Dialogs_item";

function Dialogs(props) {
	return (
		<div className="dialogs">
			<Dialogs_item className='dialogs__titles' title='Користувачі'  title2='Повідомлення' user_name='Петро Іванов' user_message='Привіт, як твої справи?' />
			<Dialogs_item  user_name='Ігор Степаненко' user_message='Коли будеш у місті?' />
			<Dialogs_item  user_name='Тетяна Бондарчук' user_message='Що ти робиш?' />
		</div>
	)
}

export default Dialogs;