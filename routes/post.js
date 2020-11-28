const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "My first post",
      description: "do not try to access without login",
    },
  });
});

module.exports = router;
