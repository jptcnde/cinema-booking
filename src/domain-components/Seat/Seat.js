import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Typography } from '@material-ui/core';

import useStyles from './Seat.style';
import { STATUS_COLORS, STATUSES } from './constants';

function Seat(props) {
  const { onSelect, status, value, desc } = props;

  const classes = useStyles();

  const disabled = [STATUSES.booked, STATUSES.unavailable].includes(status);

  const className = clsx(classes.root, disabled && classes.disabled);

  return (
    <Box
      className={className}
      bgcolor={STATUS_COLORS[status]}
      onClick={() => onSelect(value, desc)}
      data-testid="domain-cmp-seat"
      aria-disabled={disabled}
    >
      <Typography color="inherit" variant="body1">
        {desc}
      </Typography>
    </Box>
  );
}

Seat.propTypes = {
  onSelect: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Seat;
