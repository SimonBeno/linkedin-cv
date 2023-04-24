import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import InputOption from './InputOption.js';


function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar  />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

    <div className="post__body">
        <p>{message}</p>
    </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey" />
            <InputOption Icon={ChatOutlined} title="Comment" color="grey" />
        </div>
    </div>
  )
}

export default Post