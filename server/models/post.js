"use strict";

const createGuts = require("../helpers/model-guts");

const name = "Posts";
const tableName = "posts";

const selectableProps = ["id", "name"];

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  });

  return {
    ...guts
  };
};
