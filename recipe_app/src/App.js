import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutSection from './Components/About/AboutSection';
import RecipeList from './Components/Recipe/RecipeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './Components/Recipe/RecipeDetails';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Alerts from './Components/Alerts/Alerts';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import Footer from './Components/Footer/Footer';
import { IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [termsOpen, setTermsOpen] = useState(false);


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


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const handleOpenTerms = () => {
    setTermsOpen(true);
  };

  const handleCloseTerms = () => {
    setTermsOpen(false);
  };

  const handleAcceptTerms = () => {
    setTermsOpen(false);
    
  };


  return (
    

    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} toggleSidebar={toggleSidebar}
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

          
          {sidebarOpen &&  (
            <Sidebar open={sidebarOpen} onClose={toggleSidebar} onSelectCategory={handleCategorySelect} />
          )}
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
                  <RecipeList selectedCategory={selectedCategory} searchTerm={searchTerm} />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/my-recipes" element={<RecipeList />} />

            
          </Routes>

          <Footer onOpenTerms={handleOpenTerms}/>
          <TermsAndConditions open={termsOpen} onClose={handleCloseTerms} onAccept={handleAcceptTerms} />
        </div>
        
      </ThemeProvider>
    </Router>

  );
}

export default App;
