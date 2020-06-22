/*
============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 2 June 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part IV
;===========================================
*/

var express = require("express");
var checkToken = require("../check-token");
var router = express.Router();
var auth_controller = require("../controllers/authController");

router.get("/auth/token", checkToken, auth_controller.user_token);
router.post("/auth/login", auth_controller.user_login);
router.post("/auth/register", auth_controller.user_register);
router.get("/auth/token", auth_controller.user_token);
router.get("/auth/logout", auth_controller.user_logout);

module.exports = router;
