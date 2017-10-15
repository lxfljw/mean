'use strict';
var chalk = require("chalk");
module.exports = function (app) {
 
  var owner = require('../controllers/owner.parking.controllers');
  console.log(chalk.blue('owner.server.routes'));
 
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  app.route('/v1/parking/:parking_id/log').get(owner.getLog);
  app.route('/v1/parking/:parking_id/:space_id').get(owner.getSpaceIdStatus);
  app.route('/v1/parking/:parking_id/:space_id').put(owner.updateSpaceIdStatus);
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  //app.route('/v1/parking/:parking_id/events/test').get(owner.test);
  app.route('/v1/parking/:parking_id/history').get(owner.getHistory);
  app.route('/v1/parking/:parking_id/prices').put(owner.modifyThePrices);
  
    

 
  // Finish by binding the user middleware
 // app.param('userId', owner.userByID);
};
