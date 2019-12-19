import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText
} from '@material-ui/core';

function CheckoutInfoDialog(props) {
  const { open, onSubmit } = props;

  return (
    <Dialog open={open}>
      <DialogTitle>Checkout Info</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your booking details has been submitted, please check your email for
          confirmation.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

CheckoutInfoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CheckoutInfoDialog;
