exports.seed = function(knex) {
  return knex("ingredients").insert([
    { id: 1, name: "egg" },
    { id: 2, name: "dough" },
    { id: 3, name: "fruit" }
  ]);
};
