import { ThemeProvider } from '@material-ui/styles';
import { ReactComponent as Logo } from './assets/doggy-data-logo.svg';
import AppRouter from './AppRouter';
import theme from './theme.js';

function App() {
  return (
    <div>
      <ThemeProvider theme={ theme }>
        <Logo />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
