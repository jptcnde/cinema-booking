import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createTheme from './createTheme';

const theme = createTheme();

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired
};

export default Theme;
