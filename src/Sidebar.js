import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import avatar from './/Simon.jpg';
import background from './/gradient.jpg';



function Sidebar(){
	
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)

	return(

<div className="sidebar">
	
	<div className="sidebar__top">
		<img src={background} alt="obrazok" />
		<Avatar src={avatar} className="sidebar__avatar" />
		<h2>Simon Beno</h2>
		<h4>aspiring software engineer based in Omaha, Nebraska</h4>
	</div>

	<div className="sidebar__stats">
		<div className="sidebar__stat" >
			<p>Who viewed you</p>
			<p className='sidebar__statNumber'>19,203</p>
		</div>
		<div className="sidebar__stat" >
			<p>Views on post</p>
			<p className='sidebar__statNumber'>1,534</p>
		</div> 
	</div>
	
	<div className="sidebar__bottom">
		<p>Recent</p>
		{recentItem("Engineering")}
		{recentItem("JSX")}
		{recentItem("75 Hard")}
		{recentItem("Fitness")}
		{recentItem("NoSleep society")}
		
	</div>

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



	{recentItem("reactjs")}
	{recentItem("nieco")}
	{recentItem("hocico")}
	{recentItem("daco")}
	{recentItem("volaco")}
	
	*/