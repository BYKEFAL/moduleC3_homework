function ElectricalAppliance(name, power) {
   this.name = name;
   this.power = power;
   this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function () {
   console.log(this.name + " is plugged!");
   this.isPlugged = true;
}

ElectricalAppliance.prototype.unplug = function () {
   console.log(this.name + " is unplugged!");
   this.isPlugged = false;
}

function Lamp(name, brand, power, bulbType) {
   this.name = name;
   this.brand = brand;
   this.power = power;
   this.bulbType = bulbType;
   this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type) {
   this.name = name;
   this.brand = brand;
   this.power = power;
   this.type = type;
   this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

const tableLamp = new Lamp("Table lamp", "Xiaomi", 35, "LED");
const homePC = new Computer("Table PC", "Intel", 120, "stationary");

tableLamp.unplug();
homePC.plugIn();
console.log()
console.log(homePC)
console.log(tableLamp)
