import React from 'react';
import { Box, Typography } from '@material-ui/core';
import {
  STATUS_COLORS,
  STATUSES,
  STATUS_DESC
} from '../../../domain-components/Seat/constants';

function Legend() {
  return Object.entries(STATUSES).map(([, status]) => (
    <Box
      bgcolor={STATUS_COLORS[status]}
      p={0.5}
      my={2}
      mr={1}
      textAlign="center"
      width={100}
      display="inline-block"
      key={status}
      color="common.white"
    >
      <Typography color="inherit" variant="caption">
        {STATUS_DESC[status]}
      </Typography>
    </Box>
  ));
}

export default Legend;
