import keyBy from 'lodash/keyBy';

import { createModel } from '@rematch/core';
import * as reducers from './reducers';
import effects from './effects';

const cinemaList = [
  {
    seats: [20, 5],
    id: 'a1',
    name: 'Cinema A',
    location: 'ABC Mall 3rd Floor Cross St. 12345'
  }
];

const initialState = {
  ticket: {
    list: [],
    map: {}
  },
  cinema: {
    list: cinemaList.filter(Boolean).map(x => x.id),
    map: keyBy(cinemaList, 'id')
  },
  patrons: []
};

export default createModel({
  name: 'booking',
  state: initialState,
  reducers,
  effects
});
