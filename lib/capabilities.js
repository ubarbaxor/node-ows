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

/**
 * GetCapabilities Request Template
 *
 * This Objects already use the simple mapping style from jsonix
 * 
 */
Capabilities.GetCapabilities = function (service, version) {
    
    this.service = service;
    this.version = version;
    
    var capabilitiesByService = service + ":GetCapabilities";
    
    this[capabilitiesByService] = {
        "TYPE_NAME": service.toUpperCase() + "_" + version._toUnderscore() + ".GetCapabilitiesType",
        "service":service,
        "acceptVersions": {
            "TYPE_NAME":"OWS_1_0_0.AcceptVersionsType",
            "version":[version]
        },
        "acceptFormats": {
            "TYPE_NAME": "OWS_1_0_0.AcceptFormatsType",
            "outputFormat":["application/xml"]
        }
    }
};


exports.open_capabilities = open_capabilities;
exports.Capabilities = Capabilities;
