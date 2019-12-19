import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import Seat from '../../../domain-components/Seat';
import { createTheater, getStatus } from './utilis';

function Theater(props) {
  const {
    seats: [seatRows, seatCols],
    bookedSeats,
    unavailableSeats,
    selected,
    onSelect
  } = props;
  const theaters = createTheater(seatRows, seatCols);

  return (
    <Grid alignItems="baseline" container spacing={2}>
      {theaters.map(seats =>
        seats.map(seat => {
          const { text, id } = seat;
          const status = getStatus({
            selected,
            booked: bookedSeats,
            unavailable: unavailableSeats,
            statusId: id
          });
          return (
            <Grid key={id} item xs={4} lg={2}>
              <Seat
                onSelect={onSelect}
                value={id}
                status={status}
                desc={text}
              />
            </Grid>
          );
        })
      )}
    </Grid>
  );
}

Theater.propTypes = {
  seats: PropTypes.arrayOf(PropTypes.number).isRequired,
  bookedSeats: PropTypes.arrayOf(PropTypes.string).isRequired,
  unavailableSeats: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Theater;
