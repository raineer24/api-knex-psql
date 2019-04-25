const router = require("express").Router();
const { getContents } = require("../controllers/content_controller");

router.route("/contents").get(getContents);

module.exports = router;
