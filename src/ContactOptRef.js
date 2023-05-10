import React, {useState, useEffect} from 'react'
import { useClipboard } from 'use-clipboard-copy';

import { Avatar } from "@mui/material";

// local imports
import GitHubLogo from './utils/github_logo.png';


// MUI
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';


function ContactOpt({title, link}){
	
	const [open, setOpen] = useState(false);
	const [interacted, setInteracted] = useState(false);
	const [clipboard, setClipboard] = useState(false);
	const { copy } = useClipboard({
    copied: () => console.log('Copied to clipboard'),
    notCopied: () => console.log('Unable to copy to clipboard'),
  });


  const handleTooltipClose = () => {
	    setOpen(false);
	  };

	  const handleTooltipOpen = () => {
	    setOpen(true);

	  };


	  const manageClipboard = () => {
	  	copy(link);
	  	setClipboard(true);
	  	setTimeout(() => {
	  		setClipboard(false);
				setInteracted(!interacted);
	    }, 1500);
	  };


	  const CopiedToClipboard = () => {
	  	copy(link);
	  	setOpen(true);
	  	setTimeout(() => {
				setOpen(false);
	    }, 1500);
	  };


	  useEffect(() => {
	  	setOpen(false);
	  }, [interacted])


	return(

  	<Grid item>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
          >

						<div>
          		
          		<div className={`flex items-center transition duration-150 delay-50 hover:delay-50 hover:grayscale-0 hover:font-semibold cursor-pointer ${open ? `font-semibold grayscale-0` : `grayscale`} `} onClick={CopiedToClipboard}>
		          	<p className="text-sm">{title}</p>
		          	{(open) && 
		          		<div className="ml-2 pl-2 pr-2  bg-zinc-100 rounded-lg cursor-default">
										<p className="text-[12px] font-normal " >Copied to clipboard</p>
		          		</div>
		          	}
		          </div>

          	</div>

       		</Tooltip>
        </div>
      </ClickAwayListener>
    </Grid>
)
}


export default ContactOpt;