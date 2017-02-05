'use strict'

const fbTemplate = require("claudia-bot-builder").fbTemplate

function credits(){
	return[
		"Thanks for checking out NBAbot",
		"Created with love by Pavneet Singh",
		new fbTemplate.Button('More actions:')
			.addButton('Source Code','https://github.com/pavneetskapoor/NBAbot')
			.get()

	]
}

module.exports = credits