/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 10 May 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part II
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";
config.web.secret = 'topsecret';
module.exports = config;