'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');


const userProfileSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, required: true }，
  mobile:{type: Number},  
  cars: [{ type: Schema.Types.ObjectId, ref: 'car' }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'transaction' }],
  
 // lots: [{ type: Schema.Types.ObjectId, ref: 'lot' }],  
 // isHost: { type: Boolean, required: true, default: false },  
});


var UserProfile = mongoose.model('UserProfile', userProfileSchema);
module.exports = UserProfile; 
  