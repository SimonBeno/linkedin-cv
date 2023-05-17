import React, { useEffect, useState, useRef } from 'react';

// stylesheets
import "./Feed.css";

//Firebase
import { db } from "./firebase.js";
import { getDocs, collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore/lite';

//openAI
// import { getOpenAIResponse } from './app/openai.js';
// import { Configuration, OpenAIApi } from 'openai';

// own components
//import InputOption from './InputOption.js';
import Post from './Post.js';

// outside components
import CreateIcon from '@mui/icons-material/Create';
// import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';


function Feed({loaded, setLoaded}) {

  const inputRef = useRef();
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  const [changed, setChanged] = useState(false); // to fire off new post render
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 

// textarea resizing
      useEffect(() => {

        if (inputRef) {
          // We need to reset the height momentarily to get the correct scrollHeight for the textarea
          inputRef.current.style.height = "0px";
          const scrollHeight = inputRef.current.scrollHeight;

          // We then set the height directly, outside of the render loop
          inputRef.current.style.height = scrollHeight + "px";
        }

      }, [inputRef, input]);


  // char limit to input
    const char_limit = 281;
    const handleInput = (e) => {
        var value = e.target.value;

        if (value.length > char_limit){
            var value = value.slice(0, char_limit);
        }

        setInput(value);
    };




  useEffect(() => { //hook that allows us to fire off code when a component loads, or rerenders

      async function getPosts(db) {
        const postsColl = collection(db, 'posts'); // creates a referrence to the posts Firebase database to interact with the database
        const orderedQuery = query(postsColl, orderBy('timestamp', 'desc')); // orders the query by the 'timestamp' column in descending order
        const postsSnapshot = await getDocs(orderedQuery); // gets a snapshot (look at all the documents in the database at a certain point in time)
        const postsList = postsSnapshot.docs.map(doc => ( //document is like a row in relational database (a set of key-value pairs); snapshot is the whole table - collection of documents
          { // an object with two attributes is returned to postsList
            id: doc.id,
            data: doc.data()
          }
        ));
        return postsList;
      }

      async function fetchPosts() {
        const fetchedPosts = await getPosts(db);
        setPosts(fetchedPosts);
      }

      fetchPosts();

      if (!loaded){
        setTimeout(() => {
          setLoaded(true);
        }, 1000)
      }
    
  }, [changed]) // if we pass in blank dependency (empty array), it will fire off only once, when the main component loads (comp Feed in this case), but never again when it rerenders


 const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendPost();
    }
  };


const sendPost = async e => {


    if (!input) {
      return; 
    }


    setLoading(true);

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

    var server_response = await serverResponse(input);
    var response = server_response.choices[0].message.content;
    var response = response.toLowerCase();
    const message_good = response.includes("message is good");
    const message_no_meaning = response.includes("no meaning");
    const message_bad_language = response.includes("bad language");


    if (message_good)
    {
      setError("");
      const postsColl = collection(db, 'posts');

      async function writePost()
      {
        await addDoc(postsColl, {
          comments: [],
          name: 'AnonymousUser',
          description: '',
          message: input,
          timestamp: serverTimestamp(),
          likes: 0,
        })
      }
      
      try {
        await writePost();
      }
      catch (error) {
        console.error('Error adding document: ', error);
      }

      setChanged(previousState => !previousState)
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
    
    setInput('');
    setLoading(false);
    

  };


const recentItem = (topic) => (
    <div className="feed__recentitem">
      <span className="feed__hash">#</span>
      <p>{topic}</p>
    </div>
  )


  return (
    <div className='feed'>
      <div className="feed__hashes ">
        <p className="p-2 font-semibold text-base">Talks about</p>
        {recentItem("Engineering")}
        {recentItem("AutoGPT")}
        {recentItem("75 Hard")}
        {recentItem("Fitness")}
        {recentItem("Travelling")}
        
      </div>
        <div className="feed__inputContainer">
            <form>
                <div className="comment2" style={{backgroundColor: "white", border: "1px solid lightgray"}}>
                  <CreateIcon className=""/>
                  <textarea
                    className="input"
                    id="review-text"
                    onChange={handleInput}
                    placeholder="Write a post" 
                    ref={inputRef}
                    rows={1}
                    value={input}
                    autoComplete="off"
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <button onClick={sendPost} type='submit' style={{ display: 'none' }}>Send</button>
            </form>
            <div className="feed__inputOptions">
              <div className="text-xs text-slate-500 min-h-[76px]">
                {loading ? (<button className="btn btn-ghost loading pt-8" ></button>) : (<div><div className={char_limit - input.length > 30 ? "pt-4 text-center" : "pt-4 text-center text-red-600"}>You have {(char_limit - input.length )} characters left.</div>{!error ? (<div className="pt-4 text-center text-[10px]">Posts and comments are checked via <a href="https://openai.com/blog/openai-api">OpenAI API.</a></div>) : (<div className="pt-4 text-center text-[12px] text-red-500">{error}</div>)}</div>)}
              </div>  
            </div>
        </div>
        {posts.map(({ id, data: {name, description, message, timestamp} }) => (
          <Post key={id}
          id={id}
          name={name} 
          description={description}
          message={message}
          timestamp={timestamp}
          />

        ))
        }


    </div>
  )
}

export default Feed

