import React, { useEffect, useState, useRef } from 'react';

// Local imports
import './Post.css';
import InputOption from './InputOption.js';
import avatar from './utils/Simon.jpg';


// Firebase
import { db } from "./firebase.js";
import { getDocs, getDoc, collection, doc, addDoc, updateDoc, serverTimestamp, arrayUnion, query, orderBy } from 'firebase/firestore/lite';

// MUI
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



function Post({name, message, timestamp, id }) {


const [loading, setLoading] = useState(false); // loading of response from OpenAI



// Setting timestamp

    function convertTime(timestamp){
        const milliseconds = (timestamp.seconds * 1000) + (timestamp.nanoseconds / 1000000);
        const date = new Date(milliseconds);
        return date.toString();
      }

    var timestamp_conv = convertTime(timestamp);
    var description = timestamp_conv.slice(0,-48);




// Comment
const [commOpen, setCommOpen] = useState(false); // whether comment field is opened 
const [autofocus, setAutofocus] = useState(false);
const [input, setInput] = useState('') // input of comment field
const textAreaRef = useRef();
const [commentDisabled, setCommentDisabled] = useState(false);
const [comments, setComments] = useState([])
const [commentAdded, setCommentAdded] = useState(false)
const [error, setError] = useState("");


// when first rendered, map all comments
useEffect(() => {

    async function getPosts(){
        const postsColl = collection(db, 'posts');
        const commentDoc = doc(postsColl, id);
        const commentedDocument = await getDoc(commentDoc);
        const comments = commentedDocument.data().comments;
        setComments(comments);
    }

    getPosts();

}, [commentAdded]);
            



    function openComment(){
        if (!commOpen){
            setCommOpen(true);
            setAutofocus(true);
        }
        else if (commOpen && !autofocus){
            setAutofocus(true);
        }
        else {
            setCommOpen(false);
            setAutofocus(false); 
            setError("");
        }

    }

    function openComment2(){
        setCommOpen(!commOpen);
        setAutofocus(false);
        setError("");
    }


    // autofocus
    useEffect(() => {
        if(commOpen && autofocus){
            textAreaRef.current.focus();
        }
      }, [commOpen, autofocus])


    // char limit to input
    const char_limit = 281;

const handleInput = (e) => {
    var value = e.target.value;
    setError("");

    if (value.length > char_limit){
        var value = value.slice(0, char_limit);
    }

    setInput(value);
};



// submit comment
const onSubmit = async e => {
    e.preventDefault(); 

    if (!input) {
      return; 
    }

    setLoading(true);
    setCommentDisabled(true);

    if (!commentDisabled){
        // checking comment in server
        async function serverResponse(input){

          const options = {
            method: "POST",
            body: JSON.stringify({
              message: input
            }),
            headers:{
              "Content-Type": "application/json"
            }
          }

          try {
            // const response = await fetch('http://localhost:8000/completions', options) // DEVELOPMENT
            const response = await fetch('https://linkedin-cv-beno.herokuapp.com/completions', options) // PRODUCTION
            const data = response.json();
            return data;
          } 
          catch(error) {
            console.error(error)
          }

        }

        // evaluating correctness
        var server_response = await serverResponse(input);
        var response = server_response.choices[0].message.content;
        var response = response.toLowerCase();
        const message_good = response.includes("message is good");
        const message_no_meaning = response.includes("no meaning");
        const message_bad_language = response.includes("bad language");

        // if Message is good
        if (message_good)
        {

            setError("");

            // retrieve comments
            const postsColl = collection(db, 'posts');
            const commentDoc = doc(postsColl, id);
            const commentedDocument = await getDoc(commentDoc);
            const comments = commentedDocument.data().comments;
            console.log(comments)

            // update comments
            const getFormattedDate = (date) => {
              const options = {
                timeZone: 'UTC',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
              };

              const formatter = new Intl.DateTimeFormat('en-US', options);
              return formatter.format(date);
            };

            const newObj = {
                text: input,
                user: "AnonymousUser",
                timestamp: getFormattedDate(new Date()),
            };

            const newArray = [...comments, newObj];


            // write comments to db
            try {
                await updateDoc(commentDoc, {
                    comments: newArray,
                }
                );
                console.log('Object added successfully');
            } catch (error) {
                console.error('Error adding object: ', error);
            }

            console.log("OK");
        }
        else if (message_bad_language && message_no_meaning) {
          setError("I think you were not being respectful...");
          console.log("I think you were not being respectful...");
        }
        else if (message_no_meaning){
          setError("Try providing some meaningful message.");
          console.log("Try providing some meaningful message");
        }
        else if (message_bad_language) {
          setError("Be respectful, please...");
          console.log("Be respectful, please...");
        }
    }
    else if (commentDisabled){
        setInput('');
    }



        setInput('');
        setLoading(false);
        setCommentDisabled(false);
        setCommentAdded(commentDisabled => !commentDisabled);

};






// Like
const [like, setLike] = useState(false); // keeps track of whether user clicked on like
const [likes, setLikes ] = useState(0); // like number
const [likeDisabled, setLikeDisabled] = useState(false); // disables like btn until db writing process is finished


    async function giveLike(){ 

    if (!likeDisabled){

        async function lajky(likes) {

            setLikeDisabled(true);

            // retrieves the number of likes for certain post, 
            const postsColl = collection(db, 'posts'); // from database, choose the table posts
            const idDoc = doc(postsColl, id) // !!!!!!
            const likedDocument = await getDoc(idDoc);
            var likeCount = likedDocument.data().likes;

             if (like){ // add like
                likeCount = likeCount - 1;
            }
            else if (!like){ // subtract like
                likeCount = likeCount + 1;
            }

            setLikes(likeCount);

            // writing to db
            await updateDoc(idDoc, {
                likes: likeCount,
            });

        }

        setLike(!like);
        await lajky(likes);
        setLikeDisabled(false);
    }
    }



    useEffect(() => { // when first rendered, sets likes variable to current likes; then fires off every time like button is clicked

    async function getLikes(db, id) {
        const postsColl = collection(db, 'posts'); // from database, choose the table posts
        const idDoc = doc(postsColl, id) // !!!!!!
        const likedDocument = await getDoc(idDoc);
        const likeCount = likedDocument.data().likes;
        setLikes(likeCount);
      }

    getLikes(db, id);

    },[])


var limitColor = char_limit - input.length;

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
    <div className="flex justify-between mb-2 mt-5">
        <div className="flex">
            <FavoriteBorderIcon fontSize="small" className=""/>
            <p className="ml-0.5 text-sm">{likes}</p>
        </div>
        {comments && <p className="text-right text-xs text-slate-500 hover:underline cursor-pointer" onClick={openComment2}>{comments.length} comments</p>}
    </div>
        <hr className="text-seda_ciara"></hr>
        <div className="post__buttons" >
            {!like && <InputOption Icon={HeartBrokenOutlinedIcon} title="" color="grey" onIconClick={giveLike}/>}
            {like && <InputOption Icon={FavoriteOutlinedIcon} title="" color="grey" onIconClick={giveLike}/>}
            <InputOption Icon={ChatBubbleOutlineIcon} title="" color="grey" onIconClick={openComment}/>
        </div>

        {commOpen &&
        <>
        <form onSubmit={onSubmit} >
            <div className="comment2">
              <input
                className="input"
                id="review-text"
                onChange={handleInput}
                placeholder=""
                ref={textAreaRef}
                rows={1}
                value={input}
                autoComplete="off"
              />
              <div className="SendOutlinedIcon"><SendOutlinedIcon onClick={onSubmit} type='submit'/></div>
            </div>
        </form>
    
        {(!loading && char_limit - input.length > 10 && input) && 
        <div className="text-xs text-slate-500 min-h-[48px] text-center">
          <div className="pt-6 text-center">
            You have {char_limit - input.length} characters left.
          </div>
        </div>
        }

        {(!loading && char_limit - input.length <= 30 && input) && 
        <div className="text-xs text-slate-500 min-h-[48px] text-center">
          <div className="pt-6 text-center text-red-600">
            You have {char_limit - input.length} characters left.
          </div>
        </div>
        }

        {loading && 
        <div className="text-xs text-slate-500 min-h-[48px] text-center">
          <button className="btn btn-ghost loading pt-4"></button>
        </div>
        }

        {error && 
            <div className="">
                <p className="pt-6 pb-2 text-center text-[12px] text-red-500">{error}</p>
            </div>
        }

        {comments.length !== 0 && <hr className="text-seda_ciara mt-3"></hr>}

        {comments.map((comment) => {
            return(
                <div className="flex mt-3" key={comment.timestamp}>
                    {comment.user === "AnonymousUser" ? <Avatar className="mr-3" /> : <Avatar src={avatar} className="post__avatar mr-3" />}
                    <div className="bg-[rgb(200,200,200)] p-3 rounded-lg">
                        <p className="font-semibold mb-1">{comment.user}</p>
                        {comment.text}
                    </div>
                </div>
            )
        })}

        </>}


    </div>
  )
}

export default Post