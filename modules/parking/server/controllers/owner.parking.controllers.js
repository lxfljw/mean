'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  validator = require('validator');


exports.parkingInfo= function (req, res) {

	 res.status(200).send({

         message :  
		
			   {

			  "last_updated": "2015-06-15T12:31:00",
			  "last_downloaded": "2015-06-15T12:31:25",
			  "data_source": "http://examplecity.com",
			  "lots": [
			    {
			      "coords": {
			        "lat": 51.05031,
			        "lng": 13.73754
			      },
			      "name": "Altmarkt",
			      "total": 400,
			      "free": 235,
			      "city": "open|closed|nodata",
			      "id": "lot_id",
			      "forecast": true|false,
			      "region": "Region X", // optional
			      "address": "Musterstraße 5", // optional
			      "lot_type": "Parkhaus" // optional
			    }],
			   
			}


			       });



}



exports.getLog= function (req, res) {

	 res.status(200).send({

         message :  ''
		

       });



}



exports.getSpaceId= function (req, res) {

	 res.status(200).send({

         message :  ''
		

       });



}




exports.putSpaceId= function (req, res) {

	 res.status(200).send({

         message :  ''
		

       });



}




exports.getEvents= function (req, res) {

	 res.status(200).send({

         message :  ''
		

       });



}




exports.getHistory= function (req, res) {

	 res.status(200).send({

         message : ''
		

       });



}




exports.ModifyThePrice= function (req, res) {

	 res.status(200).send({

         message :  ''
		

       });



}