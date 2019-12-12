const express = require("express");

const Recipe = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Recipe.getShoppingList(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get ingredients for recipe" });
    });
});

router.get("/:id/instructions", (req, res) => {
  Recipe.getInstructions(req.params.id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get instructions" });
    });
});

module.exports = router;
