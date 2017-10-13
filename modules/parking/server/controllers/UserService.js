var Promise = require("bluebird");
const chalk = require('chalk');
/*
import CarModel from '../models/car.server.modules.js';
import Transaction from '../models/transaction.server.models';
import Parking from '../models/parking.server.models';
import User from '../models/UserProfile.server.models';
*/
 var mongoose = require('mongoose'),
  CarModel = mongoose.model('carmodels'),
  User = mongoose.model('userprofiles'),
  Transaction = mongoose.model('transactions'),
  Parking = mongoose.model('parkingmodels');

class UserService{


        userGetInfo(id){
           
            return new Promise((resolve,reject)=>{
              const query = {username:"user3"}
              const projection = {_id:0 }
              User.find(query,projection,(err,userinfo)=>{
              	if(err){
              	return	reject(new Error("The user you find is not exist!"))
              	}
              	else resolve(userinfo)
              })
             /* 
              User.create({
                name: "lxf",
                email:"934782385@qq.com",
                
                mobile:15279189307
              })*/
              
/*          
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
*/
            })
          }


      





      getLog(id){
            return new Promise((resolve,reject)=>{
              const query = {username:"lxf" }
              const projetion = {_id:0, username:1 }
              User.findOne(query,projection,(err,username)=>{
              	if (err){
              		reject(new Error("This user is not exist!"))
              	}
              	else resolve(username)
              })
             
             
        })

            }
          


    


   


   



   getHistory(id){
           
              return new Promise((resolve,reject)=>{
              const query = {username:"lxf" }
              const projetion = {_id:0, username:1 }
              User.findOne(query,projection,(err,username)=>{
              	if (err){
              		reject(new Error("This user is not exist!"))
              	}
              	else resolve(username)
              })
             
             
        })
          }


  


   userHistory(id){
         return new Promise((resolve,reject)=>{
              const query = {username:"lxf" }
              const projetion = {_id:0, username:1 }
              User.findOne(query,projection,(err,username)=>{
              	if (err){
              		reject(new Error("This user is not exist!"))
              	}
              	else resolve(username)
              })
             
             
       

/*            var data =   [{
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
*/
          })
         }
                   
  userInfo(id){
         
            return new Promise((resolve,reject)=>{
              const query = {username:"lxf" }
              const projetion = {_id:0, username:1 }
              User.findOne(query,projection,(err,username)=>{
              	if (err){
              		reject(new Error("This user is not exist!"))
              	}
              	else resolve(username)
              })
             
             
      
/*
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
            	*/
          })
         }





 }


 module.exports = UserService;