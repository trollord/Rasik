// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
    secondary: {
      main: '#2ecc71',
    },
    background: {
      default: '#ecf0f1',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'inter',
  },
});

export { theme };
