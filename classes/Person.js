class Person {
  constructor(name, destination) {
    this.name = name;
    this.destination = destination;
    this.bags = [];
  }

  addBags(bag) {
    bag.owner = this.name;
    this.bags.push(bag);
  }

  getBags() {
    return this.bags;
  }
}

module.exports = Person;
