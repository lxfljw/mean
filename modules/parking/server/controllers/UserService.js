var Promise = require("bluebird");
const chalk = require('chalk');
import CarModel from '../models/car.server.modules.js';
import Transaction from '../models/transaction.server.models';
import UserProfile from '../models/userProfile.server.models';
import Parking from '../models/parking.server.models';

class UserService{


        userGetInfo(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }

              var data = {
                          name:"xxx",
                          mobile:"392928181",
                          email:"38828282@qq.com", 
                          cars:[
                           
                              { "license": "京A BC123" }, 
                              { "license": "京B BC123" }
                           ]
                        }


              if(id==0){reject(new Error('Fail to get your infomation!')) }
              else resolve (data)

            })
          }


      





      getLog(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }
              var data = {name:"getLog"}
              if(id==0){reject(new Error('Fail ')) }
              else {resolve (data);console.log(chalk.blue('Data from function parkingInfo'))}
        })

            }
          


    


   


   



   getHistory(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }
              var data = {test:"test   getHistory"}
              if(id==0){reject(new Error('Fail ')) }
              else resolve (data)

            })
          }


  


   userHistory(id){
          return new Promise((resolve,reject)=>{
            var projetion={ _id:0, id:1, tittle:1, format:1 }
            var query = { }

            var data =   [{
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

            if(id==0){ reject(new Error('fail to get data!'))}
            else resolve  (data)  
          })
         }
                   
  userInfo(id){
          return new Promise((resolve,reject)=>{
            var projetion={ _id:0, id:1, tittle:1, format:1 }
            var query = { }

            var data = 
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

            if(id==0){ reject(new Error('fail to get data!'))}
            else resolve  (data)  
          })
         }





 }