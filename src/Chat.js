import React, {useState, useEffect}  from 'react';
import './App.css';
import './Chat.css';


import socketIOClient from "socket.io-client";


//import CloseIcon from '@mui/icons-material/Close';
//import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { Avatar } from "@mui/material";
import profilePic from './utils/Simon.jpg';

//import TextField from '@mui/material/TextField';

function Chat({chatOpened, setChatOpened, chatDisplayed, setChatDisplayed}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingValidation, setLoadingValidation] = useState(false);
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);

  const [activate, setActivate] = useState(false);
  const [activate1, setActivate1] = useState(false);
  const [activate2, setActivate2] = useState(false);
  const [validInput, setValidInput] = useState(true);


function closeChat() {
      setChatDisplayed(false)
      setChatOpened(false);
      setEmail("")
      setMessage("")
      setValidInput(true);
      setNotification(false);
      setError(false);
    }

function minimizeChat() {
  setChatOpened(!chatOpened);
}


function handleInputChange(e) {

  var input = e.target.value;

  const validInput = (input) => {

    if (!input) {
      setActivate1(false);
    } else { 

      setNotification(false);
      const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;

      const checkFormat = () => {
        if (regex.test(input)) {
          setActivate1(true);
        } else {
          setActivate1(false);
        }
      }

      checkFormat();
    }
  }

  validInput(input);
  setEmail(input);
}



function handleTextareaChange(e) {


  const value = e.target.value;

  if (value.length > 2000){
    value = value.slice(0, 2000);
  }

  if (value){
    setActivate2(true);
    setNotification(false);
    setError(false);
  }
  else {
   setActivate2(false); 
  }

  setMessage(value);

}

useEffect(() => {
  if (activate1 && activate2){
    setActivate(true);
  } else {
    setActivate(false);
  }
}, [activate1, activate2])



function checkValidity(e){
  if (e.target.value){
    if (activate1){
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }
}


function handleFocus(){
  setValidInput(true);
}



const handleSubmit = async e => {
  e.preventDefault();

  // TODO disable email and message input

  setLoading(true);
  setLoadingSubmit(true);

      async function serverResponse(message, email){

        console.log("1 " + message)
        console.log("2 " + email)

        const options = {
          method: "POST",
          body: JSON.stringify({
            message: message,
            email: email,
          }),
          headers:{
            "Content-Type": "application/json"
          }
        }

        try {
          //const response = await fetch('http://localhost:8000/mail_request', options) // DEVELOPMENT
          const response = await fetch('https://linkedin-cv-beno.herokuapp.com/mail_request', options) // PRODUCTION
          return response;
        } 
        catch(error) {
          console.error(error)
        }

      }

      var server_response = await serverResponse(message, email);
      console.log(server_response);
      setLoadingSubmit(false);
      setLoadingValidation(true);


      // WEB SOCKET
      const ENDPOINT = "https://linkedin-cv-beno.herokuapp.com";
      const socket = socketIOClient(ENDPOINT);

      socket.on("email_event", data => {
        console.log(data);
        if (data.includes(email)){ // prevent reacting to data sent from server triggered by other user's mails
          if (data.includes("deferred")){
            setLoading(false);
            setNotification(true);
            setError(true);
            setMessage("");
            setEmail("");
            setActivate(false);
            setActivate1(false);
            setActivate2(false);
            setLoadingValidation(false);
            socket.off("email_event");
          }
          else if (data.includes("delivered")){
            setLoading(false);
            setNotification(true)
            setMessage("");
            setEmail("");
            setActivate(false);
            setActivate1(false);
            setActivate2(false);
            setLoadingValidation(false);
            socket.off("email_event");
          }
        }
      })

}




  return (

    <>

      {(chatDisplayed && !chatOpened) ?
      (<div className="fixed bottom-0 right-0 mr-3 ">
        <div onClick={minimizeChat} className="chat_outline flex flex-row justify-between items-center h-[3rem] w-[18rem] rounded-t-lg p-3 pt-3 outline outline-1 drop-shadow-2xl bg-white hover:bg-gray-50 cursor-pointer">
          <div className="flex flex-row items-center">
            <Avatar src={profilePic} className="avatar_chat mr-3" />
            <p className="font-semibold">Simon Beno</p>
          </div>
          <div onClick={closeChat} className="cursor-pointer p-1 hover:bg-gray-200 transition duration-200 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
        </div>
      </div>)

      : (chatDisplayed && chatOpened ) && 

      (<div className=" fixed bottom-0 right-0 mr-3">
        <div className="chat_outline h-[25rem] w-[18rem] rounded-t-lg  outline outline-1 drop-shadow-2xl bg-white">
          <div onClick={minimizeChat} className=" hover:bg-gray-50 cursor-pointer transition duration-100">
            <div className="p-3 flex flex-row justify-between items-center">
              <div className="flex items-center">
                <Avatar src={profilePic} className="avatar_chat mr-3" />
                <p className="font-semibold ">Simon Beno</p>
              </div>
              <div onClick={closeChat} className="cursor-pointer p-1 hover:bg-gray-200 transition duration-200 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
            </div>
          </div>
          <div className="p-3">
            

              <form className="flex flex-col items-center" onSubmit={handleSubmit} >
                {validInput ?
                  <input disabled={loading} value={email} onChange={handleInputChange} onBlur={checkValidity} onFocus={handleFocus} type="text" placeholder="email" className="bg-white input input-bordered w-full max-w-xs" />
                :
                  <input disabled={loading} value={email} onChange={handleInputChange} onBlur={checkValidity} onFocus={handleFocus} type="text" placeholder="email" className="bg-white input input-bordered input-error w-full max-w-xs" />
                }

                <textarea disabled={loading} value={message} onChange={handleTextareaChange} className="bg-white message_textarea textarea textarea-bordered textarea-md mt-2 mb-2 w-full " placeholder="message" autoComplete="off" style={{resize: 'none'}}></textarea>
                


                {
                    !loading ? (
                      !notification ? (
                      activate ? (
                        <button className="btn w-min bg-slate-800 text-white">Submit</button>
                      ) : (
                        <button className="btn btn-disabled w-min bg-gray-200 text-gray-400">Submit</button>
                      ))
                      :
                        !error ?
                        (<div className="flex flex-col items-center p-2 bg-green-200 rounded-2xl" style={{marginTop: -40}}>
                          <p className="text-xs text-center font-semibold">Your request has been submitted!</p>
                          <p className="text-xs text-center mt-2" >If you don't see the mail in your inbox within a few minutes, please check the Spam and Promotions folder</p>
                        </div>)
                        :
                        (<div className="flex flex-col items-center p-2 bg-red-300 rounded-2xl" style={{marginTop: -20}}>
                          <p className="text-xs text-center font-semibold">Request failed</p>
                          <p className="text-xs text-center mt-2" >You seemed to have provided invalid email. Please, try again.</p>
                        </div>)

                    )

                    : 

                    loadingSubmit ? 
                      (<div className="text-xs text-slate-500 min-h-[48px] text-center">
                        <p className="mt-4">Submitting...</p>
                      </div>)
                      :
                      (<div className="text-xs text-slate-500 min-h-[48px] text-center">
                        <p className="mt-4">Validating email...</p>
                      </div>)
                    
                }


              </form>
          </div>
        </div>

      </div>)

      }
    
  </>

  );
}

export default Chat;
