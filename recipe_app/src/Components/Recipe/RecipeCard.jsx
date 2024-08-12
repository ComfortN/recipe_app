import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  return (
    <Card onClick={handleClick}>
        <CardActionArea>
        {typeof recipe.image === 'string' && recipe.image ? (
                    <CardMedia
                        component="img"
                        height="140"
                        image={recipe.image}
                        alt={recipe.name}
                    />
                ) : (
                    <CardMedia
                        component="img"
                        height="140"
                        image="path/to/placeholder/image.jpg"
                        alt="No image available"
                    />
                )}
            <CardContent>
                <Typography variant="h6">{recipe.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                {recipe.category}
                </Typography>
            </CardContent>
      </CardActionArea>
    </Card>
  )
}
