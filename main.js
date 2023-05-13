function fetchRecipes(query) {
    const url = `https://api.edamam.com/search?q=${query}&app_id=51400db5&app_key=1b6679d7a965225622d01016a6055eeb`;
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
  }

  function displayRecipe(recipe) {
    const resultsDiv = document.getElementById('results');
   
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';
    
    const title = document.createElement('h2');
    title.textContent = recipe.label;

    const image = document.createElement('img');
    image.src = recipe.image}

