'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');

 

const transactionSchema = Schema({
  
  startTime: { type: Date,default:new Date() },
  endTime: { type: Date },
  price: { type: Number },

  //parking_id
  hostID: { type: Schema.Types.ObjectId, required: true,ref:'parkingmodels' },
  userID: { type: Schema.Types.ObjectId, required: true,ref:'userprofiles' },
  //lotID: { type: Schema.Types.ObjectId }
  

});

 mongoose.model('transactions', transactionSchema);
