import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#87CEEB",
      darkerMain: "#eef2f6",
      darkerText: "#166483"
    },
    secondary: {
      main: "#F8C8DC",
    },
    dark: {
      main: "#166483",
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ ThemeProvider>
  </React.StrictMode>
);