'use strict';

module.exports = function (app) {

  var admin = require('../controllers/admin.parking.controllers');

 
  app.route('/v1/users/:user/parking/history').get(admin.getUserTransaction);
  app.route('/v1/users/:user/info').get(admin.getUserInfo);
  app.route('/v1/parking/events').get(admin.illegalParking);
  app.route('/v1/parking/:parking_id').get(admin.getParkingStatus);
  app.route('/v1/parking/:parking_id/:space_id').get(admin.getSpaceId);
  
   

  // Finish by binding the user middleware
  //app.param('userId', admin.userByID);
};