'use strict';
const alexaApp = require('./sharedApp')('Azure');

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