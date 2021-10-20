const express = require("express");
const response = require("../../../network/response");
const controller = require("./index");

const router = express.Router();
router.use(express.json());

router.get("/", function (req, res, next) {
  controller
    .list(req, res, next)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(next);
});

router.get("/:id", function (req, res, next) {
  controller
    .get(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(next);
});
router.post("/", function (req, res, next) {
  controller
    .upsert(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(next);
});

module.exports = router;
