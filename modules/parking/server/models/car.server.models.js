'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');
  
 

var CarModelSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  licensePlate: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, required: true }
});
 

var CarModel = mongoose.model('carmodels', CarModelSchema);
module.exports = CarModel; 



