const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const API_KEY = ''

app.post('/completions', async (req, res) => {

	var message = req.body.message;
	var prompt = "I will give you a text and I need you to find out two things: whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory. If it does, reject it. If it does not, accept it. Second, I want you to find out, if this text does make sense. If it is some gibberish or it does not make sense, reject it. Otherwise, accept it. In case you accepted both the meaning and respectability requirements , I want you to return this sentence: Message is good. In case some of the requirements were not met, return the text: Message is bad. This is the text: " + message;

	const options = {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [{role: "user", content: prompt}],
			temperature: 1,
			max_tokens: 1000,
		})
	
	}
	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', options)
		const data = await response.json()
		console.log(data.choices[0].message.content);
		res.send(data) //send response to PORT8000/completions
	} catch {
		console.error(error)
	}	
})


app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))

/*
const { Configuration, OpenAIApi } = require('openai'); 

const config = new Configuration({
  apiKey: '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',
});


const openai = new OpenAIApi(config);


async function getOpenAIResponse(input) {

  var response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "I will give you a text and I need you to find out two things: whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory. If it does, reject it. If it does not, accept it. Second, I want you to find out, if this text does make sense. If it is some gibberish or it does not make sense, reject it. Otherwise, accept it. In case you accepted both the meaning and respectability requirements , I want you to return this sentence: Message is good. In case some of the requirements were not met, return the text: Message is bad. This is the text: " + input,
    max_tokens: 1000,
    temperature: 0.0,
  })

  return response = response.data.choices[0].text;

}
*/
