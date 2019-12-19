import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import Form from './Form';

// const CHECKOUT_MSG = 'Your booking details has been submitted, please check your email for confirmation.';

function Checkout(props) {
  const { open, onClose, onFormChange, onSubmit, canSubmit } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
    >
      <DialogTitle id="form-dialog-title">Checkout</DialogTitle>
      <DialogContent>
        <Form onFormChange={onFormChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button disabled={!canSubmit} onClick={onSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Checkout.propTypes = {
  open: PropTypes.bool.isRequired,
  canSubmit: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Checkout;
