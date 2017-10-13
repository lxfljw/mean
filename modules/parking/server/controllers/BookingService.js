var Promise = require("bluebird");
const chalk = require('chalk');
/*
import CarModel from '../models/car.server.models.js';
import Transaction from '../models/transaction.server.models';
import UserProfile from '../models/userProfile.server.models';
import Parking from '../models/parking.server.models';
*/
var mongoose = require('mongoose'),
  CarModel = mongoose.model('carmodels'),
  User = mongoose.model('userprofiles'),
  Transaction = mongoose.model('transactions'),
  Parking = mongoose.model('parkingmodels');


class BookingService{
  reserveParking(id){

                      return new Promise((resolve,reject)=>{
                      const query = {parkingSlots :[{ slotId : "111"}]};
                      const projetion = {_id:0,parkingSlots:1 };
                      Parking.findOne(query,projection,(err,slot)=>{
                        if (err){
                          reject(new Error("Slot is not exist!"))
                        }
                        else resolve(slot)
                      })
}

/*
                var data = {
                   reservation_id: "BC12345120456",
                   status:"reserve_success", 
                   license_id: "京A BC123",
                   timeStamp: "2015/8/21 15:20:00", 
                   time: 600,   
                   parkinglot: "陆家嘴国购停车场",
                   parking_id: "BC12345120456"          
                  }  

               if(id==0){reject(new Error('Fail to reserve parking!')) }
               else resolve (data)
*/

             ) };
            


      cancleReservetion(id){
      return new Promise((resolve,reject)=>{
                const query = { 'parkingSlots.$.slotId' : 1};
                const projetion = {_id:0,parkingSlots:1 };
                Parking.findOne(query,projection,(err,slot)=>{
                	if (err){
                		reject(new Error("Fail to cancle booking!"))
                	}
                	else resolve(slot)
                })
  
  /* 
                var data =    {
                   reservation_id: "BC12345120456",
                   status:"cancel_success",
                   
                   license_id: "京A BC123",
                   
                   timeStamp: "2015/8/21 15:20:00", 
                   time: 600,
                   
                   parkinglot: "陆家嘴国购停车场",
                   parking_id: "BC12345120456"          
                 }    
                  if(id==0){
                    reject(new Error('There is an error wtth canclereservation!'))  }
            
                  else resolve(data)
*/
              })
            
         }
     }


module.exports = BookingService; 