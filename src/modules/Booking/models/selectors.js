import get from 'lodash/get';

export const getTicketList = state => get(state, 'booking.ticket.list');

export const getTicketMap = state => get(state, 'booking.ticket.map');

export const getCinemaMap = state => get(state, 'booking.cinema.map');

export const getBookedSeats = (list, selected) =>
  list.map(x => x.seat).filter(x => !selected.includes(x));

export const getSelectedSeats = (list, email) =>
  list.filter(x => x.email === email).map(x => x.seat);
