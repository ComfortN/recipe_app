import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { AppBar, Toolbar, Box, Typography, Button, IconButton, InputBase, Menu, MenuItem } from '@mui/material';
import {Menu as MenuIcon, Search, AccountCircleOutlined } from '@mui/icons-material';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import ProfileDialog from '../Profile/ProfileDialog';

export default function Navbar({ isAuthenticated, onLogout, searchTerm, setSearchTerm, toggleSidebar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
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


  // const toggleSidebar = () => {
  //     setSidebarOpen(!sidebarOpen);
  // };


  const handleLogout = () => {
    onLogout();
    // localStorage.removeItem('token');
    // setIsAuthenticated(false);
    navigate('/');
  };


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileOpen = () => {
    setProfileDialogOpen(true);
    handleMenuClose();
  };

  const handleProfileClose = () => {
    setProfileDialogOpen(false);
  };


  const handleMyRecipes = () => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user && user.id) {
        navigate('/my-recipes', { state: { userId: user.id } });
    } else {
        console.error('User ID not found.');
    }
    handleMenuClose();
};


  return (
    <>
    <AppBar position="static">
      <Toolbar className='Toolnav'>
        <Box className='menuName'>
            
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>

        
        <Typography variant="h6" style={{ flexGrow: 1 }} onClick={() => navigate('/')} >
          RecipeApp
        </Typography>

        </Box>
        

        
        <Box className="searchContainer">
          <div className="search">
            <Search className="searchIcon" />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className="inputRoot" value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Box>

        <Box>
            {isAuthenticated ? (
              <>
                <Button color="inherit" onClick={() => navigate('/add-recipe')}>Add Recipe</Button>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <AccountCircleOutlined />
                </IconButton>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              
                <Menu
                  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleProfileOpen}>Profile</MenuItem>
                  <MenuItem onClick={handleMyRecipes}>My Recipes</MenuItem>
                </Menu>
              
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
    <ProfileDialog open={profileDialogOpen} onClose={handleProfileClose} />
    </>
    
  )
}
