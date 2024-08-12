import './Sidebar.css';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import {RestaurantMenu, Fastfood, Cake, RamenDining,FreeBreakfast } from '@mui/icons-material';


import React from 'react'

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="sidebar">
        <List>
          
          <ListItem>
            <ListItemText primary="Categories" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <FreeBreakfast />
            </ListItemIcon>
            <ListItemText primary="Breakfast" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Fastfood />
            </ListItemIcon>
            <ListItemText primary="Lunch" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <RestaurantMenu />
            </ListItemIcon>
            <ListItemText primary="Dinner" />
          </ListItem>

          <Divider />

          
          <ListItem button>
            <ListItemIcon>
              <RamenDining />
            </ListItemIcon>
            <ListItemText primary="Recipe" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}
