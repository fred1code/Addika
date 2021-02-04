const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const router = express.Router();
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", list);
router.get("/:id", get);
router.post("/",urlencodedParser, post);
router.put("/:id",urlencodedParser, put);

function list(req, res) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function post(req, res) {
 // console.log(req.body.data);
  Controller.post(req.body.data)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function put(req, res) {
  Controller.put(req.body.data ,req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function patch(req, res) {
  Controller.put(req.body.data ,req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

module.exports = router;
