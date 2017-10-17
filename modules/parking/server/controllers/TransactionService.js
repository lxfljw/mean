var Promise = require("bluebird");
const chalk = require('chalk');
/*
import CarModel from '../models/car.server.modules.js';
import Transaction from '../models/transaction.server.models';
import UserProfile from '../models/userProfile.server.models';
import Parking from '../models/parking.server.models';
*/
var mongoose = require('mongoose'),
  CarModel = mongoose.model('carmodels'),
  User = mongoose.model('userprofiles'),
  Transaction = mongoose.model('transactions'),
  Parking = mongoose.model('parkingmodels');


class TransactionService{
     
		getUserTransactionHistory(guestID){
			return new Promise((resolve,reject)=>{
				const query = {price:100}
				const projection= { }
                Transaction.find(query,projection,(err,guestID)=>{
                	if (err){
                		reject(new Error("fail to get userTransaction because "+err))
                	}
                	else resolve(guestID)
                })
			})
		}    

}


module.exports =  TransactionService;  