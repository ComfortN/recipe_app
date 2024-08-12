import React from 'react'
import './AboutSection.css';
import { Container, Grid, Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AboutSection() {
//     const navigate = useNavigate();

//   const handleJoinUsClick = () => {
//     navigate('/signup');
//   };
    return (
        <Container className="aboutContainer">
            <Grid container spacing={4}>
        
            <Grid item xs={12} md={4}>
            <Typography variant="h2" gutterBottom>
                What We Are About
            </Typography>
            <Typography variant="body1" paragraph>
                We are passionate about food and committed to bringing you the best recipes from around the world. Whether you're looking for quick meals or gourmet dishes, our collection of recipes is designed to inspire and delight. Join us in the kitchen and discover the joy of cooking!
            </Typography>

            <Button variant="contained" color="primary" >
            Join Us
          </Button>

        </Grid>

        
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <img src="./images/breakfast.jpg" alt="About Us 1" className="aboutImage" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img src="./images/chicken.png" alt="About Us 2" className="aboutImage" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img src="./images/pancakes.jpg" alt="About Us 3" className="aboutImage" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img src="./images/soup.jpg" alt="About Us 4" className="aboutImage" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img src="./images/spagetti.jpg" alt="About Us 5" className="aboutImage" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img src="./images/cake.jpg" alt="About Us 6" className="aboutImage" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
