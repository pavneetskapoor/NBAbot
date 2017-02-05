'use strict'

const rp = require('minimal-request-promise')


function greeting(sender, facebookAccessToken){
	return rp.get(`https://graph.facebook.com/v2.6/${request.sender}?fields=first_name&access_token=${originalApiRequest.env.facebookAccessToken}`)
		.then(response => {
			const user = JSON.parse(response.body)
			return[
				'Hello ${user.first_name}.Welcome to NBABot!' 
				'What can I do for you today?',
				 new fbTemplate.Generic
				 	.addBubble("Need Help? :")
				 		.addButton("Specific Actions",)
				 	.addBubble("Let's get to know you more")
						.addButton('Add Favourite NBA Team')
						.addButton('NBA player stats')
						.addButton('NBA team stats')

			]
		})
}