// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const bookTickets = require('./bookTickets');
const unbookTicket = require('./unbookTicket');
const getCinemaList = require('./getCinemaList');
const getTickets = require('./getTickets');

module.exports = {
  bookTickets,
  getCinemaList,
  getTickets,
  unbookTicket,
};




