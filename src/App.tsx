import React from 'react';
import {
  ThemeProvider,
  jssPreset,
  StylesProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import theme from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
// import IndexScreen from './screens/index';
import Home from './screens/homeScreen';
// import About from './screens/aboutScreen'
// import Portfolios from  "./screens/portfolioScreen"
import IndexScreen from './screens/IndexScreen';
// import Resume from './screens/resume'

import { getDirection } from './localization/index';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return getDirection() === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StylesProvider>
          <CssBaseline />
          <IndexScreen />
        </StylesProvider>
      </BrowserRouter>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <IndexScreen />
        </StylesProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
