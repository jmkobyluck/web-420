/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 10 May 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part II
;===========================================
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);

