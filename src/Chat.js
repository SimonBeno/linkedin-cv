import React, {useState, useEffect}  from 'react';
import './App.css';
import './Chat.css';


import CloseIcon from '@mui/icons-material/Close';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { Avatar } from "@mui/material";
import profilePic from './utils/Simon.jpg';

import TextField from '@mui/material/TextField';

function Chat({chatOpened, setChatOpened, chatDisplayed, setChatDisplayed}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const [activate, setActivate] = useState(false);
  const [activate1, setActivate1] = useState(false);
  const [activate2, setActivate2] = useState(false);
  const [validInput, setValidInput] = useState(true);


function closeChat() {
      setChatDisplayed(false)
      setChatOpened(false);
      setMessage("")
      setValidInput(true);
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

  var value = e.target.value;

  if (value.length > 2000){
    var value = value.slice(0, 2000);
  }

  setMessage(value);

  if (value){
    setActivate2(true);
  }
  else {
   setActivate2(false); 
  }
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

  setLoading(true);

  const lookingfor = "Message is good";

      async function serverResponse(message, email){

        console.log("message: " + message + " email: " + email);

        const options = {
          method: "POST",
          body: JSON.stringify({
            message: message,
            email: email
          }),
          headers:{
            "Content-Type": "application/json"
          }
        }

        try {
          const response = await fetch('http://localhost:8000/mail_request', options)
          return response;
        } 
        catch(error) {
          console.error(error)
        }

      }

      var server_response = await serverResponse(message, email);
      console.log(server_response);

setLoading(false);
setMessage("");
setEmail("");
setNotification(true);
setTimeout(() => {
    setNotification(false)
  }, 4000)

}




  return (

    <>

      {(chatDisplayed && !chatOpened) ?
      (<div class="fixed bottom-0 right-0 mr-3 ">
        <div onClick={minimizeChat} className="chat_outline flex flex-row justify-between items-center h-[3rem] w-[18rem] rounded-t-lg p-3 pt-3 outline outline-1 drop-shadow-2xl bg-white hover:bg-gray-50 cursor-pointer">
          <div className="flex flex-row items-center">
            <Avatar src={profilePic} className="avatar_chat mr-3" />
            <p className="font-semibold">Simon Beno</p>
          </div>
          <div onClick={closeChat} className="cursor-pointer p-1 hover:bg-gray-200 transition duration-200 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
        </div>
      </div>)

      : (chatDisplayed && chatOpened ) && 

      (<div class=" fixed bottom-0 right-0 mr-3">
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
            
            {!notification ?

              (<form className="flex flex-col items-center" onSubmit={handleSubmit} >
                {validInput ?
                  <input onChange={handleInputChange} onBlur={checkValidity} onFocus={handleFocus} type="text" placeholder="email" className="bg-white input input-bordered w-full max-w-xs" />
                :
                  <input onChange={handleInputChange} onBlur={checkValidity} onFocus={handleFocus} type="text" placeholder="email" className="bg-white input input-bordered input-error w-full max-w-xs" />
                }

                <textarea value={message} onChange={handleTextareaChange} className="bg-white message_textarea textarea textarea-bordered textarea-md mt-2 mb-2 w-full " placeholder="message" autoComplete="off" style={{resize: 'none'}}></textarea>
                


                {
                    !loading ? (
                      activate ? (
                        <button className="btn w-min bg-slate-800 text-white">Submit</button>
                      ) : (
                        <button className="btn btn-disabled w-min bg-gray-200 text-gray-400">Submit</button>
                      )
                    ) : (
                      <div className="text-xs text-slate-500 min-h-[48px] text-center">
                        <button className="btn btn-ghost loading "></button>
                      </div>
                    )
                }


              </form>)
              :
              (<p>Your message has been submitted. Please check your mail.</p>)
            }
          </div>
        </div>

      </div>)

      }
    
  </>

  );
}

export default Chat;