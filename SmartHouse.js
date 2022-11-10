"use strict";

function SmartHouse() {
	this.__devices = [ ];
};

SmartHouse.prototype.addDevice = function (device) {
	this.__devices.push(device);
};

SmartHouse.prototype.getDeviceByName = function (name) {
	var findedDev = null;
	this.__devices.forEach(function (device) {
		if (device.getName() === name) {
			findedDev = device;
		}
	}) 
	return findedDev;
};

SmartHouse.prototype.turnOffAll = function () {

};
