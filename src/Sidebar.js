import React, {useState, useEffect, useRef} from 'react'

import { useClipboard } from 'use-clipboard-copy';

import { Avatar } from "@mui/material";

// local imports
import "./Sidebar.css";
import Sidebar_Intro from './Sidebar_Intro.js'
import Sidebar_education from './Sidebar_education.js'
import Sidebar_Work from './Sidebar_Work.js'
import Sidebar_Skills from './Sidebar_Skills.js'
import Sidebar_Volunteering from './Sidebar_Volunteering.js'
import Sidebar_References from './Sidebar_References.js'
import Sidebar_Languages from './Sidebar_Languages.js'



// MUI



import { createTheme, ThemeProvider } from '@mui/material/styles';


function Sidebar({chatOpened, setChatOpened, chatDisplayed, setChatDisplayed, SchoolRef, WorkRef, SkillsRef, LangRef, VolRef, RefRef }){
	

	const [open, setOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);

	const SkuskaRef = useRef(null);

	  // colors
	  const theme = createTheme({
		  palette: {
		    primary: {
		    // white
		      main: `#ffffff`,
		    },
		  },
		});


	function handleOpenChat() {
		setChatOpened(!chatOpened);
	}


	function handleAboutOpen() {
		setAboutOpen(true)	
	}


	function handleClick(sectionRef){
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }


	return(

	<div className="sidebar">
		

		<Sidebar_Intro open={open} setOpen={setOpen} chatOpened={chatOpened} setChatOpened={setChatOpened} chatDisplayed={chatDisplayed} setChatDisplayed={setChatDisplayed}/>


		<div className="sidebar__div mt-2 p-5 pl-8 pr-8" onClick={() => handleClick(SkuskaRef)}>
			<h2 className="text-xl font-bold mb-2 mt-2" >About</h2>
			<div>
				{aboutOpen ? 	
				(<p className="mt-2 mb-4 text-sm">As a dedicated and ambitious freshman in college with a passion for the tech industry, ranging from IT to mechanical engineering, I am actively seeking entry-level opportunities to apply my knowledge and skills. <br></br><br></br> Coming from Europe and having completed Harvard's CS50 course, where I gained proficiency in C, Python, HTML, CSS, and Javascript, I possess a strong foundation in computer science. Additionally, my background in Business Intelligence and Technology, coupled with my fluency in five languages - English, Spanish, German, Slovakian and Czech - allows me to be a valuable part of any international team. <br></br><br></br> I am a big sport enthusiast and I dedicate a big part of my daily routine to fitness and soccer. <br></br><br></br> With a diligent work ethic and a keen aptitude for taking on challenges, I am thrilled to make a meaningful impact as a web or software developer and continually expand my horizons in the dynamic world of technology. <br></br><br></br> <span className="font-semibold">PDF Resumé</span> <a href="https://docs.google.com/document/d/10Z1Rwo3VffT7zg3ANrw2m7ZtKjAAZEi_rnSpo9LPkXw/edit" target="_blank" rel="noopener noreferrer"><span className="font-semibold hover:cursor-pointer hover:text-linkedin">here</span></a></p>)
				:
				(<p className="mt-2 mb-4 text-sm">As a dedicated and ambitious freshman in college with a passion for the tech industry, ranging from IT to mechanical engineering, I am actively seeking entry-level opportunities to apply my knowledge and skills. <br></br><br></br> Coming from Europe and having completed Harvard's CS50 course, where I gained proficiency in C, Pyth  <span onClick={handleAboutOpen} className="text=sm text-slate-500 hover:text-linkedin cursor-pointer">...see more</span></p>)
				}
			</div>
		</div>


		<Sidebar_education SchoolRef={SchoolRef} />
		<Sidebar_Work WorkRef={WorkRef}/>
		<Sidebar_Skills SkillsRef={SkillsRef}/>
		<Sidebar_Languages LangRef={LangRef}/>
		<Sidebar_Volunteering VolRef={VolRef}/>
		<Sidebar_References RefRef={RefRef}/>
	</div>


)
}


export default Sidebar;



/*


const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)	

	IS THE SAME AS 

function recentItem(topic) {
	return (
		<div className="sidebar__recentItem">
		<span className="sidebar__hash">#</span>
		<p>{topic}</p>
		</div>
	);
	}

recentItem(topic);


	{recentItem("reactjs")}
	{recentItem("nieco")}
	{recentItem("hocico")}
	{recentItem("daco")}
	{recentItem("volaco")}
	
	*/