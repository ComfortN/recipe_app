import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Container, Grid, Typography, Button } from '@mui/material';
import RecipeCard from './RecipeCard';


export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [myRecipes, setMyRecipes] = useState([])
    const [visibleRecipes, setVisibleRecipes] = useState(3);

    //fetching from the API
    // useEffect(() => {
    //     const fetchRecipes = async () => {
    //     try {
    //         const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    //         setRecipes(response.data.meals);
    //         console.log(response)
    //     } catch (error) {
    //         console.error('Error fetching recipes:', error);
    //     }
    //     };

    // fetchRecipes();
    // }, []);


    // fetching from json-server
    useEffect(() => {
        const fetchMyRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:8888/recipes');
                setMyRecipes(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching my recipes:', error);
            }
        };
        fetchMyRecipes();
    }, []);


    const handleShowMore = () => {
        setVisibleRecipes((prev) => prev + 3);
    };

    const combinedRecipes = [...myRecipes, ...recipes];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                    Recipes
                </Typography>
        <Grid container spacing={2}>
            {myRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} />
            </Grid>
            ))}
        </Grid>

        {visibleRecipes < combinedRecipes.length && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowMore}
          style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          More
        </Button>
        )}
        </Container>
    )
}
