import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import purple from '@material-ui/core/colors/purple';

export default () =>
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1024,
        xl: 1366
      }
    },
    palette: {
      common: {
        white: '#fff',
        black: '#000',
        grey,
        red,
        yellow,
        purple
      }
    },

    typography: {
      useNextVariants: true,
      color: 'red',
      fontFamily: [
        'Nunito',
        'Quicksand',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      caption: {
        color: grey[600],
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 'normal',
        lineHeight: 18 / 12
      },
      body1: {
        fontWeight: 600
      }
    }
  });
