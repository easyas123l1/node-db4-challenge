const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipes
};

// should return a list of all recipes in the database.
function getRecipes() {
  return db("recipes");
}

// should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db("recipe_ingredients")
    .select("ingredients.name", "recipe_ingredients.quantity")
    .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
    .where("recipe_id", "=", id);
}

// should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  return db("instructions").where("recipe_id", "=", id);
}

// all recipes in the system that utilize a single ingredient.
function getRecipes(id) {
  return db("recipes")
    .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
    .where("ingredient_id", "=", id);
}
