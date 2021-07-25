import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReactComponent as Logo } from './assets/doggy-data-logo.svg';
import AppRouter from './AppRouter';
import { StyledRoot, StyledTopbar } from './App.styles';
import theme from './theme.js';

const customTheme = createTheme({
  typography: {
    'h3': {
      color: '#B79593',
    },
    body1: {
      color: '#B79593',
    },
    caption: {
      color: '#B69593',
    },
    fontFamily: ['Lato', 'san-serif'].join(',')
  },
});

function App() {
  return (
    <ThemeProvider theme={ {
      ...theme,
      ...customTheme,
    }
    } >
      <StyledRoot>
        <CssBaseline />
        <StyledTopbar>
          <Logo />
        </StyledTopbar>
        <AppRouter />
      </StyledRoot>
    </ThemeProvider>
  );
}

export default App;
