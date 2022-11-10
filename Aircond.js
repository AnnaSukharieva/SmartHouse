"use strict"

function AirСonditioning(name) {
	Device.call(this, name);
	this.__temperature = 20;
};

AirСonditioning.prototype = Object.create(Device.prototype);
AirСonditioning.prototype.constructor = AirСonditioning;

AirСonditioning.prototype.setTemprature = function (tempr) {
	this.__temperature = tempr;
};

AirСonditioning.prototype.getTemprature = function () {
	return this.__temperature;
};