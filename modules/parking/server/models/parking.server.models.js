
'use strict';

 var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  chalk = require('chalk');



const parkingSchema = Schema({
  parking_id: { type:Number },
  location: { type: String },
  price:{type:Number } ,
  type : {type:String},

  parkingType : {type:String},                    
  parkingOwner : {type:String},       
  description: { type: String },
  address: { type: String },
  createdAt : Date,
  updatedAt : Date,
  geoLocation : {
      type: {type:String},
      coordinates:[{lat:Number,lng:Number}]
  },
  parkingArea : String,
  parkingAreaType : String,  
    
  
  openTime : Date,
  closeTime : Date,
  
 
  Attendant: Date,
  ticketingSystem : String,  
      
  
  parkingSlots : [
      {
          slotId : Number,
          type : String, 
          status : Number,
          coordinates:[{lat:Number,lng:Number}]
      }
               ]   

});

var Parking = mongoose.model('parkingmodels', parkingSchema);
module.exports = Parking;  