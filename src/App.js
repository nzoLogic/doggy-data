import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReactComponent as Logo } from './assets/doggy-data-logo.svg';
import AppRouter from './AppRouter';
import theme from './theme.js';

const customTheme = createTheme({
  typography: {
    fontFamily: ['Lato', 'san-serif'].join(',')
  },
})
function App() {
  return (
    <div>
      <ThemeProvider theme={ {
        ...theme,
        ...customTheme,
      }
      } >
        <CssBaseline />
        <Logo />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
