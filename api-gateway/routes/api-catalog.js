/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 10 May 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part II
;===========================================
*/

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;