"use strict";

const createGuts = require("../helpers/model-guts");

const name = "Postcontent";
const tableName = "postcontent";

const selectableProps = ["title", "content"];

module.exports = knex => {
  const guts = createGuts([knex, name, tableName, selectableProps]);
};
