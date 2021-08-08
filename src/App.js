import { Home } from './Home';
import { createTheme, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#065fd4'
      }
    },
  })

  return(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
