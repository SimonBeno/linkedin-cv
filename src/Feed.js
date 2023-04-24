import React, { useEffect, useState } from 'react';

// stylesheets
import "./Feed.css";

//Firebase
import { db } from "./firebase.js";
import { getDocs, collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore/lite';

//openAI
import { getOpenAIResponse } from './app/openai.js';
import { Configuration, OpenAIApi } from 'openai';

// own components
import InputOption from './InputOption.js';
import Post from './Post.js';
import Loading from './Loading.js';

// outside components
import CreateIcon from '@mui/icons-material/Create';
//import ImageIcon from '@mui/icons-material/Image';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';


function Feed() {

  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  const [changed, setChanged] = useState(false); // to fire off new post render
  const [loading, setLoading] = useState(false);

  
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

    
  }, [changed]) // if we pass in blank dependency (empty array), it will fire off only once, when the main component loads (comp Feed in this case), but never again when it rerenders


const sendPost = async e => {
    e.preventDefault(); 

    setLoading(true);

    const lookingfor = "Message is good";

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
        const response = await fetch('http://localhost:8000/completions', options)
        const data = response.json();
        return data;
      } 
      catch(error) {
        console.error(error)
      }

    }

    var server_response = await serverResponse(input);
    var response = server_response.choices[0].message.content;
    const includes = response.includes(lookingfor);


    if (includes)
    {
      const postsColl = collection(db, 'posts');

      async function writePost()
      {
        await addDoc(postsColl, {
          name: 'Simon',
          description: 'picusko',
          message: input,
          photoUrl: '',
          timestamp: serverTimestamp(),
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
    else if (!includes){
      console.log("Not OK");
    }
    
    setInput('');
    setLoading(false);

  };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            
            <div className="feed__inputOptions">
              <div className="text-xs text-slate-500 min-h-[48px]">
                {loading ? <button className="btn btn-ghost loading pt-4" ></button> : <div className="pt-6">All posts are controlled via <a href="https://openai.com/blog/openai-api">OpenAI API.</a></div>}
              </div>
            </div>
        </div>

        {posts.map(({ id, data: {name, description, message, photoUrl } }) => (
          <Post key={id}
          name={name} 
          description={description}
          message={message}/>
        ))
        }


    </div>
  )
}

export default Feed

