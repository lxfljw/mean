'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  validator = require('validator');
  var ParkingService= require('./ParkingService');
  const chalk = require('chalk');



//ParkingService
//------------------------------------------------------------------------------------------//
exports.getEvents= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var parking_id = req.params.parking_id,distance = req.query.distance;
				   console.log(parking_id+"here is get function events");
				   parkingService.getEvents(parking_id)
				                 .then( getEvents =>{
				               return  res.status(200).json(getEvents)
				               }).catch(next)
				    console.log(chalk.blue('function getEvents is OK'))
				              
					 
				}

exports.getSpaceIdStatus= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var parking_id = req.params.parking_id,distance = req.query.distance;
				   var space_id = req.params.space_id,distance = req.query.distance;
				   parkingService.getSpaceIdStatus(parking_id,space_id)
				                 .then( spaceid =>{
				              res.status(200).json(spaceid)
				               }).catch(next)
					 
				}

exports.updateSpaceIdStatus= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var parking_id = req.params.parking_id,distance = req.query.distance;
				   var space_id = req.params.space_id,distance = req.query.distance;
				   parkingService.updateSpaceIdStatus(parking_id,space_id)
				                 .then( updatespaceidstatus =>{
				               return res.status(200).json(updatespaceidstatus )
				               }).catch(next)
					 
				}


exports.modifyThePrices= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var parking_id = req.params.parking_id,distance = req.query.distance;
				   parkingService.modifyThePrices(parking_id)
				                 .then(  modifytheprices=>{
				              res.status(200).json( modifytheprices)
				               }).catch(next)
					 
				}
//------------------------------------------------------------------------------------------//








 //Transaction
 //------------------------------------------------------------------------------------------//
exports.getLog= function (req, res,next) {
	               console.log(chalk.blue('function getLog is running')) 	 
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.getLog(id)
				                 .then( getlog =>{
				              res.status(200).json(getlog)
				               }).catch(next)
				  
				}


exports.parkingHistory= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var parking_id = req.params.parking_id,distance = req.query.distance;
				   console.log(chalk.yellow("Data is :"+parking_id));
				   parkingService.parkingHistory(parking_id)
				                 .then( gethistory =>{
				               return res.status(200).json(gethistory)
				               }).catch(next)
					 
				}
//------------------------------------------------------------------------------------------//
 






//BookingService				
//------------------------------------------------------------------------------------------//






//------------------------------------------------------------------------------------------//