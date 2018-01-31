'use strict';
const alexaApp = require('./sharedApp')('AWS Lambda');

module.exports.alexa = alexaApp.lambda();