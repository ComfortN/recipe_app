import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function RecipeCard({ recipe }) {
  return (
    <Card>
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
    </Card>
  )
}
