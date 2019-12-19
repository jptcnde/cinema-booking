import { createModel } from '@rematch/core';
import * as reducers from './app.reducers';
import effects from './app.effects';

const initialState = {
  fetching: false,
  currentPatron: {
    email: 'jptconiconde@gmail.com',
    name: 'jopet coniconde'
  }
};

export default createModel({
  name: 'app',
  state: initialState,
  reducers,
  effects
});
