class ElectricalAppliance {
   constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
   }

   plugIn() {
      console.log(this.name + " is plugged!");
      this.isPlugged = true;
   }

   unplug() {
      console.log(this.name + " is unplugged!");
      this.isPlugged = false;
   }

   amperage() {
      console.log(`220V - ${+(this.power / 220).toFixed(2)}A`)
   }
}

class Lamp extends ElectricalAppliance {
   constructor(name, brand, power, bulbType) {
      super(name, power);
      this.brand = brand;
      this.bulbType = bulbType;
      this.isPlugged = true;
   }
}

class Computer extends ElectricalAppliance {
   constructor(name, brand, power, type) {
      super(name, power);
      this.brand = brand;
      this.type = type;
      this.isPlugged = false;
   }
}

const tableLamp = new Lamp("Table lamp", "Xiaomi", 35, "LED");
const tablePC = new Computer("Table PC", "Intel", 120, "stationary");

tableLamp.unplug();
tablePC.plugIn();
tablePC.amperage();
console.log()
console.log(tablePC)
console.log(tableLamp)