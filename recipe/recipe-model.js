const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

// should return a list of all recipes in the database.
function getRecipes() {
  return db("recipes");
}

// should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {}

// should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {}
