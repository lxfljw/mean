'use strict';

module.exports = function (app) {

    var users = require('../controllers/users.parking.controllers');
  
   
    app.route('/users/self/info').get(users.userGetInfo);
    app.route('/v1/parking/reserve').post(users.reserveParking);
    app.route('/v1/parking/reservation/cancel').put(users.cancleReservetion);
    app.route('/v1/parking/occupation/start').post(users.startParking);
    app.route('/v1/parking/checkout').post(users.stopParking);

    
    app.route('/v1/users/self/parking/history1').get(users.userParkingHistory);
    app.route('/v1/users/self/pay').post(users.manualPayment);
    app.route('/v1/users/self/coupons').get(users.usersCoupons);
    app.route('/v1/parking/search').post(users.searchParking);


  // Finish by binding the user middleware
 // app.param('userId', users.userByID);
};

 