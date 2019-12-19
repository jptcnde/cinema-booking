import { createLogger } from 'redux-logger';
import { init } from '@rematch/core';
import * as models from './models';

const logger = createLogger();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = init({
  models,
  middlewares
});

export const { select, dispatch } = store;

export default store;
