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

function UnbookDialog(props) {
  const { open, onClose, onSubmit } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Checkout Info</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove the reservation?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

UnbookDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UnbookDialog;
