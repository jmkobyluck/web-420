/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 24 May 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part III
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
