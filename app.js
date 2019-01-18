const request = require('request');
const $ = require('cheerio');

require('dotenv').config();

const WEBHOOK_CHANNEL_LOG = process.env.WEBHOOK_CHANNEL_LOG;
const WEBHOOK_CHANNEL_NOTIFY = process.env.WEBHOOK_CHANNEL_NOTIFY;

// Standesamt terim url and session cookie
let requestOptions = {
	url: process.env.STANDESAMT_URL,
	headers: {
		'Cookie': request.cookie('Zmsappointment='+ process.env.STANDESAMT_COOKIE)
	}
};

request(requestOptions, function (error, response, body) {

	if (!error) {

		let html = response.body;
		let tableHtml = $('.calendar-month-table', html).html();
		let regex = /class\=\"buchbar\"/g;

		let foundMatch = tableHtml.match(regex);
		
		if (foundMatch !== null) {
			sendWebhookMessage(WEBHOOK_CHANNEL_NOTIFY, 'Termin buchbar!!');
		} else {
			sendWebhookMessage(WEBHOOK_CHANNEL_LOG, 'Termin nicht buchbar!!');
		}

	} else {
		sendWebhookMessage(WEBHOOK_CHANNEL_LOG, 'Request Fehler: ' + error.code);
	}
});

// ### Helper functions ###

function sendWebhookMessage(channelBot, msg) {
	request.post(channelBot, {
		json: {
			content : getTimestamp() + ' | ' + msg
		}
	}, (error, res, body) => {
	})
}

function getTimestamp() {
	var currentDate = new Date();

	var date = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var hour = currentDate.getHours();
	var min = currentDate.getMinutes();

	min = min <= 9 ? "0" + min : min ;
	month = month <= 9 ? "0" + month : month;

	return year +"-"+ month +"-"+ date +" "+ hour +":"+ min;
}