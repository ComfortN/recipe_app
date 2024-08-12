import React, {useState} from 'react'
import './Navbar.css'
import { AppBar, Toolbar, Box, Typography, Button, IconButton, InputBase } from '@mui/material';
import {Menu, Search} from '@mui/icons-material';
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
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
            
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
        </Box>

        

        
      </Toolbar>
    </AppBar>
    <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </>
    
  )
}
