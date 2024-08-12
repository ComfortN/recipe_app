import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { AppBar, Toolbar, Box, Typography, Button, IconButton, InputBase } from '@mui/material';
import {Menu, Search, AccountCircleOutlined } from '@mui/icons-material';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ isAuthenticated, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);


  // useEffect(() => {
  //   // Check if the user is authenticated
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, []);


  const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
  };


  const handleLogout = () => {
    onLogout();
    // localStorage.removeItem('token');
    // setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
    <AppBar position="static">
      <Toolbar className='Toolnav'>
        <Box className='menuName'>
            
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <Menu />
        </IconButton>

        
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RecipeApp
        </Typography>

        </Box>
        

        
        <Box className="searchContainer">
          <div className="search">
            <Search className="searchIcon" />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className="inputRoot"
            />
          </div>
        </Box>

        <Box>
            {isAuthenticated ? (
              <>
                <Button color="inherit" onClick={() => navigate('/add-recipe')}>Add Recipe</Button>
                <IconButton color="inherit" onClick={() => navigate('/profile')}>
                  <AccountCircleOutlined />
                </IconButton>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                <Button color="inherit" onClick={() => navigate('/signup')}>Sign Up</Button>
              </>
            )}
          </Box>

        

        
      </Toolbar>
    </AppBar>
    <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </>
    
  )
}
