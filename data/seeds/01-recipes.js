exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { id: 1, name: "pie" },
    { id: 2, name: "cake" },
    { id: 3, name: "egg sandwich" }
  ]);
};
