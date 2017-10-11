var Promise = require("bluebird");
const chalk = require('chalk');
import CarModel from '../models/car.server.modules.js';
import Transaction from '../models/transaction.server.models';
import UserProfile from '../models/userProfile.server.models';
import Parking from '../models/parking.server.models';

class PaymentService{


//no finish
usersCoupons(id){

            return new Promise((resolve,reject) =>{
              const cquery = { coupon_id:"1234567" };
              const projection = {_id:  0 , coupon:1 };
              Parking.find(query,projection,(err,coupon=>{
              	if(err){
                   reject(new Error("This coupon is not exist!"))
              	};
              	else resolve(coupon)
              }) )

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
            } )
            };
          


        manualPayment(id){

              return new Promise((resolve,reject)=>{
              	          const cquery = {  } ;
                          const projection = {_id:  0 ,id : 1,  title: 1, format: 1 };
                          
                          
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
              })};



}