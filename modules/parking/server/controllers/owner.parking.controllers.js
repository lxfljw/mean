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
exports.parkingInfo= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.parkingInfo(id)
				                 .then( parkinginfo =>{
				              res.status(200).json(parkinginfo)
				               }).catch(next)
				    console.log(chalk.blue('function parkingInfo is OK'))             
					 
				}

				exports.getSpaceIdStatus= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.getSpaceIdStatus(id)
				                 .then( spaceid =>{
				              res.status(200).json(spaceid)
				               }).catch(next)
					 
				}

exports.updateSpaceIdStatus= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.updateSpaceIdStatus(id)
				                 .then( updatespaceidstatus =>{
				              res.status(200).json(updatespaceidstatus )
				               }).catch(next)
					 
				}

exports.getEvents= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.getEvents(id)
				                 .then( getevents =>{
				              res.status(200).json(getevents)
				               }).catch(next)
					 
				}

exports.modifyThePrice= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.modifyThePrice(id)
				                 .then(  modifytheprice=>{
				              res.status(200).json( modifytheprice)
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


exports.getHistory= function (req, res,next) {
				   var parkingService = new ParkingService()
				   var id = req.query.type,distance = req.query.distance;
				   parkingService.getHistory(id)
				                 .then( gethistory =>{
				              res.status(200).json(gethistory)
				               }).catch(next)
					 
				}
//------------------------------------------------------------------------------------------//







//BookingService				
//------------------------------------------------------------------------------------------//






//------------------------------------------------------------------------------------------//