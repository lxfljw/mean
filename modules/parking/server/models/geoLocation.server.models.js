'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');

 

const  geoLocationSchema = new Schema({
    location:[{
       	coordinate:{lng: Number,lat:Number},
      	type:String,
      	name:String 
    }]
 });

mongoose.model('geolocations',geoLocationSchema);