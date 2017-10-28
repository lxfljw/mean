
'use strict';

var _ = require('lodash'),
	  fs = require('fs'),
	  path = require('path'),
	  mongoose = require('mongoose'),
	  multer = require('multer'),
	  config = require(path.resolve('./config/config')),
	  validator = require('validator');
var TransactionService= require('./TransactionService');
var ParkingService= require('./ParkingService');
var UserService= require('./UserService');
var PaymentService= require('./PaymentService');
var BookingService= require('./BookingService');
const chalk = require('chalk');



//UserService
//------------------------------------------------------------------------------------------//
exports.userGetInfo = function (req,res,next) {
		var userService = new UserService()
		var id = req.query.name, distance = req.query.distance;
		userService.userGetInfo(id)
               .then(usergetinfo=>{
               	console.log(chalk.green("Here will print user info "))

					    return
					    res.status(200).json(usergetinfo)
		        }).catch(next)
}



 
//------------------------------------------------------------------------------------------//




//BookingSrvice
//------------------------------------------------------------------------------------------//
exports.reserveParking = function (req,res,next) {
		var bookingService = new BookingService()
		var parking_id = req.query.parking_id, distance = req.query.distance;
		bookingService.reserveParking(parking_id)
		        .then(reserveparking=>{
	            		res.status(200).json(reserveparking)
	            }).catch(next)
}


exports.cancleReservetion = function (req,res,next) {
		var bookingService = new BookingService()
		var booking_id = req.params.booking_id, distance = req.query.distance;
		console.log(booking_id);
		bookingService.cancleReservetion(booking_id)
				.then(canclereservetion=>{
				         return res.status(200).json(canclereservetion)
				}).catch(next)
}
//------------------------------------------------------------------------------------------//





//ParkingService

//
//------------------------------------------------------------------------------------------//
exports.searchParking = function (req,res,next) {

	    var parkingService = new ParkingService()
	//新建服务 parkingService   通过new 实例化  parkingService是类的实例instance

	    // 做req.params.id 的验证（获取数据之前要验证）
	    var parking_id=req.query.parking_id,distance=req.query.distance;
	    var location=req.query.location,distance=req.query.distance;
	    var price=req.query.price,distance=req.query.distance;
	    var lng = req.query.lng,lat = req.query.lat;
	    var type=req.query.type;

	    var limitVal = req.query.$limit,
        skipVal = req.query.$skip,
        limit =(isNaN(limitVal)) ? 0 : parseInt(req.query.$limit, 10),
        skip = (isNaN(skipVal)) ? 0 : parseInt(req.query.$skip, 10);
     
		parkingService.searchParking(parking_id,location,price,distance,type,lng,lat,limit,skip)
		        .then(parkings => {
		                //获得电影的id
		        		return   res.status(200).json(parkings)
		                 //获取成功
		        }).catch(next)
}

exports.searchParkingByName = function (req,res,next) {

	    var parkingService = new ParkingService()
	//新建服务 parkingService   通过new 实例化  parkingService是类的实例instance

	    // 做req.params.id 的验证（获取数据之前要验证）
	    var parkingnames = eval(req.query.parkingnames);
	    //var parkingnames = eval(req.query.member);
	    console.log(chalk.blue(parkingnames));
		parkingService.searchParkingByName(parkingnames)
		        .then(parkings => {
		                //获得电影的id
		        		return   res.status(200).json(parkings)
		                 //获取成功
		        }).catch(next)
}

 
exports.startParking = function (req,res,next) {
		var parkingService = new ParkingService()
		
	    var parking_id = req.query.parking_id,distance = req.query.distance;
	    var startStatus =req.query.startStatus;
	    var userID =req.query.userID;
        
		parkingService.startParking(startStatus,userID)
		        .then(startparking=>{
		           return 	res.status(200).json(startparking)
		        }).catch(next)
}



exports.stopParking = function (req,res,next) {
		console.log(chalk.blue('Function stopParking is ok !'));
		var parkingService= new ParkingService();
		var stopStatus = req.query.stopStatus,distance = req.query.distance;
		var transactionID = req.query.transactionID;
		parkingService.stopParking(stopStatus,transactionID )
		        .then(stopparking =>{
	            return		res.status(200).json(stopparking)
		        }).catch(next)

}
//------------------------------------------------------------------------------------------//





//TransactionService
//------------------------------------------------------------------------------------------//
exports.userParkingHistory= function (req,res,next) {
        console.log(chalk.blue('Function parkinghistory is ok !'));
	    var transactionService = new TransactionService()
	    var user_id = req.query.type;
	    console.log(chalk.green(user_id));
        transactionService.parkingHistory(user_id)
                .then(parkinghistory =>{
                		console.log(chalk.green("callbackData: "+parkinghistory));
          		return res.status(200).json(parkinghistory)
				}).catch(next)
}
//------------------------------------------------------------------------------------------//






//PaymentService
//------------------------------------------------------------------------------------------//
exports.manualPayment= function (req,res,next) {
        var parkingService = new ParkingService()
//新建服务 parkingService   通过new 实例化  parkingService是类的实例instance
	    var parking_id = req.query.parking_id,distance=req.query.distance;
	    parkingService.manualPay(parking_id)
	            .then(payment=>{
	                	res.status(200).json(payment)
	            }).catch(next)
}

//------------------------------------------------------------------------------------------//




//CouponsService
//------------------------------------------------------------------------------------------//
exports.usersCoupons = function (req,res,next) {
		var userService = new UserService()
		var name = req.query.name, distance = req.query.distance;
		userService.usersCoupons(name)
               .then(coupons=>{
               	console.log(chalk.green("Here will print user info "))
					      return   res.status(200).json(coupons)
		        }).catch(next)
}

 //------------------------------------------------------------------------------------------//
