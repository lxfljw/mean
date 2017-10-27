'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');

 

const  geoLocationSchema = Schema({
     coordinate:{lng: Number,lat:Number},
     type:{type:String},
     name:{type:String} 
});

mongoose.model('geolocations',geoLocationSchema);