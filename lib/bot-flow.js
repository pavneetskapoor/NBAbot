'use strict'

const welcome = require('./flow/welcome.js');
const credits = require('./flow/credits.js')


function botFlow(request, originalApiRequest){
	console.log(JSON.stringify(request))
	originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

	if (request.text === 'CREDITS')
		return credits()
}