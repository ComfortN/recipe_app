import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };
  return (
    <Card onClick={handleClick}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={recipe.strMealThumb}
                alt={recipe.strMeal}
            />
            <CardContent>
                <Typography variant="h6">{recipe.strMeal}</Typography>
                <Typography variant="body2" color="textSecondary">
                {recipe.strCategory}
                </Typography>
            </CardContent>
      </CardActionArea>
    </Card>
  )
}
