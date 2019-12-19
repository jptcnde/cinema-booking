/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import styles from './AppFooter.style';

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];

const useStyles = makeStyles(styles);

function AppFooter() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component="footer" className={classes.root}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map(footer => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map(item => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Company Name
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}

export default AppFooter;
