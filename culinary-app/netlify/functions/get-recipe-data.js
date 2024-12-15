const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { title, ingredients } = event.queryStringParameters;

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const encodedTitle = encodeURIComponent(title || "");
  const encodedIngredients = encodeURIComponent(ingredients || "");

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodedTitle}&includeIngredients=${encodedIngredients}&number=10&addRecipeInformation=true&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Błąd podczas pobierania danych z API Spoonacular" }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.results), 
    };
  } catch (error) {
    console.error("Błąd w funkcji Netlify:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
