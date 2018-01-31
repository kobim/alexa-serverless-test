'use strict';
const alexa = require('alexa-app');

module.exports = provider => {
  const alexaApp = new alexa.app('sls-test');

  alexaApp.launch((request, response) => {
    response.say(`Serverless with ${provider} works!`);
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

  return alexaApp;
};