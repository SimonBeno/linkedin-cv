import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@mui/material";

function HeaderOption({avatar, Icon, title, Ref, handleClick}){


	return (
		<div onClick={() => handleClick(Ref)} className="headerOption transition duration-100 hover:text-black">
			{Icon && <Icon className="headerOption__icon" />} {/* If I pass the object Icon -> render an Icon component */}
			{avatar && <Avatar className="headerOption__icon" src={avatar} />}
			<h3 className="headerOption__title hidden md:block">{title}</h3>
		</div>
	)
}

export default HeaderOption;