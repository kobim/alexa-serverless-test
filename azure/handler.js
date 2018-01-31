'use strict';
const alexa = require('alexa-app');

const alexaApp = new alexa.app('sls-test');

alexaApp.launch((request, response) => {
  response.say(`Serverless with Azure works!`);
});

alexaApp.intent('sayNumber', {
    'slots': {
      'number': 'AMAZON.NUMBER'
    },
    'utterances': ['say the number {-|number}']
  }, (request, response) => {
    const number = request.slot('number');
    if (!number) {
      return response.say('What number?').shouldEndSession(false);
    }
    response.say(`You said number ${number}`);
});

exports.alexa = (context, request) => {
  alexaApp.request(request.body)
    .then(json => {
      context.res = {
        body: json
      };
      context.done();
    })
    .catch(err => {
      console.error(err);
      context.res = {
        status: 500,
        body: 'Server Error'
      };
      context.done();
    });
}