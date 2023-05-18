import React, {useState, useEffect, useRef} from "react";
import Cookies from 'js-cookie';

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
	const [firstVisit, setFirstVisit] = useState(false);

	useEffect(() => {
        const visitCookie = Cookies.get('firstVisit');

        if (!visitCookie) {
            setOpen(true);
            console.log("first visit");
            Cookies.set('firstVisit', 'visited', { expires: 3 }); // Cookie will expire after 365 days
        }
    }, []);


	return (
	<div className="header flex items-center">
		<div className="flex h-9">
			<img className="object-contain mr-2.5" src={linkedinImage} alt="LinkedIn" />

			<div className="flex flex-row items-center rounded-md text-gray-400 bg-[#eef3f8] px-2.5 hidden lg:inline-flex">
				<SearchIcon />
				<input className="outline-none border-none bg-[#eef3f8] w-64 ml-1" type="text" placeholder="Search"/>
			</div>

		</div>
		<div className="flex">
			<HeaderOption Icon={SchoolIcon} Ref={SchoolRef} handleClick={handleClick} title="Education" /> {/*Education*/}
			<HeaderOption Icon={HubIcon} Ref={ProjectsRef} handleClick={handleClick} title="Projects" /> {/*Projects*/}
			<HeaderOption Icon={PsychologyIcon} Ref={SkillsRef} handleClick={handleClick} title="Skills"/> {/*Skills*/}
			<HeaderOption Icon={HandymanIcon} Ref={WorkRef} handleClick={handleClick} title="Work"/> {/*Work*/}
			<HeaderOption Icon={LanguageIcon} Ref={LangRef} handleClick={handleClick}  title="Langugages"/> {/*Languages*/}
			<HeaderOption Icon={VolunteerActivismIcon} Ref={VolRef} handleClick={handleClick} title="Voluteer"/> {/*Volunteer*/}
			<HeaderOption Icon={RecordVoiceOverIcon} Ref={RefRef} handleClick={handleClick} title="References"/> {/*References*/} 
			<a href="https://www.linkedin.com/in/simon-beno-056b631ab/" target="_blank"><HeaderOption avatar={avatar} title="Profile"/></a> {/*Profile*/}
		</div>

		<div>
			<p className="block sm:hidden">xs</p>
			<p className="hidden sm:block md:hidden ">sm</p>
			<p className="hidden md:block lg:hidden ">md</p>
			<p className="hidden lg:block xl:hidden ">lg</p>
			<p className="hidden xl:block 2xl:hidden ">xl</p>
			<p className="hidden 2xl:block ">2xl</p>
		</div>

		<div className="fixed top-3 right-5">
			<React.Fragment>
		      <p className="cursor-pointer text-2xl font-bold" onClick={() => setOpen(true)}>ⓘ</p>
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
		              top: '17px',
		              right: '20px',
		              borderRadius: '50%',
		              bgcolor: 'background.body',
		              display: 'block',
		            }}
		          />
		          	<div className="text-justify max-w-xl ">
			     		<p className="font-semibold text-xl">Welcome and thank you for visiting my website!</p>
			     		<br></br>
			     		<p>This LinkedIn inspired web app was created as a substitute for a classic Resumé. You can access information about my education, work experience, projects I did so far and much more.</p>
			     		<br></br>
			     		<p> In the <span className="font-bold">Posts</span> section, you can publicly ask questions that I will later answer, as well as like or comment other posts. The content is checked via <span className="font-semibold">OpenAI API</span> for correctness and respectfulness.</p>
			     		<br></br>
						<p>Shoot me an email! The address is validated by <span className="font-semibold">SendGrid webhook</span> and a <span className="font-semibold">WebSocket</span> and then an automated email is sent to the user.</p>
			     		<br></br>
			     		<p>The whole web app was created from scratch without any templates. Client-side is deployed on Vercel and created using React. Frameworks and libraries I used include <span className="font-semibold">TailwindCSS</span>, <span className="font-semibold">DaisyUI</span> and <span className="font-semibold">MUI</span>.</p>
			     		<br></br>
			     		<p>Server runs on Heroku. I used <span className="font-semibold">Node.js</span>, Express framework and CORS to build and maintain the server. Communication with <span className="font-semibold">OpenAI</span> (posts checker), <span className="font-semibold">Firebase</span> (posts database) and <span className="font-semibold">Sendgrid</span> (automated mails) takes place here.</p>
			     		<br></br>
			     		<p>I provided links to all mentioned organizations and certificates, so feel free to explore every button and link.</p>
			     		<br></br>
			     		<p className=" text-gray-600 hover:underline cursor-pointer w-fit "><a href="https://github.com/SimonBeno/linkedin-cv" target="_blank">This project's GitHub repository</a></p>
			     	</div>
		        </Sheet>
		      </Modal>
			</React.Fragment>
		</div>
	</div>

)
}

export default Header;