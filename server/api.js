'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const client = new AWS.DynamoDB.DocumentClient({});

module.exports = client;
