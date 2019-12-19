import { makeStyles } from '@material-ui/styles';

const desktop = !window.IS_DESKTOP
  ? {}
  : {
      '& ::-webkit-scrollbar': {
        width: 6
      },

      /* Track */
      '& ::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
        '-webkit-border-radius': 4,
        'border-radius': 4
      },

      /* Handle */
      '& ::-webkit-scrollbar-thumb': {
        '-webkit-border-radius': 4,
        'border-radius': 4,
        background: 'rgba(195,195,195,195.8)',
        '-webkit-box-shadow': 'inset 0 0 6px rgba(195,195,195,195.5)'
      },

      '& ::-webkit-scrollbar-thumb:window-inactive': {
        background: 'rgba(255,255,255,255.4)'
      }
    };

const useGlobalStyles = makeStyles(theme => ({
  '@global': {
    'input[type=date],input[type=date]::-webkit-inner-spin-button,input[type=date]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none'
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: 'none'
    },
    // based on Google Pixel XL sizing
    '#root': {
      ...desktop
    },
    br: {
      marginTop: theme.spacing(3),
      display: 'block',
      content: '""'
    }
  }
}));

export default useGlobalStyles;
