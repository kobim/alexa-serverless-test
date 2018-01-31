'use strict';
const alexaApp = require('./sharedApp')('Google Cloud Functions');

module.exports.alexa = (request, response) => {
  alexaApp.request(request.body)
    .then(json => {
      response.status(200).send(json);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server Error');
    });
};