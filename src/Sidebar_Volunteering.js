import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

// local imports
import MidlandLogo from './utils/midland_logo.png';
import HarvardLogo from './utils/harvard_logo.jpeg'
import GympeLogo from './utils/gympe_logo.jpeg'
import RedCross from './utils/red_cross.png'
import Default_Ln from './utils/default_ln.png'
import Erko_Logo from './utils/erko_logo.png'


// MUI



function Sidebar_Volunteering({VolRef}){
	
	return(

	<div className="">
		
		<div id="Vol" ref={VolRef} className="sidebar__div mt-2 p-5 pl-8 pr-8">
			<h2 className="text-xl font-semibold mb-2 mt-2" >Volunteering</h2>

			<div className="mt-3">  
				<div className="flex flex-row">
					<img className="w-[3rem] h-[3rem] mr-4" src={Erko_Logo} alt="LI default pic" ></img>
					<div className="">
						<p className=" font-semibold cursor-default w-fit">Fundraising Assistant</p>
						<a href="https://erko.sk/en/" target="_blank"><p className="text-sm cursor-pointer hover:underline">eRko - Youth Catholic Organization</p></a>
						<p className="text-sm text-slate-500 mt-1">Jan 2013 - Present · 10 yrs 5 mos</p>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row mb-3">
					<img className="w-[3rem] h-[3rem] mr-4" src={RedCross} alt="LI default pic" ></img>
					<div className="">
						<p className=" font-semibold cursor-default w-fit">Blood Donor</p>
						<a href="https://www.redcross.org/" target="_blank"><p className="text-sm cursor-pointer hover:underline">American Red Cross</p></a>
						<p className="text-sm text-slate-500 mt-1">Jan 2013 - Present · 10 yrs 5 mos</p>
					</div>
				</div>
			</div>
		</div>

	</div>


)
}


export default Sidebar_Volunteering;

