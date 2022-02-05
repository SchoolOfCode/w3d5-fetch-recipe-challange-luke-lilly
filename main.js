
//This variable contains a document selector that selects the text input box in html, it then listens for each 
//letter typed and then the variable userInput is now the typed letters instead. 
//The add recipe function is the function
//that captures the typed letters and changes userInput into the typed letters
let userInput = document.querySelector("#food-input").addEventListener("keyup", recordTyping)


function recordTyping(event) {
    if (event.keyCode = "keyup")
    userInput = event.target.value;
    }


//This document selector is selecting the button 'give me a recipe' when we click that button it runs the
//fetchRecipe function which gets our JSON data that contains the recipe for the food type we entered into userInput

document.querySelector("#recipe-button").addEventListener("click", fetchRecipe)


//This variable selects the part of the HTML where we want the recipe to be displayed in the browser
const addRecipeToHtml = document.querySelector("#recipe-list")

//This function takes the variable above and allows us to add string (text) to the recipe list section of the HTML
function addingIngredients(string) {
addRecipeToHtml.innerHTML = string
}

//This variable selects the part of the HTML where we want the label for the recipe to be displayed in the browser

const addLabel = document.querySelector("#label")


//This function takes the variable above and allows us to add string (text) to the label section of the HTML
function addLabelToHtml(string) {
addLabel.innerHTML = string
    }

//This variable selects the part of the HTML where we want the image for the recipe to be displayed in the browser

const addRecipeImage = document.querySelector("#image")

//This function takes the variable above and allows us to add src link to the image section of the HTML
function image(URL) {
addRecipeImage.src = URL
}  


//This function pulls down a recipe and the label and the image then takes the adding ingredients function 
//and the add Label function
//and puts the recipe and the label as string (text) into HTML
//addingIngredients function  and addLabel and addImage functions also picks a random recipe and label and image
//from the hits
//level of the array using the Math.floor(Math.random() function. This function picks a number which is
//used as the index of the hits level of the JSON object array - this means we can choose a different recipe
//for the same food if we enter it twice as well as different foods as well.

async function fetchRecipe() {
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=q%3D${userInput}&app_id=4d13f87d&app_key=7e5560356e6651232899c89c8638a2d4`); 
let data = await response.json();
addingIngredients(data.hits[Math.floor(Math.random() * data.hits.length)].recipe.ingredientLines);
addLabelToHtml(data.hits[Math.floor(Math.random() * data.hits.length)].recipe.label);
image(data.hits[Math.floor(Math.random() * data.hits.length)].recipe.image);
}









