"use strict";

var house = new SmartHouse();
house.addDevice(new AirСonditioning("samsung"));
house.addDevice(new AirСonditioning("LG"));
console.log(house.getDeviceByName("LG").getStatus());



