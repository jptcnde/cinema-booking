import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress: {
    color: theme.palette.common.white,
    outline: 0
  }
}));

function ProgressModal(props) {
  const { open } = props;
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="progress"
      aria-describedby="progress indicator"
      open={open}
      className={classes.root}
    >
      <CircularProgress className={classes.progress} />
    </Modal>
  );
}

ProgressModal.propTypes = {
  open: PropTypes.bool.isRequired
};

export default ProgressModal;
