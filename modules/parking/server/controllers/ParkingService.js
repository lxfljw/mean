var Promise = require("bluebird");
const chalk = require('chalk');
 
class ParkingService {

     searchParking(id)  {
        return new Promise((resolve, reject) => {

          const projection = { _id: 0, id: 1, title: 1, format: 1 } 
          const query = {  }    

          var data = {   
                "type": "FeatureCollection",   "features":
                 [
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
         
})} ;




           usersCoupons(id){

            return new Promise((resolve,reject) =>{
              const projection = {_id:  0 ,id : 1,  title: 1, format: 1 }
              const cquery = {  }

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

            } )
            };
          


             manualPayment(id){

              return new Promise((resolve,reject)=>{
                          const projection = {_id:  0 ,id : 1,  title: 1, format: 1 }
                          const cquery = {  } 
                          
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





            parkingHistory(id){

               return new Promise ((resolve,reject)=>{
                          const projection = {_id:  0 ,id : 1,  title: 1, format: 1 }
                          const cquery = {  } 

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
                      };

    })};



    stopParking(id){
    return new Promise((resolve,reject) => {
                      const projection = {_id:0, id:1,tittle: 1, format : 1  }
                      const query = {}

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
                    })

                    }


  startParking(id){
                return new Promise((resolve,reject)=>{
                  const projection = {_id:0, id:1, tittle:1, format:1 }
                  const query = { }

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
                })
              }


cancleReservetion(id){
      return new Promise((resolve,reject)=>{
                const projection = {_id:0, id:1, tittle:1, format:1 }
                const query = { }

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
              })
            
         }
 
reserveParking(id){
              return new Promise((resolve,reject)=>{
                const projetion = {_id:0, id:1, tittle:1, format:1 }
                const query = { }

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
              })
            }

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


parkingInfo(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }

              var data =  {

                          "last_updated": "2015-06-15T12:31:00",
                          "last_downloaded": "2015-06-15T12:31:25",
                          "data_source": "http://examplecity.com",
                          "lots": [
                          {
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
          


         getSpaceIdStatus(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }
              var data = {test:"test getSpaceIdStatus"}
              if(id==0){reject(new Error('Fail ')) }
              else resolve (data)

            })
          }



           getEvents(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }
              var data = {test:"test   getEvents"}
              if(id==0){reject(new Error('Fail ')) }
              else resolve (data)

            })
          }




          updateSpaceIdStatus (id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }
              var data = {test:"test updateSpaceIdStatus"}
              if(id==0){reject(new Error('Fail ')) }
              else resolve (data)

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


           modifyThePrice(id){
            return new Promise((resolve,reject)=>{
              const projetion = {_id:0, id:1, tittle:1, format:1 }
              const query = { }
              var data = {test:"test modifyThePrice"}
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


        illegalParking (id){
          return new Promise((resolve,reject)=>{
            var projetion={ _id:0, id:1, tittle:1, format:1 }
            var query = { }

            var data = {test:"test illegalParking "}

            if(id==0){ reject(new Error('fail to get data!'))}
            else resolve  (data)  
          })
         }


        getParkingId (id){
          return new Promise((resolve,reject)=>{
            var projetion={ _id:0, id:1, tittle:1, format:1 }
            var query = { }

            var data = {test:"test getParkingId"}

            if(id==0){ reject(new Error('fail to get data!'))}
            else resolve  (data)  
          })
         }


         getSpaceId (id){
          return new Promise((resolve,reject)=>{
            var projetion={ _id:0, id:1, tittle:1, format:1 }
            var query = { }

            var data = {test:"test getSpaceId "}

            if(id==0){ reject(new Error('fail to get data!'))}
            else resolve  (data)  
          })
         }



}
 





module.exports = ParkingService; 