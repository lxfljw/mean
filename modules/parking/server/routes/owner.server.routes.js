'use strict';

module.exports = function (app) {

  var owner = require('../controllers/owner.parking.controllers');
  console.log('owner.server.routes');
 
  app.route('/v1/parking/:parking_id/owner').get(owner.parkingInfo);
  app.route('/v1/parking/:parking_id/log').get(owner.getLog);
  app.route('/v1/parking/:parking_id/:space_id/any').get(owner.getSpaceIdStatus);
  app.route('/v1/parking/:parking_id/:space_id/any').put(owner.updateSpaceIdStatus);
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  //app.route('/v1/parking/:parking_id/events/test').get(owner.test);
  app.route('/v1/parking/:parking_id/history').get(owner.getHistory);
  app.route('/v1/parking/:parking_id/prices').put(owner.modifyThePrice);
  
    

  app.route('/1').get(owner.parkingInfo);
  app.route('/2').get(owner.getLog);
  app.route('/3').get(owner.getSpaceIdStatus);
  app.route('/v1/parking/parking_id/space_id/any').put(owner.updateSpaceIdStatus);
  app.route('/v1/parking/:parking_id/events').get(owner.getEvents);
  //app.route('/v1/parking/:parking_id/events/test').get(owner.test);
  app.route('/6').get(owner.getHistory);
  app.route('/7').put(owner.modifyThePrice);
   
  // Finish by binding the user middleware
 // app.param('userId', owner.userByID);
};
