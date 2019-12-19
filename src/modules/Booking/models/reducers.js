import keyBy from 'lodash/keyBy';

export function configureTickets(state, tickets) {
  return {
    ...state,
    ticket: {
      list: tickets,
      map: keyBy(tickets, 'id'),
      ids: tickets.filter(Boolean).map(x => x.id)
    }
  };
}

export const setPatrons = (state, patrons) => ({
  ...state,
  patrons
});
