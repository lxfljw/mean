
'use strict';

var _ = require('lodash'),
	  fs = require('fs'),
	  path = require('path'),
	  mongoose = require('mongoose'),
	  multer = require('multer'),
	  config = require(path.resolve('./config/config')),
	  validator = require('validator');
var ParkingService= require('./ParkingService');
var UserService= require('./UserService');
var PaymentService= require('./PaymentService');
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
		var id = req.query.type, distance = req.query.distance; 
		Bookingervice.reserveParking(id)
		        .then(reserveparking=>{
	            		res.status(200).json(reserveparking) 	
	            }).catch(next)
}


exports.cancleReservetion = function (req,res,next) {
		var parkingService = new ParkingService()
		var id = req.query.type,distance = req.query.distance;
		Bookingervice.cancleReservetion(id)
				.then(canclereservetion=>{
				           res.status(200).json(canclereservetion)
				}).catch(next)
}
//------------------------------------------------------------------------------------------//



 

//ParkingService
//------------------------------------------------------------------------------------------//
exports.searchParking = function (req,res,next) {

	    var parkingService = new ParkingService()
	//新建服务 parkingService   通过new 实例化  parkingService是类的实例instance
	
	    // 做req.params.id 的验证（获取数据之前要验证）
	    var parking_id=req.query.parking_id,distance=req.query.distance;
	    var location=req.query.location,distance=req.query.distance;
	    var price=req.query.price,distance=req.query.distance;
		parkingService.searchParking(parking_id,location,price)
		        .then(parkings => {
		                //获得电影的id
		        		return   res.status(200).json(parkings)
		                 //获取成功
		        }).catch(next)
}

exports.startParking = function (req,res,next) {
		var parkingService = new ParkingService()
		var id = req.query.type,distance = req.query.distance;
		parkingService.startParking(id)
		        .then(startparking=>{
		            	res.status(200).json(startparking)
		        }).catch(next)		  
}



exports.stopParking = function (req,res,next) {
		console.log(chalk.blue('Function stopParking is ok !'));
		var parkingService= new ParkingService();
		var id = req.query.type,distance = req.query.distance;
		parkingService.stopParking(id)
		        .then(stopparking =>{
	            		res.status(200).json(stopparking) 
		        }).catch(next)
        console.log(chalk.blue('type= '+id));
}
//------------------------------------------------------------------------------------------//
		 




//TransactionService
//------------------------------------------------------------------------------------------//
exports.userParkingHistory= function (req,res,next) {
        console.log(chalk.blue('Function parkinghistory is ok !'));
	    var parkingService = new ParkingService()
	    var user_id = req.query.type;
	    console.log(chalk.green(user_id));
        Transaction.parkingHistory(user_id)
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
	    var id = req.query.type,distance=req.query.distance;
	    parkingService.manualPayment(id)
	            .then(payment=>{
	                	res.status(200).json(payment)
	            }).catch(next)			
}

//------------------------------------------------------------------------------------------//


 
 
//CouponsService
//------------------------------------------------------------------------------------------//
exports.usersCoupons= function (req,res,next) {
		var paymentService = new PaymentService()
		var id = req.query.type,distance=req.query.distance;
		paymentService.usersCoupons(id)
		        .then(coupons =>{
		        		res.status(200).json(coupons)
		        }).catch(next)  
}
 //------------------------------------------------------------------------------------------//           