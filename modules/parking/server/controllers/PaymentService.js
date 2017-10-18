var Promise = require("bluebird");
const chalk = require('chalk');
/*
import CarModel from '../models/car.server.modules.js';
import Transaction from '../models/transaction.server.models';
import UserProfile from '../models/userProfile.server.models';
import Parking from '../models/parking.server.models';
*/
var mongoose = require('mongoose'),
  CarModel = mongoose.model('carmodels'),
  User = mongoose.model('userprofiles'),
  Transaction = mongoose.model('transactions'),
  Parking = mongoose.model('parkingmodels');


class PaymentService{


//no finish
    usersCoupons(id){

        return new Promise((resolve,reject) =>{
            const query = {price:100 };
            const projection = {  };
            Transaction.find(query,projection,(err,coupon)=>{
            	if(err){
                 reject(new Error("This coupon is not exist!"))
            	}
            	else resolve(coupon)
            })
 
  /*
              var data =  [{
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

             if (id==0) { reject(new Error ('An error An error occured fetching a coupon'))}
             else resolve(data) ;
*/
            })
    };



		manualPayment(id){

        return new Promise((resolve,reject)=>{
            const query = {price:"22" }
            const projetion = {_id:0, price:1 }
            Transaction.findOne(query,projection,(err,price)=>{
            	if (err){
            		reject(new Error("Fail to get price!!"))
            	}
            	else resolve(price)
            })



/*
	                        var data = {
	                        license_id: "京A BC123",
	                        entrance_timestamp: "2015/8/21 15:20:00",
	                        parking_time: "1小时12分钟",
	                        over_time: false,
	                        payment: "20.00",
	                        coupon: true,
	                        coupon_id: "Af3322",
	                        coupon_amount: "5.00",
	                        paid: "5.00",
	                        payment_total: "10.00",
	                        test: "test"
	                      }

                      if (id == 0){
                        const chalk = require('chalk');
                        console.log(chalk.yellow('error'));
                        reject(new Error('You can not finish manualPayment! '))
                      }
                      else resolve(data);
 */
        })
    };



}

module.exports = PaymentService;
