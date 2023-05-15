import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

// local imports
import MidlandLogo from './utils/midland_logo.png';
import HarvardLogo from './utils/harvard_logo.jpeg'
import GympeLogo from './utils/gympe_logo.jpeg'


// MUI
import Tooltip from '@mui/material/Tooltip';


function Sidebar_Projects({ProjectsRef}){
	
	return(

	<div className="">
		
		<div id="lang" ref={ProjectsRef} className="sidebar__div mt-2 pl-6 pt-6">
			<h2 className="text-xl font-semibold mb-2 " >Projects</h2>

			<div className="mt-3">  
				<div className="flex flex-row">
					<div className="">
						<p className=" text-lg font-semibold mb-2">Disciplined</p>
						<p className="text-md text-sm mb-2 w-fit">CS50 Final Project - web application for creating, tracking and maintaining habits of user's choice. 
HTML, Javascript, CSS and Jinja on front-end, Python Flask on back-end. It uses local SQL databases to keep track of different users and their passwords, active habits, evaluations, durations etc.</p>
						<a href="https://github.com/SimonBeno/CS50-finalproject" target="_blank"><p className="text-sm text-gray-600 mb-1 hover:underline cursor-pointer w-fit">GitHub Repository</p></a>
					</div>
				</div>
				<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row">
					<div className="">
						<p className="text-lg font-semibold mb-2">Finance</p>
						<p className="text-sm mb-2 w-fit">A simple reactive web app simulating trading on the stock market, created using Javascript, HTML, CSS and Python.
It uses API to get stock prices of companies in real-time.
User first has to register, login and gets $10,000 to buy or sell stocks (balance can be changed).
It keeps track of all the transactions the user has made.</p>
						<a href="https://github.com/SimonBeno/CS50-projects/tree/master/finance" target="_blank"><p className="text-sm text-gray-600 mb-1 hover:underline cursor-pointer w-fit">GitHub Repository</p></a>
					</div>
				</div>
				<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row mb-3">
					<div className="">
						<p className="text-lg font-semibold mb-2">C Photo Filter</p>
						<p className="text-sm mb-2 w-fit">Filter is a program in C that can take any image and apply four different filters to it.
It can convert images to grayscale, sepia and revert or blur the image.
It relies on getting rgb values of every pixel of the image and then 
calculating values using different algorithms to apply the filter.</p>
						<a href="https://github.com/SimonBeno/CS50-projects/tree/master/filter-less" target="_blank"><p className="text-sm text-gray-600 mb-1 hover:underline cursor-pointer w-fit">GitHub Repository</p></a>
					</div>
				</div>
				{/*<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row">
					<div className="">
						<p className="text-lg font-semibold mb-2">*Project Name</p>
						<p className="text-sm mb-2 w-fit">*project description</p>
						<a href="" target="_blank"><p className="text-sm text-gray-600 mb-1 hover:underline cursor-pointer w-fit">GitHub Repository</p></a>
					</div>
				</div>*/}
			</div>

		</div>

	</div>


)
}


export default Sidebar_Projects;

