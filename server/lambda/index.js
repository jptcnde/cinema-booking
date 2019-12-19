// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const bookTickets = require('./bookTickets');
const unbookTicket = require('./unbookTicket');
const getTickets = require('./getTickets');

module.exports = {
  bookTickets,
  getTickets,
  unbookTicket,
};




