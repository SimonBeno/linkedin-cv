const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


app.post('/completions', async (req, res) => {

	const openai_API_KEY = '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'

	var message = req.body.message;
	var prompt = "I want you to act as a bad language and meaning checker. I will give you a text and I need you to find out two things: whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory or condescending. If you feel like this message was not appropriate based on the previous requirements, return this text: Bad language. Otherwise, consider this message to be respectful. Second, I want you to find out, if this text does make sense. If it is some gibberish and it does not comprise of actual words, or these words are in an order that does not make sense in any context or any conversation, return this text: No meaning. Otherwise, consider this text has some meaning. If the message passed both tests, in other words if it is both respectful and has a meaning, return this text: Message is good. This is the text: " + message;

	const options = {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${openai_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [{role: "user", content: prompt}],
			temperature: 0,
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





var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

app.post('/mail_request', async (req, res) => {

	var email_address = req.body.email;
	var message = req.body.message;

	console.log(email_address)
	console.log(message)


	// tu je guide ako pridat open tracking, cc, bcc, attachments, reply to etc: https://docs.sendgrid.com/api-reference/mail-send/mail-send#handlebars

	const sgMail = require('@sendgrid/mail')
	const sendgrid_API_KEY = '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';
	sgMail.setApiKey(sendgrid_API_KEY);
	const msg1 = {
	  to: email_address, // Change to your recipient
	  from: 'simon@sbeno.us', // Change to your verified sender
	  templateId: 'd-b736891b89c140b3b085fe50e7856f94',
	  //dynamicTemplateData: {
	  //  variable1: "value1",
	  //  variable2: "value2",
	  //}
	}
	const msg2 = {
		to: 'simon@sbeno.us', // Change to your recipient
	  from: 'simon@sbeno.us', // Change to your verified sender
	  subject: 'New message',
	  text: 'You have a new message Simon',
	  html: `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:200px;"><p style="font-family:Arial, sans-serif; font-weight:600; text-align:center;">New message from ${email_address}: <br><br> ${message}</p></div>`,
	}
	sgMail
	  .send(msg1)
	  .then(() => {
	    console.log('User mail sent')
	  })
	  .catch((error) => {
	    console.error("There was an error when sending to user: " + error)
	  })

	sgMail
	  .send(msg2)
	  .then(() => {
	    console.log('Simon mail sent')
	  })
	  .catch((error) => {
	    console.error("Error sending to Simon: " + error)
	  })


	  // OPTIONAL implement getting status from the message (if it was delivered or not) or use some Bounce SaaS



	  // add email address with message to firestore database
	var emailsColl = db.collection('emails');

	try {
	  await emailsColl.add({
	    email_address: email_address,
	    email_text: message,
	  });

	  console.log("Document successfully written!");
	} catch (error) {
	  console.error("Error writing document: ", error);
	}

	  // send info back to client-side that message was submitted successfully
	  const success = "Email sent successfully";
	  res.send(success); //send response to PORT8000/mail_request

})


app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))