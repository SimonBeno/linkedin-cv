import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

// local imports
import MidlandLogo from './utils/midland_logo.png';
import HarvardLogo from './utils/harvard_logo.jpeg'
import GympeLogo from './utils/gympe_logo.jpeg'


// MUI
import Tooltip from '@mui/material/Tooltip';


function Sidebar_education({SchoolRef}){
	
	return(

	<div className="">
		
		<div id="education" ref={SchoolRef} className="sidebar__div mt-2 p-5 pl-8 pr-8">
			<h2 className="text-xl font-semibold mb-2 mt-2" >Education</h2>

			<div className="mt-3">  
				<div className="flex flex-row">
					<Tooltip title="View website" placement="left-start"><a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[48px] mr-4" src={HarvardLogo} alt="pic" ></img></a></Tooltip>
					<div className="">
						<Tooltip title="View certificate" placement="right-start"><p className=" font-semibold hover:underline w-fit"><a href="https://certificates.cs50.io/180bb975-0a6f-4787-8841-1888616af13d.pdf?size=letter" target="_blank">Harvard CS50x</a></p></Tooltip>
						<p className="text-sm ">"Harvard University's introduction to the intellectual enterprises of computer science and the art of programming"</p>
						<p className="text-sm text-slate-500 mt-1"> Nov 2022 - Mar 2023 · 5 mos </p>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row">
					<a href="https://www.midlandu.edu/" target="_blank"><img className="w-[3rem] h-[3rem] mr-3" src={MidlandLogo} alt="pic" ></img></a>
					<div>
						<Tooltip title="View website" placement="right-start"><p className=" font-semibold hover:underline w-fit"><a href="https://linktr.ee/midlandu" target="_blank">Midland University</a></p></Tooltip>
						<Tooltip title="View major" placement="right-start"><a href="https://www.midlandu.edu/academics/dunklau-school-of-business/business-intelligence-technology/" target="_blank"><p className="hover:underline text-sm ">Business Intelligence & Technology</p></a></Tooltip>
						<p className="text-sm">GPA: 3.94 (Dean's List) </p>
						<Tooltip title="View certificate" placement="right-start"><a href="https://drive.google.com/file/d/1zww90P_nSvDdBZE6fXMIkqulb7JXdl1V/view?usp=sharing" target="_blank" rel="noopener noreferrer"><p className="hover:underline text-sm">SAT: 1400 (Math 700, Language 700) </p></a></Tooltip>
						<Tooltip title="View program" placement="right-start"><a href="https://www.midlandu.edu/hanson-honors-program/" target="_blank"><p className="hover:underline text-sm">Honor's program & Global Warriors </p></a></Tooltip>
						<p className="text-sm text-slate-500 mt-1"> Aug 2022 - Present · 10 mos </p>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row mb-5">
					<img className="w-[3rem] h-[3rem] mr-3" src={GympeLogo} alt="pic" ></img>
					<div>
						<Tooltip title="View report" placement="right-start"><a href="https://drive.google.com/file/d/1UF-EEBkdtbQXoNZ4eIfXrYQhvy2DT7ne/view?usp=sharing" target="_blank" rel="noopener noreferrer"><p className=" font-semibold">Gymnazium Partizanske</p></a></Tooltip>
						<p className="text-sm mt-1">High School</p>
						<p className="text-sm text-slate-500 mt-1"> Sep 2014 - May 2022 · 8 yrs</p>
					</div>
				</div>
			</div>
		</div>

	</div>


)
}


export default Sidebar_education;

