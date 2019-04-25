"use strict";
const { Postcontent } = require("../models");

const getContents = (req, res, next) => {
  Postcontent.findAll()
    .then(content =>
      res.json({
        ok: true,
        message: "Contents found",
        content
      })
    )
    .catch(next);
};

module.exports = {
  getContents
};
