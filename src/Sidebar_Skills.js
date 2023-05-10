import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

// local imports
import MidlandLogo from './utils/midland_logo.png';
import HarvardLogo from './utils/harvard_logo.jpeg'


// MUI
import EastIcon from '@mui/icons-material/East';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Sidebar_Skills({SkillsRef}){

	const [open, setOpen] = useState(false);
	
	const theme = createTheme({
		  palette: {
		    primary: {
		    // white
		      main: `#707070`,
		    },
		  },
		});

	function handleOpen(){
		setOpen(true);
	}



	return(

	<div className="">
		
		<div id="skills" ref={SkillsRef} className={` ${open ? 'sidebar__div' : 'sidebar__div__skills'} mt-2 p-5 pl-8 pr-8`}>
			<h2 className="text-xl font-semibold ">Skills</h2>

			{open ? (
			<>
			<div className="mt-3">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">Python</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">Javascript</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">C (Progamming Language)</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold">React</p>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold">Next.js</p>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold">Tailwind CSS</p>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold">Node.js</p>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">SQL</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="mb-4">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">Git</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>
			</>
			)
			:
			(
			<>
				<div className="mt-3">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">Python</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">Javascript</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-4 mb-4"></hr>
			<div className="">  
				<div className="flex flex-row mb-3">
					<div className="flex flex-col">
						<p className="font-semibold mb-3">C (Progamming Language)</p>
						<div className="flex flex-row">
							<a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" target="_blank"><img className="w-[20px] mr-2" src={HarvardLogo} alt="pic" ></img></a>
							<p className="text-sm">CS50x Harvard Computer Science</p>
						</div>
					</div>
				</div>
			</div>
			</>
			)}
		</div>

		{!open &&
		<div onClick={handleOpen} className="sidebar__skills flex flex-row items-center justify-center hover:bg-gray-200 cursor-pointer p-2 transition duration-200">
			<p className="mr-1 font-semibold text-show_skills">Show all 11 skills</p>
			<ThemeProvider theme={theme}>
				<EastIcon fontSize="small" color="primary" className=""/>						
			</ThemeProvider>
		</div>
		}

	</div>


)
}


export default Sidebar_Skills;

