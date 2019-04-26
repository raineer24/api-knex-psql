"use strict";
const { Posts } = require("../../server/models");

exports.seed = (knex, Promise) =>
  knex(Posts.tableName)
    .del()
    .then(() => [
      {
        title: "osama ben laden",
        desccription: "counter terrorist"
      },
      {
        title: "javascript",
        desccription: "node js"
      }
    ])
    .then(newPost => Promise.all(newPost.map(post => Posts.create(post))))
    .catch(err => console.log("err: ", err));
