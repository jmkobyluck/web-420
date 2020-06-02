/*
============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 2 June 2020
; Modified By: Jonathan Kobyluck
; Description: API Gateway Part IV
;===========================================
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var model = mongoose.model('User', userSchema);

module.exports = model;
module.exports.add = (user, callback) => {
    user.save(callback);
};
module.exports.getById = (id, callback) => {
    var query = { _id: id };
    model.findById(query, callback);
};
module.exports.getOne = (e, callback) => {
    var query = { email: e };
    model.findOne(query, callback);
};