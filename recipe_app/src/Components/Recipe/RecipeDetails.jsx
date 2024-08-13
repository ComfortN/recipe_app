import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress, Button, Grid } from '@mui/material';
import { Delete, Edit} from '@mui/icons-material';
import axios from 'axios';

export default function RecipeDetails() {
    const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

    const fetchRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:8888/recipes/${id}`);
            console.log('JSON Server Response:', response.data);
            setRecipe(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            setLoading(false);
        }
    };

    fetchRecipe();
}, [id]);


const handleEdit = () => {
    navigate('/add-recipe', { state: { recipe } });
};

const handleDelete = async () => {
    try {
        await axios.delete(`http://localhost:8888/recipes/${id}`);
        navigate('/');
    } catch (error) {
        console.error('Error deleting recipe:', error);
    }
};

if (loading) {
    return <CircularProgress />;
}

if (!recipe) {
    return <Typography variant="h6">Recipe not found.</Typography>;
}


  return (
    <Container>
            <Typography variant="h3" gutterBottom>
                {recipe.name}
            </Typography>
            {typeof recipe.image === 'string' && recipe.image ? (
                <img 
                    src={recipe.image}
                    alt={recipe.name}
                    style={{ width: '50%', height: 'auto' }} 
                />
            ) : (
                <img 
                    src="path/to/placeholder/image.jpg"
                    alt="No image available"
                    style={{ width: '50%', height: 'auto' }} 
                />
            )}

            <Typography variant="h5" gutterBottom>
                Category: {recipe.category}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Servings: {recipe.servings}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Instructions:
            </Typography>
            <Typography variant="body1" paragraph>
                {recipe.instructions}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Ingredients:
            </Typography>
            <ul>
                {Array.isArray(recipe.ingredients) ? (
                    recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))
                ) : (
                    <li>No ingredients listed</li>
                )}
            </ul>
            {isLoggedIn && (
                <Grid container spacing={2} style={{ marginTop: '16px' }}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleEdit}>
                            Edit Recipe
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={handleDelete}>
                            Delete Recipe
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Container>
  )
}

