"use strict";
var mongoose = require('mongoose');     
var carSchema = require('../schemas/car-schemas.js');

module.exports = mongoose.model('sell_carinfos', carSchema);