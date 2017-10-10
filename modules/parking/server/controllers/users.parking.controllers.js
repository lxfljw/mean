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


exports.userGetInfo = function (req,res,next) {
				 var parkingService = new ParkingService()
				 var id = req.query.type, distance = req.query.distance; 
				 parkingService.userGetInfo(id)
				               .then(usergetinfo=>{
				            res.status(200).json(usergetinfo)
				             }).catch(next)
					}

 


exports.reserveParking = function (req,res,next) {
				 var parkingService = new ParkingService()
				 var id = req.query.type, distance = req.query.distance; 
				 parkingService.reserveParking(id)
				               .then(reserveparking=>{
				            res.status(200).json(reserveparking) 	
				             }).catch(next)
				}


exports.cancleReservetion = function (req,res,next) {
				var parkingService = new ParkingService()
				var id = req.query.type,distance = req.query.distance;
				parkingService.cancleReservetion(id)
				              .then(canclereservetion=>{
				           res.status(200).json(canclereservetion)
				            }).catch(next)
			}



exports.startParking = function (req,res,next) {
				var parkingService = new ParkingService()
				var id = req.query.type,distance = req.query.distance;
				parkingService.startParking(id)
				              .then(startparking=>{
				           res.status(200).json(startparking)
				            }).catch(next
				             )
			  
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

		 


exports.parkingHistory= function (req,res,next) {
	            console.log(chalk.blue('Function parkinghistory is ok !'));
			    var parkingService = new ParkingService()
			    var id = req.query.type,distance=req.query.distance;
                parkingService.parkingHistory(id)
                              .then(parkinghistory =>{
                           res.status(200).json(parkinghistory)	
                            }).catch(next)
          }


exports.manualPayment= function (req,res,next) {
                var parkingService = new ParkingService()
    //新建服务 parkingService   通过new 实例化  parkingService是类的实例instance
			    var id = req.query.type,distance=req.query.distance;
			     parkingService.manualPayment(id)
			                   .then(payment=>{
			                res.status(200).json(payment)
			                 }).catch(next)

				
			}

exports.usersCoupons= function (req,res,next) {

				var parkingService = new ParkingService()
				var id = req.query.type,distance=req.query.distance;
				 parkingService.usersCoupons(id)
				               .then(coupons =>{
				            res.status(200).json(coupons)
				             }).catch(next)  
            }


exports.searchParking = function (req,res,next) {

				  var parkingService = new ParkingService()
				//新建服务 parkingService   通过new 实例化  parkingService是类的实例instance
				
				    // 做req.params.id 的验证（获取数据之前要验证）
				  var id=req.query.type,distance=req.query.distance;
		    		parkingService.searchParking(id)
					              .then(parkings => {
					                //获得电影的id
					           res.status(200).json(parkings)
					                 //获取成功
					            }).catch(next)

			}