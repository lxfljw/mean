'use strict';
var chalk = require("chalk");
module.exports = function (app) {
 
  var owner = require('../controllers/owner.parking.controllers');
  console.log(chalk.blue('owner.server.routes'));
 
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  app.route('/v1/parking/:parking_id/log').get(owner.getLog);
  app.route('/v1/parking/:parking_id/:space_id/status').get(owner.getSpaceIdStatus);
  app.route('/v1/parking/:parking_id/:space_id').put(owner.updateSpaceIdStatus);
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  //app.route('/v1/parking/:parking_id/events/test').get(owner.test);
  app.route('/v1/parking/:parking_id/history').get(owner.parkingHistory);
  app.route('/v1/parking/:parking_id/prices').put(owner.modifyThePrices);
  app.route('/v1/user/:guestID/parking/transaction/history').get(owner.getUserTransactionHistory);
  app.route('/v1/users/:username/info/owner').get(owner.OwnerGetUserInfo);
  app.route('/v1/parking/:parking_id/owner').get(owner.ownerGetParkingId);
  console.log("owner routes");
    
  
 
  // Finish by binding the user middleware
 // app.param('userId', owner.userByID);
};
  