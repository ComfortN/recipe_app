import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

export default function RecipeDetails() {
    const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:8888/recipes/${id}`);
            console.log('JSON Server Response:', response.data); // Inspect response
            setRecipe(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            setLoading(false);
        }
    };

    fetchRecipe();
}, [id]);

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
        </Container>
  )
}

