import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Alerts from '../Alerts/Alerts';

const categories = ['Dessert', 'Main Course', 'Appetiser','Dinner', 'Lunch', 'Breakfast'];

export default function AddRecipe() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setServings] = useState('');
    const [image, setImage] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success');
    const [alertVisible, setAlertVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    


    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
  }


  useEffect(() => {
    if (location.state && location.state.recipe) {
        const { recipe } = location.state;
        setRecipeName(recipe.name);
        setIngredients(recipe.ingredients.join(', ')); // Convert array to comma-separated string
        setInstructions(recipe.instructions);
        setCategory(recipe.category);
        setPreparationTime(recipe.preparationTime);
        setCookingTime(recipe.cookingTime);
        setServings(recipe.servings);
        setImage(recipe.image);
        setIsEditing(true);
    }
}, [location.state]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());

    const newRecipe = {
      name,
      ingredients: ingredientsArray,
      instructions,
      category,
      preparationTime,
      cookingTime,
      servings,
      image,
    };

    console.log('New Recipe:', newRecipe); 
    
    try {

      if (isEditing) {
        await axios.patch(`http://localhost:8888/recipes/${location.state.recipe.id}`, newRecipe);
        setAlertMessage('Recipe updated successfully!');
    } else {
        await axios.post('http://localhost:8888/recipes', newRecipe);
        setAlertMessage('Recipe added successfully!');
    }
        setAlertType('success');
        setAlertVisible(true);
        // Clear form fields after successful submission
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setCategory('');
        setPreparationTime('');
        setCookingTime('');
        setServings('');
        setImage('')
        navigate('/');
    
    } catch (error) {
        setAlertMessage('Error adding recipe: ' + error.message);
        setAlertType('error');
        setAlertVisible(true);
        console.error('Error:', error.response ? error.response.data : error.message); // Log error details
    }
};



    return (
        <Container maxWidth="sm">
      <Alerts
        message={alertMessage}
        severity={alertType}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
      <Typography variant="h4" gutterBottom>
      {isEditing ? 'Edit Recipe' : 'Add New Recipe'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
            fullWidth label="Recipe Name" margin="normal" variant="outlined"
            value={name} onChange={(e) => setRecipeName(e.target.value)}
            required
        />
        <TextField
            fullWidth label="Ingredients (comma-separated)" margin="normal" variant="outlined"
            multiline rows={4} value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
        />
        <TextField
            fullWidth label="Instructions" margin="normal" variant="outlined"
            multiline rows={4} value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
        />
        <TextField
            fullWidth select label="Category" margin="normal" variant="outlined"
            value={category} onChange={(e) => setCategory(e.target.value)}
            required
        >
        {categories.map((option) => (
            <MenuItem key={option} value={option}>
            {option}
            </MenuItem>
        ))}
        </TextField>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField
                fullWidth label="Preparation Time (mins)" margin="normal"
                variant="outlined" type="number" value={preparationTime}
                onChange={(e) => setPreparationTime(e.target.value)}
                required
            />
        </Grid>

        <Grid item xs={6}>
            <TextField
                fullWidth label="Cooking Time (mins)" margin="normal"
                variant="outlined" type="number" value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                required
            />
        </Grid>

        </Grid>
        <TextField
          fullWidth label="Servings" margin="normal" variant="outlined"
          type="number" value={servings}
          onChange={(e) => setServings(e.target.value)}
          required
        />
        <TextField
          label="Image URL" variant="outlined" fullWidth margin="normal"
          value={image} onChange={(e) => setImage(e.target.value)}
          required
        />
          {image && (
              <img src={image} alt="Recipe Preview" style={{ width: '100%', height: 'auto', marginTop: '16px' }}
              />
          )}
        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
        {isEditing ? 'Update Recipe' : 'Add Recipe'}
        </Button>
      </form>
    </Container>
    )
}
