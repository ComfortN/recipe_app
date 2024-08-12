import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutSection from './Components/About/AboutSection';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#455a64',
        light: '#78909c',
        dark: '#b0bec5',
        contrastText: '#cfd8dc',
      },
      background: {
        default: '#cfd8dc',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <AboutSection />
    </ThemeProvider>

  );
}

export default App;
