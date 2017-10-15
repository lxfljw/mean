var Promise = require("bluebird");
const chalk = require('chalk');
/*import CarModel from '../models/car.server.models.js';
import Transaction from '../models/transaction.server.models';
import UserProfile from '../models/userProfile.server.models';
import Parking from '../models/parking.server.models';*/

var mongoose = require('mongoose'),
CarModel = mongoose.model('carmodels'),
User = mongoose.model('userprofiles'),
Transaction = mongoose.model('transactions'),
Parking = mongoose.model('parkingmodels');

class ParkingService {
    // parking_type == 'indoor'  'outdoor'
    searchParking(parking_id,location,price)  {
        return new Promise((resolve, reject) => {

            const query = {price:2000} 
            const projection = { }        
/*
            Parking.update(
                {_id: "59e0acbbfd19280e6a9b0c65"},
                {$set:{parking_id:parking_id,location:location,price:price}},
                function(err){
                    if(err){  console.log(chalk.red("fail to Update and there is ErrorType => "+err)) }
                    else {   
                        console.error(chalk.green("更新用户名成功!")) ;
                        console.error(chalk.yellow("new parking_id:"+parking_id+"   new location:"+location+"   new price:"+price))    ;
                    } 
                     
                }
            )

*/
            Parking.find(query, projection, (err, parkings) => {
                if (err) {  
                    reject(new Error('An error occured fetching a parking_id ')) }
                else 
                    resolve(parkings);
            });
   
/*
            var data = {   
                "type": "FeatureCollection",   "features":[
                    {    "type": "Feature",    
                          "geometry":
                        {   "type": "Point",   "coordinates":  
                           [ 114.2385783,22.50228736 ]   
                        }, 
                       "properties": 
                            {   
                                "cate":"不收費路旁泊車位",   
                                "type":"路旁泊車位-不收費",    
                                "name eng":"",    
                                "name_chi":"路旁泊車位: 新娘潭路",      
                                "address":"",   
                                "district":"大埔",    
                                "icon":"small_blue",    
                                "icon_large":"large_blue",   
                                "paid":"",   
                                "free":"不收費用的泊車位數目:汽車 / 小型貨車:18",     
                                "easting":842617,    "norting":840297.5   
                            } 
                    }
                ]
            }

            if (id==0) { reject(new Error('An error occured fetching a parking_id '))}
            else resolve(data);
  */       
        })
    } ;


 
 
 
    parkingHistory(user_id){

        return new Promise ((resolve,reject)=>{
            console.log(chalk.green("Here is ParkingHistory")) ;
            const query = {location:id} ;
            const projection = {}
/*
                Parking.update({location:"ecjtu"}, {$set:{location:"HDJD"}}, function (error) {  
                    if (error){  
                        console.error(error);  
                    }
                    else{  
                        console.error("更新用户名成功")  
                    }  
                }); 
                                     
*/
            Parking.find(query,(err,parkinghistory)=>{
                if(err){
                    console.log(chalk.red(err));
                    reject(new Error('This parking_id is not exist!'))
                }
                else{
                    console.log(chalk.green("Data from mongodb is here"));
                    console.log(chalk.green(parkinghistory));
                    resolve(parkinghistory)
                }                  
            })

      /*    var data =   [{     
                parking_id: "BC12345120456",
                license_id: "京A BC123",
                parkinglot: "陆家嘴国购停车场",
                entrance_timestamp: "2015/8/21 15:20:00",
                parkingTime: "1小时12分钟",
                preOrder: true,
                invoice: false,
                payment: "20.00",
                coupon_amount: "5.00",
                payment_total: "10.00",
                test: "test"
            }]
            if (id==0) {

                console.log(chalk.yellow('error!!')); 

                reject(new Error('You can not get parkingHistorry!'))
            }
            else {
                const chalk = require('chalk');
                console.log(chalk.blue('Data status is OK'));
                resolve(data);
            };*/

        })
    };


      

    startParking(id){

        return new Promise((resolve,reject)=>{
            const query = {parking_id:"123" };
            const projection = {_id:0, parking_id:1 , parkingSlots:1 };
            
            Parking.findOne(query,projection,(err,parking_id)=>{
                if (err){
                    reject(new Error("Fail to start Parking!"))
                }
                else 
                    resolve(parking_id)
            })
/*
            var data =  {
                parkinglot: "陆家嘴国购停车场",
                parking_id: "BC12345120456",
                      
                license_id: "京A BC123",
                timeStamp: "2015/8/21 15:20:00", 
                 
                status:"occupation_start"   
            }

            if(id==0){
                reject(new Error('There is an error wtth starting parking!'))
            }  
            else resolve(data)
*/
        })
    }


    stopParking(id){
        return new Promise((resolve,reject) => {
            const query = {parking_id:"10"}
            const projection = {_id:0, parking_id:1  }
            Parking.findOne(query,projection,(err,paking_id)=>{
                if(err){
                    reject(new Error("Fail to stop parking!"))
                }
                else 
                    resolve(parking_id)
            })
/*
            var data = {
                parkinglot: "陆家嘴国购停车场",
                parking_id: "BC12345120456",
                    
                license_id: "京A BC123",
                timeStamp: "2015/8/21 15:20:00", 
               
                status:"occupation_end"   
            }
            
            if (id == 0){
                console.log(chalk.yellow('error!!'))
                reject(new Error('Fail to stopParking!')) 
            }
            else {
                resolve(data)
                console.log(chalk.blue('Data status is OK'))
            }
 */
        })

    }



    parkingInfo(id){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:"10"}
            const projection = {_id:0, parking_id:1  }
            Parking.findOne(query,projection,(err,paking_id)=>{
                if(err){
                    reject(new Error("Fail to stop parking!"))
                }
                else 
                    resolve(parking_id)
            })
/*
            var data =  {
                "last_updated": "2015-06-15T12:31:00",
                "last_downloaded": "2015-06-15T12:31:25",
                "data_source": "http://examplecity.com",
                "lots": [{
                    "coords": {
                        "lat": 51.05031,
                        "lng": 13.73754
                    },
                    "name": "Altmarkt",
                    "total": 400,
                    "free": 235,
                    "city": "open|closed|nodata",
                    "id": "lot_id",
                    "forecast": true|false,
                    "region": "Region X", // optional
                    "address": "Musterstraße 5", // optional
                    "lot_type": "Parkhaus" // optional
                }],
                       
            }

            if(id==0){reject(new Error('Fail to get parking infomation! ')) }
            else {resolve (data);console.log(chalk.blue('Data from function parkingInfo'))}
*/
        })
    }




    getSpaceIdStatus(id){
        return new Promise((resolve,reject)=>{
            const query = {'parkingSlots.$.status':1}
            const projection = {_id:0, parkingSlots:1  }
            Parking.findOne(query,projection,(err,status)=>{
                if(err){
                    reject(new Error("Fail to get space status!"))
                }
                else 
                    resolve(status)
            })

         /*
          var data = {test:"test getSpaceIdStatus"}
          if(id==0){reject(new Error('Fail ')) }
          else resolve (data)
*/
        })
    }



    updateSpaceIdStatus (id){
        return new Promise((resolve,reject)=>{
            const query = {'parkingSlots.$.status':1}
            const projection = {_id:0, parkingSlots:1  }
            Parking.findOneAndUpdate(query,projection,(err,status)=>{
                if(err){
                    reject(new Error("Fail to get or update space status!"))
                }
                else 
                    resolve(status)
            })


/*
        var data = {test:"test updateSpaceIdStatus"}
        if(id==0){reject(new Error('Fail ')) }
        else resolve (data)
*/

      })
    }



    getParkingId (id){
        return new Promise((resolve,reject)=>{
            const query = {parking_id}
            const projection = {_id:0, parking_id:1  }
            Parking.findOne(query,projection,(err,parking_id)=>{
                if(err){
                    reject(new Error("Fail to get parking_id!"))
                }
                else 
                    resolve(parking_id)
            })
/*
        var data = {test:"test getParkingId"}

        if(id==0){ reject(new Error('fail to get data!'))}
        else resolve  (data)  
*/           
        })
    }


    getSpaceId (id){
        return new Promise((resolve,reject)=>{
            const query = {parking_id}
            const projection = {_id:0, parking_id:1  }
            Parking.findOne(query,projection,(err,parking_id)=>{
                if(err){
                    reject(new Error("Fail to get space status!"))
                }
                else 
                    resolve(parking_id)
                })

/*             
        var data = {test:"test getSpaceId "}

        if(id==0){ reject(new Error('fail to get data!'))}
        else resolve  (data) 
*/ 
        })
    }


    illegalParking (id){
        return new Promise((resolve,reject)=>{
            var query = {parking_id:1 }
            var projetion={ _id:0,parking_id :1}
            Parking.findOne(query,projection,(err,parking_id)=>{
                if(err){
                    reject(new Error("Fail to get illegalParking (!"))
                }
                else 
                    resolve(parking_id)
            })
       //   var data = {test:"test illegalParking "}

       
        })
    }
      

 
    getEvents(id){
        return new Promise((resolve,reject)=>{ 
          const query = { slot:1}
          const projetion = {_id:0, slot:1 }
         
            Parking.find(query,projection,(err,slot)=>{
                if(err){
                    reject(new Error("Fail to get space events!"))
                }
                else 
                    resolve(slot)
            })
        })
    }


    modifyThePrice(id){
        return new Promise((resolve,reject)=>{
            const query = { price:"11"}
            const projetion = {_id:0,price:1 }
            Parking.update(query,projection,(err,price)=>{
                if(err){
                    reject(new Error("Fail to modify the price!"))
                }
                else 
                    resolve(price)
            
            })
        })
    }

}

module.exports = ParkingService;  