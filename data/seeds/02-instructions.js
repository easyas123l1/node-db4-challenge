exports.seed = function(knex) {
  return knex("instructions").insert([
    { id: 1, recipe_id: 1, step_number: "1", instructions: "this is step 1" },
    { id: 2, recipe_id: 1, step_number: "2", instructions: "this is step 2" },
    { id: 3, recipe_id: 1, step_number: "3", instructions: "this is step 3" },
    { id: 4, recipe_id: 2, step_number: "1", instructions: "this is step 1" }
  ]);
};
