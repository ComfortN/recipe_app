import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutSection from './Components/About/AboutSection';
import RecipeList from './Components/Recipe/RecipeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './Components/Recipe/RecipeDetails';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Alerts from './Components/Alerts/Alerts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [alertVisible, setAlertVisible] = useState(false);


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


  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setAlertMessage('Successfully logged out');
    setAlertType('success');
    setAlertVisible(true);
  };


  return (
    

    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        
        <Alerts
          message={alertMessage} severity={alertType}
          visible={alertVisible} onClose={() => setAlertVisible(false)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutSection />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </Router>

  );
}

export default App;
