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
Parking = mongoose.model('parkingmodels'),
GeoLocation = mongoose.model('geolocations');
class ParkingService {

  manualPay(parkingId){
    return new Promise((resolve,reject)=>{
        const query = {parking_id:9999};
        const projection = { };
        Parking.find(query,projection,(err,parkingInfo)=>{
            if(err){
                reject(new Error("Fail to get parking Info!"))
            }
            else
                resolve(parkingInfo)

        })
    })
  }





      getLog(parkingId){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:parkingId};
            const projection = { };
            Parking.find(query,projection,(err,parkingInfo)=>{
                if(err){
                    reject(new Error("Fail to get parking Info!"))
                }
                else
                    resolve(parkingInfo)

            })
        })
    }



     getLog(parkingId){
       return new Promise((resolve,reject)=>{
           const query = {parking_id:parkingId};
           const projection = { };
           Parking.find(query,projection,(err,parkingInfo)=>{
               if(err){
                   reject(new Error("Fail to get parking Info!"))
               }
               else
                   resolve(parkingInfo)

           })
       })
   }





     ownerGetParkingId(parkingId){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:parkingId};
            const projection = { };
            Parking.find(query,projection,(err,parkingInfo)=>{
                if(err){
                    reject(new Error("Fail to get parking Info!"))
                }
                else
                    resolve(parkingInfo)

            })
        })
    }
 

    // parking_type == 'indoor'  'outdoor'
    searchParking(parking_id,location,price,distance,type,lng,lat,limit,skip)  {
        return new Promise((resolve, reject) => {
               const query = {};
               const projection = {  };
               var myCoordinate = [lng,lat];
               if (parking_id){ 
                    query['parking_id']=parking_id
               }

               if (location){ 
                    query['location']=location
               }

               if (price){ 
                    query['price']=price
               }

               if (distance){ 
                    query['coordinate']=
                    { $geoWithin:
                    { $centerSphere: 
                    [  myCoordinate,distance/3963.2 ] } }
               } 
 

               if (type){ 
                    query['type']=type
               }

//----------------------------------------------------------------------------------
              
//----------------------------------------------------------------------------------

               GeoLocation.find(query,projection,{limit:limit,skip:skip},(err,doc)=>{
                     if(err){
                            reject(new Error("nonono"))
                } 
                    else resolve(doc);
           })    
           
            
      
        })
    } ;


    searchParkingByName(parkingnames)  {
        return new Promise((resolve, reject) => {
               const query = [];
               const projection = {  };
               var parkingname; 
               
              
               for (parkingname in parkingnames){
                    
                    query.push({"parking_id": parkingnames[parkingname].parking_id});
                    
               }

                Parking.find({$or:query},projection,(err,doc)=>{
                     if(err){
                            reject(new Error("nonono"))
                     } 
                     else resolve(doc);
                }) 
            
      
                })
    } ;


    parkingHistory(parkingId){

        return new Promise ((resolve,reject)=>{
            console.log(chalk.green("Here is ParkingHistory")) ;
            const query = {parking_id:parkingId} ;
            const projection = { }
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

 


    startParking(startStatus,userID){

        return new Promise((resolve,reject)=>{
            var doc = {
                   // startTime: startTime,
                    //endTime: 12,
                    price: 100,
                   // hostID:ObjectId("59f2d0244e0840fd0c342f2a") ,
                   // userID:ObjectId("59e0617f450ced2138481ac7") 
            };
            const projection = { };
            console.log(chalk.blue("startparking"))
            if (startStatus==1){
                var startTime = new Date();
                console.log(startTime)
                Transaction.create({price:0,startTime:startTime, hostID:"59f2d0244e0840fd0c342f2a" ,
                   userID:"59e0617f450ced2138481ac7" },function(err,doc){
                    console.log(doc);
                    resolve(doc._id)
                    if(err){
                        reject(err)
                    }
                    else resolve(doc._id)
                })
            }
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


    stopParking(stopStatus,transactionID){
        return new Promise((resolve,reject) => {
            const query = { _id:transactionID}
            console.log(transactionID)
            const projection = {  }
            Transaction.find(query,projection)
                       .populate('hostID userID')
                       .exec((err,doc)=>{
                if(err) {
                    reject(new Error("Fail to stop parking!"))
                }
                else{
                     var endTime = new Date();
                     Transaction.update({_id:transactionID},{$set:{price:100,endTime:endTime}},(err,doc)=>{
                        resolve(doc)
                     })    
                   
                }
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



    getEvents(parkingId){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:parkingId}
            const projection = { }
            Parking.findOne(query,projection,(err,parking_id)=>{
                if(err){
                    reject(new Error("Fail to stop parking!"))
                }
                else {
                    resolve(parking_id)
                    console.log(chalk.green(parkingId))

                }
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




    getSpaceIdStatus(parking_id,space_id){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:parking_id,space_id:space_id}
            const projection = {  }
            Parking.find(query,projection,(err,status)=>{
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



    updateSpaceIdStatus (parkingId,spaceId){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:3211}
            const update = {$set:{parking_id:parkingId,space_id:spaceId}}
            Parking.update(query,update,(err,status)=>{
                if(err){
                    reject(new Error("Fail to get or update space status!"))
                }
                else {
                    console.log(chalk.green('update succeess:'+parkingId))
                    resolve(status)
                }
            })
            Parking.find({parking_id:parkingId},(err,A)=>{
                console.log(A)
            })

/*
        var data = {test:"test updateSpaceIdStatus"}
        if(id==0){reject(new Error('Fail ')) }
        else resolve (data)
*/

      })
    }



    getParkingId (parkingId){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:parkingId}
            const projection = {  }
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

/*
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


        var data = {test:"test getSpaceId "}

        if(id==0){ reject(new Error('fail to get data!'))}
        else resolve  (data)

        })
    }

*/
    illegalParking (id){
        return new Promise((resolve,reject)=>{
            var query = {parking_id:1 }
            var projetion={ _id:0,parking_id :1}
            Parking.findOne(query,projection,(err,parking_id)=>{
                if(err){
                    reject(new Error("Fail to get illegalParking !"))
                }
                else
                    resolve(parking_id)
            })
       //   var data = {test:"test illegalParking "}


        })
    }





    modifyThePrices(parking_id){
        return new Promise((resolve,reject)=>{
            const query = {parking_id:parking_id}
            const updatePrice = {$set:{price:1016} }
            Parking.update(query,updatePrice,(err,prices)=>{
                if(err){
                    reject(new Error("Fail to modify the price!"))
                }
                else
                    resolve(prices)

            })
        })
    }





}

module.exports = ParkingService;
