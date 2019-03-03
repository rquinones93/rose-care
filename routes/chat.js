const express = require('express');
const router = express.Router();

const accountSid = 'AC307f87d25f6c5ddfcc7ccdfa3467292a';
const authToken  = '53581d3bb97cbb3c098a3e2323703136';
const serviceId = 'ISe58bba6c1787479ca8cf424b24d01409';
const client = require('twilio')(accountSid, authToken);

var channelId = 'CH352362870d8c4b95b512c3bde9935c1c';

// get all messages from users channel
router.get('/', (request, response, next) => {

	client.chat.services(serviceId)
           .channels(channelId)
           .messages
           .each(messages => console.log(messages.body));
	
	response.render('chatlayout',  { title : 'chat' }  );
});

// creates new channel
router.get('/new/:channelName',(request, response, next) => {

	client.chat.services(serviceId)
           .channels
           .create({friendlyName: request.params.channelName})
           .then(channel => console.log(channel.sid));
           

    response.render('chatlayout', {title:'chat'});
});

// gets member list from users channel
router.get('/members/',(request, response, next) => {

	/* get channelId from database */
	client.chat.services(serviceId)
           .channels(channelId)
           .members
           .each(members => console.log(members.sid));
       
    response.render('chatlayout', {title:'chat'});
});

// posts message to users channel
router.post('/',(request, response, next) => {

	console.log(request.body);
	client.chat.services(serviceId)
           .channels(channelId)
           .messages
           .create({body: request.body.message})
           .then(message => console.log(message.body));


	response.render('chatlayout',{title:'chat'});
});



module.exports = router;