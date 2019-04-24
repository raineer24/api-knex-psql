"use strict";
const { Postcontent } = require("../../server/models");

exports.seed = (knex, Promise) =>
  knex(Postcontent.tableName)
    .del()
    .then(() => [
      {
        title: "osama ben laden",
        content: "counter terrorist"
      },
      {
        title: "javascript",
        content: "node js"
      }
    ])
    .then(newContent =>
      Promise.all(newContent.map(content => Postcontent.create(content)))
    )
    .catch(err => console.log("err: ", err));
