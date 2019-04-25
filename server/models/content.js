"use strict";
const bcrypt = require("bcrypt");
const createGuts = require("../helpers/model-guts");

const name = "Postcontent";
const tableName = "postcontent";

const selectableProps = ["title", "content"];

module.exports = knex => {
  const guts = createGuts([knex, name, tableName, selectableProps]);

  // // Augment default `create` function to include custom `beforeSave` logic.
  // const create = props =>
  //   beforeSave(props)
  //     .then(content => modelGuts.create(content))
  //     .then(content => guts.create(content));

  return {
    ...guts
  };
};
