import React, {useState, useRef} from "react";

// Icons
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

// Local imports
import './Header.css';
import HeaderOption from './HeaderOption.js';
import linkedinImage from "./utils/linkedin.png";
import avatar from './utils/Simon.jpg';


function Header({handleClick, SchoolRef, WorkRef, SkillsRef, LangRef, VolRef, RefRef}) {
	

	return (
	<div className="header">
		<div className="header__left">
			<img src={linkedinImage} alt="LinkedIn" />

			<div className="header__search text-center">
				<SearchIcon />
				<input type="text" placeholder="Search"/>
			</div>

		</div>



		<div className="header__right">
			<HeaderOption Icon={SchoolIcon} Ref={SchoolRef} handleClick={handleClick} title="Education" /> {/*Education*/}
			<HeaderOption Icon={HandymanIcon} Ref={WorkRef} handleClick={handleClick} title="Work"/> {/*Work*/}
			<HeaderOption Icon={PsychologyIcon} Ref={SkillsRef} handleClick={handleClick} title="Skills"/> {/*Skills*/}
			<HeaderOption Icon={LanguageIcon} Ref={LangRef} handleClick={handleClick}  title="Langugages"/> {/*Languages*/}
			<HeaderOption Icon={VolunteerActivismIcon} Ref={VolRef} handleClick={handleClick} title="Voluteer"/> {/*Volunteer*/}
			<HeaderOption Icon={RecordVoiceOverIcon} Ref={RefRef} handleClick={handleClick} title="References"/> {/*References*/} 
			<a href="https://www.linkedin.com/in/simon-beno-056b631ab/"><HeaderOption avatar={avatar} title="Profile"/></a> {/*Profile*/}
		</div>
	</div>

)
}

export default Header;