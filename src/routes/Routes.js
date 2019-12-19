import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Booking from '../modules/Booking';
import routes from './constants';

function Routes() {
  return (
    <Switch>
      <Route component={Booking} path={routes.booking} />
      <Route component={Booking} path="/" />
    </Switch>
  );
}

export default Routes;
