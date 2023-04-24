import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import linkedinImage from './/linkedin.png';
import './Header.css';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from './/Simon.jpg';


function Header() {

	return (
	<div className="header">
		<div className="header__left">
			<img src={linkedinImage} alt="LinkedIn" />

			<div className="header__search">
				<SearchIcon />
				<input type="text" placeholder="Search"/>
			</div>

		</div>



		<div className="header__right">
			<HeaderOption Icon={HomeIcon} title="Home"/>
			<HeaderOption Icon={PeopleIcon} title="My Network"/>
			<HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
			<HeaderOption Icon={ChatIcon} title="Messages"/>
			<HeaderOption Icon={NotificationsIcon} title="Notifications"/>
			<HeaderOption avatar={avatar} title="Profile"/>
		</div>
	</div>

)
}

export default Header;