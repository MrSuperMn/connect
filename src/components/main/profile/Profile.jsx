import React from "react";
import './Profile.css';

function Profile(props) {
	return (
		<div className="profile">
			<div className="profile__wrapper">
				<div className="profile__info-left">
					<div className="profile__image">
						<img src="img/main/profile/avatar.jpeg" alt="" />
					</div>
					<div className="profile__number">
						<div className="profile__naming">
							<div>Підписники</div>
							<div>Світлини</div>
							<div>Відео</div>
						</div>
						<div className="profile__value">
							<div>{props.followers}</div>
							<div>{props.photos}</div>
							<div>{props.videos}</div>
						</div>
					</div>
				</div>
				<div className="profile__info-right">
					<div className="profile__user-name">
						<div className="profile__first-name">
							{props.name}
						</div>
						<div className="profile__last-name">
							{props.surname}
						</div>
					</div>
					<div className="profile__user-info">
						<div className="profile__sample">
							<div profile__birth-day>Дата народження:</div>
							<div className="profile__town">Місто:</div>
							<div className="profile__fem-status">Сімейний стан:</div>
							<div className="profile__work">Місце роботи:</div>
						</div>
						<div className="profile__data">
							<div>{props.date}</div>
							<div>{props.town}</div>
							<div>{props.fem_status}</div>
							<div>{props.work}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;