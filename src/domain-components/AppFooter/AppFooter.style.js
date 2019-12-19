export default theme => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
});
