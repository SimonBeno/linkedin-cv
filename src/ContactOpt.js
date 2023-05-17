import React, {useState, useEffect} from 'react'
import { useClipboard } from 'use-clipboard-copy';

import { Avatar } from "@mui/material";

// local imports
import GitHubLogo from './utils/github_logo.png';


// MUI
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';


function ContactOpt({title, link, icon, website}){
	
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


	  const manageWebsite = () => {
			setInteracted(!interacted);	  	
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

          	{website === "true" ? (
						<div>
							<div className={`flex mt-4  items-center transition duration-150 delay-50 hover:delay-50 hover:grayscale-0 hover:font-semibold cursor-pointer ${open ? `font-semibold grayscale-0` : `grayscale`} `} >
								{icon && (<img src={icon} alt="image" className="contact__img" />)}
		          	<p className="ml-2 text-sm">{title}</p>
		          	{(open && !clipboard) ? (
		          		<div className="flex ml-2 font-normal pl-3 pr-3 p-1 bg-zinc-200 rounded-lg cursor-default">
			          		<a href={link} target="_blank"><p className="text-xs hover:font-semibold" onClick={manageWebsite}>Website</p></a>
										<div style={{ borderLeft: '1px solid gray', marginLeft: '4px', marginRight: '4px', height: '100%', minHeight: '1rem' }} />
										<p className="text-xs hover:font-semibold cursor-pointer" onClick={manageClipboard}>Clipboard</p>
		          		</div>
		          		)

		          		: (open && clipboard) && (
		          		<div className="ml-2 pl-3 pr-3 p-1 bg-zinc-200 rounded-lg cursor-default">
										<p className="text-[11px] font-normal" >Copied to clipboard</p>
		          		</div>
		          		)
		          	}
		          </div>
		        </div>

		        ) :

          	<div>
          		
          		<div className={`flex mt-4 items-center transition duration-150 delay-50 hover:delay-50 hover:grayscale-0 hover:font-semibold cursor-pointer ${open ? `font-semibold grayscale-0` : `grayscale`} `} onClick={CopiedToClipboard}>
								{icon && (<img src={icon} alt="image" className="contact__img" />)}
		          	<p className="ml-2 text-sm">{title}</p>
		          	{(open) && 
		          		<div className="ml-2 pl-3 pr-3 p-1 bg-zinc-200 rounded-lg cursor-default">
										<p className="text-[11px] font-normal" >Copied to clipboard</p>
		          		</div>
		          	}
		          </div>

          	</div>

          }
       		</Tooltip>
        </div>
      </ClickAwayListener>
    </Grid>
)
}


export default ContactOpt;