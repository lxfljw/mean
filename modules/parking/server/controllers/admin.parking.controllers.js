
'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  validator = require('validator');
  var ParkingService= require('./ParkingService');
  var BookingService= require('./BookingService');
  var PaymentService= require('./PaymentService');
  const chalk = require('chalk');
 

//UserService
//------------------------------------------------------------------------------------------//
exports.getUserInfo = function (req, res,next) {
         var userService = new UserService()
         var id = req.query.type, distance = req.query.distance; 
         userService.userInfo(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
  
}

//Transaction
 //------------------------------------------------------------------------------------------//
exports.getUserTransaction = function (req, res,next) {

         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.userHistory(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
        }

//BookingService
//------------------------------------------------------------------------------------------//


exports.getUserBooking= function (req, res,next) {

         var bookingService = new BookingService()
         var id = req.query.type, distance = req.query.distance; 
        bookingService.userHistory(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
 }










//------------------------------------------------------------------------------------------//





//ParkingService
//------------------------------------------------------------------------------------------//

exports.illegalParking = function (req, res,next) {
         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.illegalParking(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)
 

}

 


exports.getParkingStatus = function (req, res,next) {
         var parkingService = new ParkingService()
         var id = req.query.type, distance = req.query.distance; 
         parkingService.getParkingId(id)
                       .then( data =>{
                    res.status(200).json(data)
                     }).catch(next)


}

exports.getParkingHistory = function (req, res,next) {
         var parkingService = new ParkingService()
         var parking_id = req.params.parking_id, distance = req.query.distance; 
         parkingService.getParkingId(parking_id)
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
