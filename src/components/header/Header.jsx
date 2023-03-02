import React from "react";
import './Header.css'

function Header() {
	return (
		<div className='header'>
			<div className="header__nav">
				<div className="header__logo">
					<a href="/profile"><img src="/img/header/commun.png" alt="" /></a>
				</div>
				<div className="header__right-bar">
					<ul className="header__toolbar">
						<li className="header__item"><a className='music' href="#"><img src="/img/header/music.png" alt="music" /></a></li>
						<li className="header__item"><a href="#"><img src="/img/header/notification.png" alt="notifications" /></a></li>
					</ul>
					<form>
						<input type="text" name="text" className="header__search" placeholder="Search" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Header;