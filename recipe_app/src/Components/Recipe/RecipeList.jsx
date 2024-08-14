import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Container, Grid, Typography, Button } from '@mui/material';
import RecipeCard from './RecipeCard';
import './Recipe.css'
import { useLocation } from 'react-router-dom';


export default function RecipeList({ selectedCategory, searchTerm  }) {
    // const [recipes, setRecipes] = useState([]);
    const [myRecipes, setMyRecipes] = useState([])
    const [visibleRecipes, setVisibleRecipes] = useState(3);
    const location = useLocation();
    const userId = location.state?.userId || null;
    

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

    // const combinedRecipes = [...myRecipes, ...recipes];

    // const filteredRecipes = selectedCategory === 'All' || selectedCategory === ''
    // ? myRecipes
    // : myRecipes.filter((recipe) => recipe.category === selectedCategory);


    const filteredRecipes = myRecipes
    .filter((recipe) => {
      // Check if recipe properties are defined and convert to lowercase for comparison
      const name = recipe.name ? recipe.name.toLowerCase() : '';
      const description = recipe.description ? recipe.description.toLowerCase() : '';
      const category = recipe.category ? recipe.category.toLowerCase() : '';
      const searchTermLower = searchTerm ? searchTerm.toLowerCase() : '';

      const matchesCategory =
        selectedCategory === 'All' || selectedCategory === '' || recipe.category === selectedCategory;
      const matchesSearchTerm =
        name.includes(searchTermLower) || description.includes(searchTermLower) || category.includes(searchTermLower);
        
        const matchesUser = !userId || recipe.userId === userId;

      return matchesCategory && matchesSearchTerm && matchesUser;
    });

    return (
        <Container className="recipe-list-container">
            <Typography variant="h4" gutterBottom>
            {selectedCategory ? `${selectedCategory} Recipes` : 'Recipes'}
                </Typography>
        <Grid container spacing={2}>
            {filteredRecipes.slice(0, visibleRecipes).map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} />
            </Grid>
            ))}
        </Grid>

        {visibleRecipes < filteredRecipes.length && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowMore}
          className="show-more-button">
          More
        </Button>
        )}
        </Container>
    )
}
