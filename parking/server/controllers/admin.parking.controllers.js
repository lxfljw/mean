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
 

 
exports.userHistory = function (req, res,next) {

         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.userHistory(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
        }




exports.userInfo = function (req, res,next) {
         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.userInfo(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
  
}



exports.illegalParking = function (req, res,next) {
         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.illegalParking(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
 

}




exports.getParkingId = function (req, res,next) {
         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.getParkingId(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)


}




exports.getSpaceId = function (req, res,next) {
         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.getSpaceId(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
          


}
