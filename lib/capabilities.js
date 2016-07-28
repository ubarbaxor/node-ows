/*
 * Copyright (c) 2016 Francesco Bartoli <francesco.bartoli@geobeyond.it>
 * MIT Licensed
 *
 */

"use strict";

var HttpClient = require('./http');

/**
 * Operation name: GetCapabilities
 *
 */

Capabilities.prototype.GetCapabilities = function(service){
    var getCapabilities = new Capabilities.GetCapabilities(); 
    // XML to Post.
    var myXML = Capabilities.marshalDocument(getCapabilities);
    var me = this;
    //return Ows4js.Util.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
        var capabilities;
        capabilities = Capabilities.unmarshalDocument(responseXML);
        console.log(capabilities);
        //me.serviceIdentification = capabilities['csw:Capabilities'].serviceIdentification;
        //me.serviceProvider = capabilities['csw:Capabilities'].serviceProvider;
        //me.operationsMetadata = capabilities['csw:Capabilities'].operationsMetadata;
        //me.filterCapabilities = capabilities['csw:Capabilities'].filterCapabilities;
        return me;
    });
};

Capabilities.prototype._fromService = function(service) {

  this.service = service;

};

exports.open_capabilities = open_capabilities;
exports.Capabilities = Capabilities;
