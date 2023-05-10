import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

// local imports
import MidlandLogo from './utils/midland_logo.png';
import UserTestingLogo from './utils/usertesting_logo.png'
import Default_Ln from './utils/default_ln.png'
import Kovoprodukt_Logo from './utils/kovoprodukt_logo.png'


// MUI



function Sidebar_Work({WorkRef}){
	
	return(

	<div className="">
		
		<div id="work" ref={WorkRef} className="sidebar__div mt-2 p-5  pl-8 pr-8">
			<h2 className="text-xl font-semibold mb-2 mt-2" >Work Experience</h2>

			<div className="mt-3">  
				<div className="flex flex-row">
					<a href="https://www.usertesting.com/" target="_blank"><img className="w-[48px] h-[55px] mr-3" src={UserTestingLogo} alt="pic" ></img></a>
					<div>
						<p className=" font-semibold w-fit">Usability Tester</p>
						<a href="https://www.usertesting.com/" target="_blank"><p className="text-sm hover:underline cursor-pointer">UserTesting, Inc.</p></a>
						<p className="text-sm text-slate-500 ">Feb 2023 - Present · 10 mos</p>
						<p className="text-sm text-slate-500 ">Remote</p>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row">
					<a href="https://midlandathletics.com/sports/msoc/index" target="_blank"><img className="w-[3rem] h-[3rem] mr-3" src={MidlandLogo} alt="pic" ></img></a>
					<div>
						<p className=" font-semibold w-fit">Soccer Player</p>
						<a href="https://midlandathletics.com/sports/msoc/index" target="_blank"><p className="text-sm hover:underline cursor-pointer">Midland University</p></a>
						<p className="text-sm text-slate-500 ">Aug 2022 - May 2022 · 10 mos</p>
						<p className="text-sm text-slate-500 ">Fremont, Nebraska, United States</p>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row">
					<a href="https://midlandathletics.com/sports/msoc/index" target="_blank"><img className="w-[3rem] h-[3rem] mr-3" src={Default_Ln} alt="pic" ></img></a>
					<div>
						<p className=" font-semibold w-fit">Construction Site Coordinator</p>
						<p className="text-sm ">JURAJ Ltd.</p>
						<p className="text-sm text-slate-500 ">Aug 2022 - May 2022 · 10 mos</p>
						<p className="text-sm text-slate-500 ">London, United Kingdom</p>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row mb-5">
					<a href="https://www.kovoprodukt.sk/" target="_blank"><img className="w-[48px] h-[55px] mr-3" src={Kovoprodukt_Logo} alt="pic" ></img></a>
					<div>
						<p className=" font-semibold w-fit">Business Assistant, Machine Worker</p>
						<a href="https://www.kovoprodukt.sk/" target="_blank"><p className="text-sm hover:underline cursor-pointer">KOVOPRODUKT, s.r.o.</p></a>
						<p className="text-sm text-slate-500 ">2014 - 2022 · 8 yrs</p>
						<p className="text-sm text-slate-500 ">Partizanske, Slovakia</p>
					</div>
				</div>
			</div>
		</div>

	</div>


)
}


export default Sidebar_Work;

