"use strict";
const { Postcontent } = require("../models");

const postContents = (req, res, next) => {
  const props = req.body.content;

  User.create(props)
    .then(userId => User.findById(userId))
    .then(user =>
      res.json({
        ok: true,
        message: "User created",
        user
      })
    )
    .catch(next);
};

const getContents = (req, res, next) => {
  console.log(Postcontent);

  Postcontent.findAll()
    .then(contents =>
      res.json({
        ok: true,
        message: "Contents found",
        contents
      })
    )
    .catch(next);
};

module.exports = {
  postContents,
  getContents
};
