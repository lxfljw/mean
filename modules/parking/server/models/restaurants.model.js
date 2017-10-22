
'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');



const restaurantsSchema = Schema({
        location : {
        coordinates : [ {lat:Number,lng:Number} ],
        type : String
    },
        name : String
 
});

//var Parkings = 
mongoose.model('restaurants', restaurantsSchema);
//module.exports = Parkings;  