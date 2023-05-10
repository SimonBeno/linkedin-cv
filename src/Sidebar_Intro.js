import React, {useState, useEffect} from 'react'
import "./Sidebar.css";

import { useClipboard } from 'use-clipboard-copy';

import { Avatar } from "@mui/material";

// local imports
import ContactOpt from './ContactOpt.js'

import profilePic from './utils/Simon.jpg';
import avatar from './utils/Simon.jpg';
import background from './utils/bg-linkedin.png';
import LinkedImg from './utils/linkedin.png';
import CallLogo from './utils/call_logo.png';
import GitHubLogo from './utils/github_logo.png';
import InstagramLogo from './utils/instagram_logo.png';
import MailLogo from './utils/mail_logo.png';
import WALogo from './utils/whatsapp_logo.jpg';


// MUI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SendIcon from '@mui/icons-material/Send';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { createTheme, ThemeProvider } from '@mui/material/styles';


function Sidebar_Intro({open, setOpen, chatOpened, setChatOpened, chatDisplayed, setChatDisplayed}){
	
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
  		setChatDisplayed(true);
  		setChatOpened(true);
	  }


	return(

	<div className="sidebar">
		
		<div className="sidebar__intro">
			<div className="sidebar__intro__top">
				<img src={background} alt="obrazok" className="sidebar__intro__img"/>
				<React.Fragment>
				      <Avatar src={avatar} className="sidebar__avatar cursor-pointer" onClick={() => setOpen(true)}/>
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
				              top: '20px',
				              right: '20px',
				              borderRadius: '50%',
				              bgcolor: 'background.body',
				            }}
				          />
					     	<Avatar src={profilePic} className="avatar"/>
				        </Sheet>
				      </Modal>
				    </React.Fragment>
			</div>
			<div className="sidebar__intro__bottom ml-2">
				<div className="sidebar__intro__bio ml-5">
					<h2 className="text-2xl font-bold " >Simon Beno</h2>
					<h4>aspiring software engineer based in Omaha, Nebraska</h4>
					<p className="text-sm text-slate-500 mt-2">Omaha, Nebraska, United States</p>
					<p className="text-linkedin font-semibold text-sm mt-2"><span className="hover:underline hover:cursor-default">157 followers</span> · <span className="hover:underline hover:cursor-default">155 connections</span></p>


					<div onClick={handleOpenChat} className="flex items-center p-1 pl-2 pr-4 mt-3 rounded-3xl transition duration-200 delay-50 hover:delay-50 hover:cursor-pointer w-min bg-linkedin hover:bg-linkedin2">
						<div className="rotate-[315deg]">
						<ThemeProvider theme={theme}>
							<SendIcon fontSize="small" color="primary" className="ml-2"/>						
						</ThemeProvider>
						</div>
						<p className="font-semibold text-biela ml-1">Message</p>
					</div>


					<div className="sidebar__intro__bottom__jobs p-3 mt-5 mb-4 rounded-lg">
						<p className="font-bold text-sm mb-1">Open to work</p>
						<p className="text-sm text-slate-700 mb-1">Junior Software Engineer</p>
						<p className="text-sm text-slate-700 mb-1">Junior Web Developer</p>
						<p className="text-sm text-slate-700 mb-1">Software Tester</p>
					</div>
				</div>
				<div className="sidebar__intro__contact mr-5 ml-20 text-center ">
					<div>
		                <ContactOpt key="1" title="+1 (402) 720-8932" link="+ 1 (402) 720-8932" icon={CallLogo} website="false" />
		                <ContactOpt key="2" title="+421 907 644 330" link="+421 907-644-330" icon={WALogo} website="false" />
		                <ContactOpt key="3" title="simon@sbeno.us" link="simon@sbeno.us" icon={MailLogo} website="false" />
		                <ContactOpt key="4" title="simonbeno_" link="https://www.instagram.com/simonbeno_" icon={InstagramLogo} website="true"/>
		                <ContactOpt key="5" title="Simon Beno" link="https://linkedin.com/in/simon-beno-056b631ab/" icon={LinkedImg} website="true" />
				        <ContactOpt key="6" title="SimonBeno" link="https://www.github.com/SimonBeno" icon={GitHubLogo} website="true" />
					</div>
				</div>
			</div>
		</div>

	</div>


)
}


export default Sidebar_Intro;