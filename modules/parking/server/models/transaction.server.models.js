'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');

 

const transactionSchema = Schema({
  
  startTime: { type: Date },
  endTime: { type: Date },
  price: { type: Number },
  hostID: { type: Schema.Types.ObjectId, required: true },
  guestID: { type: Schema.Types.ObjectId, required: true,ref:'userprofiles' },
  lotID: { type: Schema.Types.ObjectId }
  

});

var Transaction = mongoose.model('transactions', transactionSchema);
module.exports = Transaction; 