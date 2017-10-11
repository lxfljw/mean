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
  type:{type:String}

  parkingType : {type:String},                    
  parkingOwner : {type:String},       
  description: { type: String },
  address: { type: String, required: true },
  createdAt : Date,
  updatedAt : Date,
  geoLocation : {
      type: {type:String},
      coordinates:[{type:SchemaTypes.Double}]
  },
  parkingArea : String,
  parkingAreaType : String,  
    
  
  openTime : Date,
  closeTime : Date,
  
 
  Attendant: 
  ticketingSystem : String,  
      
  
  parkingSlots : [
      {
          slotId : Number,
          type : String, 
          status : Number,
          coordinates:[{type:SchemaTypes.Double}]
      }
               ]   

});

var Parking = mongoose.model('Parking', parkingSchema);
module.exports = Parking; 