/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 24 May 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part III
;===========================================
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);
module.exports.add = (user, callback) => {
    user.save(callback);
};
module.exports.getById = (id, callback) => {
    var query = { _id: id };
    User.findById(query, callback);
};
