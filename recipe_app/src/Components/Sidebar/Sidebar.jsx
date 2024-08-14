import './Sidebar.css';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import {RestaurantMenu, Fastfood, Cake, RamenDining,FreeBreakfast } from '@mui/icons-material';


import React from 'react'

export default function Sidebar({ open, onClose, onSelectCategory }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="sidebar">
        <List>
          
          <ListItem>
            <ListItemText primary="Categories" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => onSelectCategory('Breakfast')}>
            <ListItemIcon>
              <FreeBreakfast />
            </ListItemIcon>
            <ListItemText primary="Breakfast" />
          </ListItem>
          <ListItem button onClick={() => onSelectCategory('Lunch')}>
            <ListItemIcon>
              <Fastfood />
            </ListItemIcon>
            <ListItemText primary="Lunch" />
          </ListItem>
          <ListItem button onClick={() => onSelectCategory('Dinner')}>
            <ListItemIcon>
              <RestaurantMenu />
            </ListItemIcon>
            <ListItemText primary="Dinner" />
          </ListItem>
          <ListItem button onClick={() => onSelectCategory('Appetiser')}>
            <ListItemIcon>
              <RestaurantMenu />
            </ListItemIcon>
            <ListItemText primary="Appetiser" />
          </ListItem>
          <ListItem button onClick={() => onSelectCategory('Main Course')}>
            <ListItemIcon>
              <RestaurantMenu />
            </ListItemIcon>
            <ListItemText primary="Main Course" />
          </ListItem>
          <ListItem button onClick={() => onSelectCategory('Dessert')}>
            <ListItemIcon>
              <Cake />
            </ListItemIcon>
            <ListItemText primary="Dessert" />
          </ListItem>

          <Divider />

          
          <ListItem button onClick={() => onSelectCategory('All')}>
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
