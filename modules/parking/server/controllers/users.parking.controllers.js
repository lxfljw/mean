'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  validator = require('validator');


exports.userGetInfo = function (req, res) {
 
	 res.status(200).send({

         message :  {
			  name:"xxx",
			  mobile:"392928181",
			  email:"38828282@qq.com", 
			  cars:[
			         {   
			               "license": "京A BC123"
			          }, {
			               "license": "京B BC123"
			          }
			    ]
			 }

       });



}



exports.searchParking = function (req, res) {
	       res.status(200).send({
    		
    message: {   
			"type": "FeatureCollection",   "features":
			 [
			   {    "type": "Feature",    "geometry":
	    {   "type": "Point",   "coordinates":  
	       [ 114.2385783,22.50228736 ]   
	    }, 
			 "properties": {   
			 "cate":"不收費路旁泊車位",   
			 "type":"路旁泊車位-不收費",    
			 "name eng":"",    
			 "name_chi":"路旁泊車位: 新娘潭路",    
			 "address":"",   
			 "district":"大埔",    
			 "icon":"small_blue",    
			 "icon_large":"large_blue",   
			 "paid":"",   
			 "free":"不收費用的泊車位數目:汽車 / 小型貨車:18",     "easting":842617,    "norting":840297.5   
			                } 
			   }
			 ]
 }

	});

}


exports.reserveParking = function (req, res) {

res.status(200).send({
	 message:
	   {
	     reservation_id: "BC12345120456",
	     status:"reserve_success",
	     
	     license_id: "京A BC123",
	     
	     timeStamp: "2015/8/21 15:20:00", 
	     time: 600,
	     
	     parkinglot: "陆家嘴国购停车场",
	     parking_id: "BC12345120456"          
	    }                 

  });
	
}


exports.cancleReservetion = function (req, res) {
	res.status(200).send({
      message:
		   {
		     reservation_id: "BC12345120456",
		     status:"cancel_success",
		     
		     license_id: "京A BC123",
		     
		     timeStamp: "2015/8/21 15:20:00", 
		     time: 600,
		     
		     parkinglot: "陆家嘴国购停车场",
		     parking_id: "BC12345120456"          
		   }    

  });
}


exports.startParking = function (req, res) {
	res.status(200).send({
        message:
      
		   {
		     parkinglot: "陆家嘴国购停车场",
		     parking_id: "BC12345120456",
		          
		     license_id: "京A BC123",
		    timeStamp: "2015/8/21 15:20:00", 
		     
		     status:"occupation_start"   
		   }

  });
}



exports.stopParking = function (req, res) {
	res.status(200).send({

		message:
		  {
		     parkinglot: "陆家嘴国购停车场",
		     parking_id: "BC12345120456",
		          
		     license_id: "京A BC123",
		     timeStamp: "2015/8/21 15:20:00", 
		     
		     status:"occupation_end"   
		  }


  });
}


exports.parkingHistory= function (req, res) {
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


exports.manualPayment= function (req, res) {
	res.status(200).send({

		message:

		      {
                license_id: "京A BC123",
                entrance_timestamp: "2015/8/21 15:20:00",
                parking_time: "1小时12分钟",
                over_time: false,
                payment: "20.00",
                coupon: true,
                coupon_id: "Af3322",
                coupon_amount: "5.00",
                paid: "5.00",
                payment_total: "10.00"
              }     

  });
}

exports.usersCoupons= function (req, res) {
	res.status(200).send({

		message:

		      [{
                id:"2323",
                header: "1 hr Free",
                usedStatus: false,
                description: "国购停车场限定",
                meta: "2015-12-31 12:00AM",
                images: "kuogo_logo.png"
               },
             {
               id:"2376",
                header: "15min Free",
                usedStatus: false,
                description: "国购停车场限定",
                meta: "2015-12-31 12:00AM",
                images: "kuogo_logo.png"
            }]

  });
}






