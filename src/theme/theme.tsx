import { createMuiTheme } from '@material-ui/core/styles';
import { getDirection, getFont } from '../localization/index';
import palette from './palette';
let theme = createMuiTheme();
theme = createMuiTheme({
  direction: getDirection(),
  palette: palette,
  spacing: 2.5,
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: getDirection() === 'rtl' ? 52 : 50,
      lineHeight: '4rem',
      fontFamily: getFont(),
      color: '#fff',
    },
    h2: {
      fontSize: getDirection() === 'rtl' ? 38 : 40,

      color: '#fff',
      fontWeight: 700,
      lineHeight: '3.2857rem',
      fontFamily: getFont(),
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 24 : 26,
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 30 : 32,
      lineHeight: '2.7rem',
      fontFamily: getFont(),
      color: '#fff',
      textAlign: 'left',
    },
    h4: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 26 : 28,
      lineHeight: '2.43rem',
      fontFamily: getFont(),
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 20 : 22,
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 21 : 23,
      lineHeight: '2.14rem',
      fontFamily: getFont(),
      textAlign: 'left',
    },
    h6: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 18 : 20,
      lineHeight: '1.857rem',
      fontFamily: getFont(),
      color: '#FFF',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: getDirection() === 'rtl' ? 18 : 20,
      lineHeight: '2rem',
      fontFamily: getFont(),
      marginTop: 15,
    },
    body2: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 13 : 15,
      color: '#a4acc4',
      fontFamily: getFont(),
      letterSpacing: 1,

      textAlign: 'center',
    },
    body1: {
      textAlign: getDirection() === 'ltr' ? 'left' : 'justify',
      fontWeight: 400,
      fontSize: getDirection() === 'rtl' ? 16 : 18,
      color: '#a4acc4',
      fontFamily: getFont(),
    },
    button: {
      fontWeight: 700,
      fontSize: getDirection() === 'rtl' ? 12 : 14,
      color: '#fff',
      fontFamily: getFont(),
      letterSpacing: 2,
    },
  },
});
export default theme;
