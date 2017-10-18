'use strict';

module.exports = function (app) {

  var admin = require('../controllers/admin.parking.controllers');

  
  app.route('/v1/users/:username/info/admin').get(admin.getUserTransaction);
  //==============unsolve
  app.route('/v1/users/:user/info').get(admin.getUserInfo);
  app.route('/v1/parking/events').get(admin.illegalParking);
  app.route('/v1/parking/:parking_id').get(admin.getParkingStatus);
  app.route('/v1/parking/:parking_id').get(admin.getSpaceId);
  
   

  // Finish by binding the user middleware
  //app.param('userId', admin.userByID);
}; 