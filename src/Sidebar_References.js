import React, {useState, useEffect} from 'react'
import { useClipboard } from 'use-clipboard-copy';

import "./Sidebar.css";
import ContactOpt from './ContactOptRef.js'

// local imports
import MidlandLogo from './utils/midland_logo.png';
import HarvardLogo from './utils/harvard_logo.jpeg'
import GympeLogo from './utils/gympe_logo.jpeg'
import Profile_Pic from './utils/Profile_Pic.png'


// MUI





function Sidebar_References({RefRef}){
	const [open, setOpen] = useState(false);


	const { copy } = useClipboard({
	    copied: () => console.log('Copied to clipboard'),
	    notCopied: () => console.log('Unable to copy to clipboard'),
	  });


	
	var JoshLink = ""
	var JordannLink = ""
	const HenryLink = "krusiewicz@midlandu.edu"
	const CopiedToClipboard = (link) => {
	  	copy(link);
	  	setOpen(true);
	  	setTimeout(() => {
				setOpen(false);
	    }, 1500);
	  };


	return(

	<div className=" mb-10">
		
		<div id="ref" ref={RefRef} className="sidebar__div mt-2 p-5 pl-8 pr-8">
			<h2 className="text-xl font-semibold mb-2 mt-2" >References</h2>

			<div className="mt-3">  
				<div className="flex flex-row">
					<img className="w-[3rem] h-[3rem] mr-4" src={Profile_Pic} alt="pic" ></img>
					<div className="">
						<p className=" font-semibold mb-1">Henry Krusiewicz</p>
						<p className="text-sm text-gray-600 mb-1">Midland University professor and mentor</p>
						<ContactOpt title="krusiewicz@midlandu.edu" link="krusiewicz@midlandu.edu"/>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row">
					<img className="w-[3rem] h-[3rem] mr-4" src={Profile_Pic} alt="pic" ></img>
					<div className="">
						<p className=" font-semibold mb-1">Josh Nakayama</p>
						<p className="text-sm text-gray-600 mb-1">Midland University soccer coach</p>
						<ContactOpt title="nakayama@midlandu.edu" link="nakayama@midlandu.edu" icon="" website="false"/>
					</div>
				</div>
				<hr className="mt-4 mb-6"></hr>
				<div className="flex flex-row mb-3">
					<img className="w-[3rem] h-[3rem] mr-4" src={Profile_Pic} alt="pic" ></img>
					<div className="">
						<p className=" font-semibold mb-1">Jordann Heckart</p>
						<p className="text-sm text-gray-600 mb-1">Midland University advisor</p>
						<ContactOpt title="heckart@midlandu.edu" link="heckart@midlandu.edu" icon="" website="false"/>
					</div>
				</div>
			</div>
		</div>

	</div>


)
}


export default Sidebar_References;

