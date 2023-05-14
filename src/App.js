import React, {useState, useEffect, useRef}  from 'react';
import { getDocs, collection, addDoc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore/lite';
import { db } from "./firebase.js";

import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js"
import Feed from "./Feed.js"
import Chat from "./Chat.js"
import HashLoader from "react-spinners/HashLoader";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { Avatar } from "@mui/material";


function App() {

  const [loaded, setLoaded] = useState(false);
  const [chatOpened, setChatOpened] = useState(false);
  const [chatDisplayed, setChatDisplayed] = useState(false);

  const SchoolRef = useRef(null);
  const WorkRef = useRef(null);
  const SkillsRef = useRef(null);
  const LangRef = useRef(null);
  const VolRef = useRef(null);
  const RefRef = useRef(null);
  const ProjectsRef = useRef(null);

function handleClick(sectionRef){
    const offset = 16;
    const targetPosition = sectionRef.current.offsetTop + offset;
    window.scrollTo({ top:targetPosition,  behavior: 'smooth' });
  }


function handleOpenChat() {
      setChatOpened(!chatOpened);
    }


  return (


      <div className="app ">

        {!loaded &&

        (<div className="loader flex flex-col" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 9999,
          }}>
          <p className="text-linkedin font-bold text-2xl mb-5">Loading</p>
          <HashLoader color="#0C66C8" />

        </div>)
        }

        <Header handleClick={handleClick} ProjectsRef={ProjectsRef} SchoolRef={SchoolRef} WorkRef={WorkRef} SkillsRef={SkillsRef} LangRef={LangRef} VolRef={VolRef} RefRef={RefRef}/>

          <div className="app__body">
            <Sidebar chatOpened={chatOpened} setChatOpened={setChatOpened} chatDisplayed={chatDisplayed} setChatDisplayed={setChatDisplayed} ProjectsRef={ProjectsRef} SchoolRef={SchoolRef} WorkRef={WorkRef} SkillsRef={SkillsRef} LangRef={LangRef} VolRef={VolRef} RefRef={RefRef}/>
            <Feed loaded={loaded} setLoaded={setLoaded}/>
          </div>

          <Chat chatOpened={chatOpened} setChatOpened={setChatOpened} chatDisplayed={chatDisplayed} setChatDisplayed={setChatDisplayed}/>

      </div>

  );
}

export default App;
