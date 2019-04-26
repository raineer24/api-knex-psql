"use strict";
const { Postcontent } = require("../models/");

const getContents = (req, res, next) => {
  Postcontent.findAll()
    .then(users =>
      res.json({
        ok: true,
        message: "Users found",
        users
      })
    )
    .catch(next);
};

module.exports = {
  getContents
};
