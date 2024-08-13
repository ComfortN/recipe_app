import React from 'react'
import './Footer.css'
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box className="footer">
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} RecipeApp. All rights reserved.
      </Typography>
      <Box>
        <Link href="#" color="inherit">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
        <Link href="#" color="inherit">
          Contact Us
        </Link>
      </Box>
    </Box>
  )
}
