import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Container, Grid, Typography, Button } from '@mui/material';
import RecipeCard from './RecipeCard';


export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [visibleRecipes, setVisibleRecipes] = useState(3);

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setRecipes(response.data.meals);
            console.log(response)
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
        };

    fetchRecipes();
    }, []);


    const handleShowMore = () => {
        setVisibleRecipes((prev) => prev + 3);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                    Recipes
                </Typography>
        <Grid container spacing={4}>
            {recipes.slice(0, visibleRecipes).map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
                <RecipeCard recipe={recipe} />
            </Grid>
            ))}
        </Grid>

        {visibleRecipes < recipes.length && (
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
