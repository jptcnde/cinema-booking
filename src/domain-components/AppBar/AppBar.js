/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {
  Toolbar,
  Link,
  AppBar as MuiAppBar,
  Typography,
  Avatar,
  Popover,
  Grid,
  TextField,
  IconButton,
  Box,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AppBar.style';
import { getCurrentPatron } from '../../store/selectors/app';

const useStyles = makeStyles(styles);

function AppBar() {
  const classes = useStyles();
  const {
    app: { applyUser }
  } = useDispatch();

  const currentPatron = useSelector(getCurrentPatron);

  const [anchorEl, setAnchorEl] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleAvatarClick(e) {
    const { target } = e;
    setAnchorEl(target);
  }

  function handleApply() {
    applyUser({ name, email });
  }

  useEffect(() => {
    setName(currentPatron.name);
    setEmail(currentPatron.email);
  }, [currentPatron]);

  const [avatarInitial = ''] = email;

  return (
    <MuiAppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Cinema
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Support
          </Link>
        </nav>
        <IconButton onClick={handleAvatarClick}>
          <Avatar className={classes.avatar}>
            {String(avatarInitial).toUpperCase()}
          </Avatar>
        </IconButton>
      </Toolbar>
      <Popover
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="name"
                value={name}
                type="text"
                onChange={({ target: { value } }) => setName(value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="email"
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleApply}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </MuiAppBar>
  );
}

export default AppBar;
