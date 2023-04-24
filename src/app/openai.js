const { Configuration, OpenAIApi } = require('openai'); 

const config = new Configuration({
  apiKey: '',
});


const openai = new OpenAIApi(config);


export async function getOpenAIResponse (input){

  var response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "I will give you a text and I need you to find out two things: whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory. If it does, reject it. If it does not, accept it. Second, I want you to find out, if this text does make sense. If it is some gibberish or it does not make sense, reject it. Otherwise, accept it. In case you accepted both the meaning and respectability requirements , I want you to return this sentence: Message is good. In case some of the requirements were not met, return the text: Message is bad. This is the text: " + input,
    max_tokens: 1000,
    temperature: 0.0,
  })

  return response = response.data.choices[0].text;

}






































/*
require("dotenv").config();

export async function getOpenAIResponse() {
      const apiKey = process.env.OPENAI_API_KEY;
      console.log("api key:" + apiKey);
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const requestBody = {
        model: "gpt-3.5-turbo",
        max_tokens: 1000,
        messages: [{ role: "user", content: "Say this is a test" }],
        temperature: 0.0,
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
*/

/*

import axios from 'axios';

import { Configuration, OpenAIApi } from "openai";

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getOpenAIResponse(input) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/models',
        {
          prompt:"I will give you a text and I need you to find out, whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory. In case this is true, I want you to return this sentence: Message is bad. In case the text is fine, return the text: Message is good. This is the text: " + input,
          max_tokens: 1000,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
        },
      );
      return response;
    } 
    catch (error) {
      console.error('Error while fetching data from ChatGPT:', error);
    }
};
*/


// Terminal request
/*

    curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "max_tokens": 1000,
     "messages": [{"role": "user", "content": ""}],
     "temperature": 0.0
   }'
*/


//PROMPT
/*
I will give you a text and I need you to find out, whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory. In case this is true, I want you to return this sentence: "Message is bad". In case the text is fine, return the text: "Message is good" .  This is the text:
*/ 