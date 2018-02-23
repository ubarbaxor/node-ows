/*
 * Copyright (c) 2016 Francesco Bartoli <francesco.bartoli@geobeyond.it>
 * MIT Licensed
 */


var HttpClient = require('./http'),
  assert = require('assert'),
  events = require('events'),
  util = require('util'),
  debug = require('debug')('node-ows'),
  findPrefix = require('./utils').findPrefix,
  _ = require('lodash');

var Client = function(capabilities, service, endpoint, options) {
  "use strict";

  this._initializeOptions = console.log;
  this._initializeServices = console.log;

  events.EventEmitter.call(this);
  options = options || {};
  this.capabilities = capabilities;
  this.service = service;
  this._initializeOptions(options);
  this._initializeServices(endpoint);
  this.httpClient = options.httpClient || new HttpClient(options);
};
util.inherits(Client, events.EventEmitter);

module.exports = Client;
