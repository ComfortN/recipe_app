import React from 'react'
import './Footer.css'
import { Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Footer({ onOpenTerms }) {
    const navigate = useNavigate();
  return (
    <Box className="footer">
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} RecipeApp. All rights reserved.
      </Typography>
      <Box>
        <Link href="/privacy-policy" color="inherit">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" onClick={onOpenTerms}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit">
          Contact Us
        </Link>
      </Box>
    </Box>
  )
}
