
// 'use strict';
// var excuse = require('huh');
// const botBuilder = require('claudia-bot-builder');
// const fbTemplate = botBuilder.fbTemplate;
// const rp = require('minimal-request-promise');

// module.exports = botBuilder(function (request, originalApiRequest) {
  	
// 	if (!request.postback)

// 		 return rp.get(`https://graph.facebook.com/v2.6/${request.sender}?fields=first_name&access_token=${originalApiRequest.env.facebookAccessToken}`)
// 			.then(response => {
// 				const user = JSON.parse(response.body)

// 				return[
// 				'Hey ${user.first_name}. Welcome to NBABot! What can I do for you today?',
// 					return new fbTemplate.generic()
// 						.addButton('Add Favourite NBA Team')
// 						.addButton('NBA player stats')
// 						.addButton('NBA team stats')
// 					]
// 			});
// };

'use strict'

const botBuilder = require('claudia-bot-builder')
const botFlow = require('./lib/bot-flow.js')

const api = botBuilder(botFlow, {
	platforms: ['facebook']
})



module.exports = api