import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

// local imports
import MidlandLogo from './utils/midland_logo.png';
import HarvardLogo from './utils/harvard_logo.jpeg'
import GympeLogo from './utils/gympe_logo.jpeg'


// MUI
import Tooltip from '@mui/material/Tooltip';


function Sidebar_Languages({LangRef}){
	
	return(

	<div className="">
		
		<div id="lang" ref={LangRef} className="sidebar__div mt-2 pl-6 pt-6">
			<h2 className="text-xl font-semibold mb-2 " >Languages</h2>

			<div className="mt-3">  
				<div className="flex flex-row">
					<div className="">
						<p className="font-semibold mb-1">English</p>
						<a href="https://drive.google.com/file/d/1mWMTyg5p0oWyyr5D0Zbz513LpjXRUBDP/view?usp=sharing" target="_blank" rel="noopener noreferrer"><p className="text-sm mb-1 w-fit hover:underline cursor-pointer">TOEFL Certificate</p></a>
						<p className="text-sm text-gray-600 mb-1">Full professional proficiency</p>
					</div>
				</div>
				<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row">
					<div className="">
						<p className="font-semibold mb-1">Spanish</p>
						<a href="https://drive.google.com/file/d/1dxjWwxCY8hlpnLjNnrXNXCAF3pUttTm2/view?usp=sharing" target="_blank" rel="noopener noreferrer"><p className="text-sm mb-1 w-fit hover:underline cursor-pointer">SIELE Global Certificate</p></a>
						<p className="text-sm text-gray-600 mb-1">Full professional proficiency</p>
					</div>
				</div>
				<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row">
					<div className="">
						<p className="font-semibold mb-1">German</p>
						<p className="text-sm text-gray-600 mb-1">Professional working proficiency</p>
					</div>
				</div>
				{/*<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row">
					<div className="">
						<p className="font-semibold mb-1">Polish</p>
						<p className="text-sm text-gray-600 mb-1">Limited professional proficiency</p>
					</div>
				</div>*/}
				<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row">
					<div className="">
						<p className="font-semibold mb-1">Slovakian</p>
						<p className="text-sm text-gray-600 mb-1">Native or bilingual proficiency</p>
					</div>
				</div>
				<hr className="mt-2 mb-3"></hr>
				<div className="flex flex-row mb-3">
					<div className="">
						<p className="font-semibold mb-1">Czech</p>
						<p className="text-sm text-gray-600 mb-1">Native or bilingual proficiency</p>
					</div>
				</div>
			</div>

		</div>

	</div>


)
}


export default Sidebar_Languages;

