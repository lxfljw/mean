'use strict';

module.exports = function (app) {

  var users = require('../controllers/users.parking.controllers');

 
  app.route('/users/self/info').get(users.userGetInfo);
  app.route('/v1/pakingsearch').post(users.searchParking);
  app.route('/v1/parking/reserve').post(users.reserveParking);
  app.route('/v1/parking/reservetion/cancel').post(users.cancleReservetion);
  app.route('/v1/parking/occupation/start').post(users.startParking);
  app.route('/v1/parking/checkout').post(users.stopParking);
  app.route('/v1/users/self/parking/history').get(users.parkingHistory);
  app.route(' /v1/users/self/pay').post(users.manualPayment);
  app.route('/v1/users/self/coupons').post(users.usersCoupons);
   

  // Finish by binding the user middleware
 // app.param('userId', users.userByID);
};

