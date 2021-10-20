const express = require("express");
const secure = require("./secure");
const response = require("../../../network/response");
const controller = require("./index");

const router = express.Router();
router.use(express.json());

router.get("/", function (req, res, next) {
  controller
    .list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch(next);
});

router.get("/:id", function (req, res, next) {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
});

router.post("/", function (req, res, next) {
  controller
    .upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
});

router.put("/", secure("update"), function (req, res, next) {
  controller
    .upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
});

router.post("/follow/:id", secure("follow"), function (req, res, next) {
  controller
    .follow(req.user.id, req.params.id)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch(next);
});

router.get("/:id/following", function following(req, res, next) {
  return controller
    .following(req.params.id)
    .then((data) => {
      return response.success(req, res, data, 200);
    })
    .catch(next);
});

router.delete("/:id", function (req, res, next) {
  controller
    .remove(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
});

module.exports = router;
