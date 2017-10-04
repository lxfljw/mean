'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  validator = require('validator');


exports.userHistory = function (req, res) {

	 res.status(200).send({
     message:

              [{
                parking_id: "BC12345120456",
                license_id: "京A BC123",
                parkinglot: "陆家嘴国购停车场",
                entrance_timestamp: "2015/8/21 15:20:00",
                parkingTime: "1小时12分钟",
                preOrder: true,
                invoice: false,
                payment: "20.00",
                coupon_amount: "5.00",
                payment_total: "10.00"
              }]

       });



}




exports.userInfo = function (req, res) {

	 res.status(200).send({
     message:

			 {
			  name:'xxx',
			  mobile:"392928181",
			  email:"38828282@qq.com",
			  
			  cars:[{   
			               "license": "京A BC123"
			          }, {
			               "license": "京B BC123"
			          }]
			 }


       });



}



exports.illegalParking = function (req, res) {

	 res.status(200).send({

        message:''

       });



}




exports.getParkingId = function (req, res) {

	 res.status(200).send({

          message:''

       });



}




exports.getSpaceId = function (req, res) {

	 res.status(200).send({

          message:''

       });



}
