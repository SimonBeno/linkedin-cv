const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const API_KEY = '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'

app.post('/completions', async (req, res) => {

	var message = req.body.message;
	var prompt = "I want you to act as a bad language and meaning checker. I will give you a text and I need you to find out two things: whether this text includes some swear words, some inappropriate things, if it is trying to make fun of someone or some public figure, if it is derrogatory. If you feel like this message was not appropriate based on the previous requirements, return this text: Bad language. If you feel it is OK, return this text: Message is good. Second, I want you to find out, if this text does make sense. If it is some gibberish and it does not comprise of actual words, or these words are in an order that does not make sense in any context or any conversation, return this text: No meaning. Otherwise, return this text: Message is good. This is the text: " + message;

	const options = {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${API_KEY}`,
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



app.post('/mail_request', async (req, res) => {

	var email_address = req.body.email;
	var message = req.body.message;

	console.log(email_address)
	console.log(message)


	// tu je guide ako pridat open tracking, cc, bcc, attachments, reply to etc: https://docs.sendgrid.com/api-reference/mail-send/mail-send#handlebars

	const sgMail = require('@sendgrid/mail')
	const API_KEY = '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';
	sgMail.setApiKey(API_KEY);
	const msg1 = {
	  to: email_address, // Change to your recipient
	  from: 'simon@sbeno.us', // Change to your verified sender
	  subject: 'Simon Beno Message Request',
	  text: 'Your request has been submitted',
	  html: '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:200px;"><h1 style="font-family:Arial, sans-serif;">Thanks for reaching out!</h1><p style="font-family:Arial, sans-serif; font-weight:600; text-align:center;">Your request has been sent to simon@sbeno.us. I will be with you shortly.</p><p style="font-family:Arial, sans-serif; text-align:center; font-size:14px;">In the meantime, you can check the posts on my <span><a href="https://www.sbeno.us">website</a></span> to see if you can find the answer there.</p></div><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center; display:flex; flex-direction:column; margin-top:40" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><p style="font-size:12px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="font-family:sans-serif;text-decoration:none;">Stop receiving these mails</a></p><p style="font-size:12px; line-height:1px"><a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="font-family:sans-serif;text-decoration:none;">Unsubscribe Preferences</a></p></div>', // template: https://mc.sendgrid.com/dynamic-templates/d-e3a8ac72a1164ef388ba0a7265516118/version/4fff62db-07f6-4163-bc20-51dcb65229a5/editor
	}
	const msg2 = {
		to: 'beno.simon@icloud.com', // Change to your recipient
	  from: 'simon@sbeno.us', // Change to your verified sender
	  subject: 'New message',
	  text: 'You have a new message Simon',
	  html: `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:200px;"><p style="font-family:Arial, sans-serif; font-weight:600; text-align:center;">New message from ${email_address}: ${message}</p></div>`,
	}
	sgMail
	  .send(msg1)
	  .then(() => {
	    console.log('User mail sent')
	  })
	  .catch((error) => {
	    console.error(error)
	  })

	sgMail
	  .send(msg2)
	  .then(() => {
	    console.log('Simon mail sent')
	  })
	  .catch((error) => {
	    console.error(error)
	  })


	  // OPTIONAL implement getting status from the message (if it was delivered or not) or use some Bounce SaaS



	  // add email address with message to firestore database



	  // send info back to client-side that message was submitted successfully
	  const success = "Email sent successfully";
	  res.send(success); //send response to PORT8000/mail_request


})


app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))