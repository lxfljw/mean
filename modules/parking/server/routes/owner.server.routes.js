'use strict';

module.exports = function (app) {

  var owner = require('../controllers/owner.parking.controllers');

 
  app.route('/v1/parking/:parking_id').get(owner.parkingInfo);
  app.route('/v1/parking/:parking_id/log').get(owner.getLog);
  app.route('/v1/parking/:parking_id/:space_id/any').get(owner.getSpaceId);
  app.route('/v1/parking/:parking_id/:space_id/any').put(owner.putSpaceId);
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  app.route('/v1/parking/:parking_id /history').get(owner.getHistory);
  app.route('/v1/parking/:parking_id/prices').put(owner.ModifyThePrice);
  
   

  // Finish by binding the user middleware
 // app.param('userId', owner.userByID);
};
