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
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
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
        {recipe.strMeal}
      </Typography>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '50%', height: 'auto' }} />
      <Typography variant="h5" gutterBottom>
        Category: {recipe.strCategory}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Area: {recipe.strArea}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Instructions:
      </Typography>
      <Typography variant="body1" paragraph>
        {recipe.strInstructions}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          const ingredient = recipe[`strIngredient${num}`];
          const measure = recipe[`strMeasure${num}`];
          return ingredient ? (
            <li key={num}>
              {ingredient} - {measure}
            </li>
          ) : null;
        })}
      </ul>
    </Container>
  )
}

