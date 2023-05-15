import React, {useState, useRef} from "react";

// Icons
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import HubIcon from '@mui/icons-material/Hub';

// Local imports
import './Header.css';
import HeaderOption from './HeaderOption.js';
import linkedinImage from "./utils/linkedin.png";
import avatar from './utils/Simon.jpg';

// MUI
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function Header({handleClick, ProjectsRef, SchoolRef, WorkRef, SkillsRef, LangRef, VolRef, RefRef}) {
	
	const [open, setOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);

	return (
	<div className="header flex items-center">
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
			<HeaderOption Icon={HubIcon} Ref={ProjectsRef} handleClick={handleClick} title="Projects" /> {/*Projects*/}
			<HeaderOption Icon={PsychologyIcon} Ref={SkillsRef} handleClick={handleClick} title="Skills"/> {/*Skills*/}
			<HeaderOption Icon={LanguageIcon} Ref={LangRef} handleClick={handleClick}  title="Langugages"/> {/*Languages*/}
			<HeaderOption Icon={VolunteerActivismIcon} Ref={VolRef} handleClick={handleClick} title="Voluteer"/> {/*Volunteer*/}
			<HeaderOption Icon={RecordVoiceOverIcon} Ref={RefRef} handleClick={handleClick} title="References"/> {/*References*/} 
			<a href="https://www.linkedin.com/in/simon-beno-056b631ab/" target="_blank"><HeaderOption avatar={avatar} title="Profile"/></a> {/*Profile*/}
		</div>

		<div className="fixed top-4 right-5">
			<React.Fragment>
		      <p className="cursor-pointer" onClick={() => setOpen(true)}>ⓘ</p>
		      <Modal
		        aria-labelledby="modal-title"
		        aria-describedby="modal-desc"
		        open={open}
		        onClose={() => setOpen(false)}
		        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		      >
		        <Sheet
		          variant="outlined"
		          sx={{
		            maxWidth: 2000,
		            borderRadius: 'md',
		            p: 3,
		            boxShadow: 'lg',
		          }}
		        >
		          <ModalClose
		            variant="outlined"
		            sx={{
		              top: '20px',
		              right: '20px',
		              borderRadius: '50%',
		              bgcolor: 'background.body',
		              display: 'none',
		            }}
		          />
		          	<div className="text-center max-w-md">
			     		<p className="font-semibold">Welcome and thank you for visiting my website!</p>
			     		<br></br>
			     		<p>This LinkedIn inspired web app was created as a substitute for a classic Resumé. You can access information about my education, work experience, projects I did so far and much more. In the Posts section, you can publicly ask questions that I will later answer, as well as like or comment other posts. The content is checked via OpenAI API for correctness and respectfulness. You can write a personal email to me as well.</p>
			     		<br></br>
			     		<p>Client-side is deployed on Vercel and created using React. Frameworks and libraries I used include TailwindCSS, DaisyUI and MUI.</p>
			     		<br></br>
			     		<p>Server runs on Heroku. I used Node.js, Express framework and CORS to build and maintain the server. Communication with OpenAI (posts checker), Firebase (posts database) and Sendgrid (automated mails) takes place here.</p>
			     		<br></br>
			     		<p>I provided links to all mentioned organizations and certificates, so feel free to explore every button and link.</p>
			     	</div>
		        </Sheet>
		      </Modal>
			</React.Fragment>
		</div>
	</div>

)
}

export default Header;