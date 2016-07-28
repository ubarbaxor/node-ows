/*
 * Copyright (c) 2016 Francesco Bartoli <francesco.bartoli@geobeyond.it>
 * MIT Licensed
 *
 */

"use strict";

var HttpClient = require('./http');

Capabilities.prototype._fromService = function(service) {

  this.service = service;

};

exports.open_capabilities = open_capabilities;
exports.Capabilities = Capabilities;
