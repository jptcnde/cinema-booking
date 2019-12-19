import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    borderRadius: 3,
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: {
    cursor: 'none',
    pointerEvents: 'none'
  }
}));
