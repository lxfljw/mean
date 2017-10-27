
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
          name:{type:String},

          parkingType : {type:String},                    
          parkingOwner : {type:String},       
          description: { type: String },
          address: { type: String },
          createdAt : Date,
          updatedAt : Date,
          coordinate:{ lng:Number,lat:Number },  
          
          parkingArea : String,
          parkingAreaType : String,  
            
          
          openTime : Date,
          closeTime : Date,
           
         
          Attendant: Date,
          ticketingSystem : String,  
              
          parkingSlots : [{  slotId : Number,type : String,  status : Number, }]  
                  //coordinates:{ type: Schema.Types.ObjectId, ref: 'restaurants' }
            
     
});

//var Parkings = 
mongoose.model('parkingmodels', parkingSchema);
//module.exports = Parkings;  