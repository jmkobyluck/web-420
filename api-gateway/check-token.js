/*
============================================
; Title: Assignment 8.4
; Author: Professor Krasso
; Date: 21 June 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part V
;===========================================
*/

var jwt = require("jsonwebtoken");
var config = require("./config");

function checkToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: "No token provided.",
    });
  }

  jwt.verify(token, config.web.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: "Failed to authenticate token.",
      });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = checkToken;
