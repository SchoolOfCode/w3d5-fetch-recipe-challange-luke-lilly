[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6513759&assignment_repo_type=AssignmentRepo)
# Design a Recipe App

Create a recipe generator by fetching from an API.

Take a look at sites like [BBC Good Food](https://www.bbcgoodfood.com/) for inspiration. Explore recipe sites from a user perspective, and think about how you could use the power of being able to fetch external data from APIs, along with your knowledge of design principles, to build an experience based on searching for recipes. Collaborate with your pair to build something amazing!

Don't forget to go through each step of the planning process for both design and code:

- Low- and high-fidelity wireframes (using a tool like [Figma](https://www.figma.com/))
- [Color scheme](https://coolors.co/) - remember, you can create CSS variables to manage things like colors easily
- User journey flow diagram (you can use the [draw.io extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) in VS Code to make this inside the repo)
- A plan that breaks down the JavaScript as usual, using computational thinking to plan the logic of how the JS in your app will function before you code

Remember to **iterate** - first, get your design looking good. Then add in the JavaScript to get it working with one recipe at a time, and then, if you have time, you can consider adding more features.

At the end of the day, when you present what you've created, be sure to also show your planning process and how you crafted your UX and UI.

## How to sign up for the API

Sign up to the free tier of the Edamam API [here](https://developer.edamam.com/). Click on SIGN UP and select 'Recipe Search'. On the next screen, select the free DEVELOPER tier by clicking START NOW.

Click "Get an API Key Now" in the top menu once signed in. Click the green button on the resulting page to create an application, click recipe search, and enter a short name/description (it doesn't matter what). Once you submit this, you are taken to a page with your application ID and key.

Make a note of your ID and key and then navigate to the API docs [here](https://developer.edamam.com/edamam-docs-recipe-api) for more information on how to use it.

## Structuring your fetch URI

[Click here](https://vimeo.com/652563110/91d2e36312) to see a video with more information on how to structure your request URI, use your API ID and key, and use the [query parameters](https://www.semrush.com/blog/url-parameters/) in the documentation.

Use the fetchRecipe function to make a fetch request to the Edamam API with the food that the function takes in entered as a search query. You'll receive an array of different recipe results.

Here are some helper videos on Fetch:
- [Fetch recap](https://vimeo.com/589722883/14ba9fdfa7)
- [Fetch 2nd argument](https://vimeo.com/589722930/c8d58092a2)

Here are some extra resources:
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Async / await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [.JSON()](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)


Plan

Fetch API data to look at what receipes is the JSON data (done)
Then decide how we want to display it (done)
Write the code for fetch request (done)
Write the code for basic HTML display of recipe in browser (done)
Write the code to get the label and recipe out of the JSON (done)
Write the code to add the label and recipe to the browser (done)
Write the code to include the picture of the recipe (done)
Style our page using CSS 


*IMPORTANT*
API key data so we can get a URL to use in our fetch requests
Application ID
4d13f87d

This is the application ID, you should send with each API request.

Application Keys
7e5560356e6651232899c89c8638a2d4	—
These are application keys used to authenticate requests.
********
