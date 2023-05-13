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
    image.src = recipe.image

    const ingredientsList = document.createElement('ul');
    recipe.ingredientLines.forEach(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      ingredientsList.appendChild(ingredientItem);
    });

    recipeDiv.append(title, image, ingredientsList);
    resultsDiv.appendChild(recipeDiv);
}


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    fetchRecipes(query)
      .then(data => displayRecipes(data))
      .catch(error => console.error('Error:', error));
  });

  function displayRecipes(data) {
    const recipes = data.hits;  // 'hits' is the array in the API data
    recipes.forEach(hit => displayRecipe(hit.recipe));
  }