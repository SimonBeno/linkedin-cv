import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@mui/material";

function HeaderOption({avatar, Icon, title, Ref, handleClick, menu}){

	return (
	<>
		{menu ?
		(<div onClick={() => handleClick(Ref)} className=" transition duration-100 hover:text-black">
			{Icon && <span className=""><Icon className="headerOption__icon text-gray-500 hover:cursor-pointer hover:text-black" /></span>}
			{avatar && <Avatar className="headerOption__icon " src={avatar} />}
		</div>)
		:
		(<div onClick={() => handleClick(Ref)} className="headerOption transition duration-100 hover:text-black">
			{Icon && <Icon className="headerOption__icon" />} {/* If I pass the object Icon -> render an Icon component */}
			{avatar && <Avatar className="headerOption__icon" src={avatar} />}
			<h3 className="headerOption__title hidden md:block">{title}</h3>
		</div>)
		}
	</>
	)
}

export default HeaderOption;