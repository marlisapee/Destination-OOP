class Bag {
  constructor(weight, id) {
    this.weight = weight;
    this.id = id;
    this.owner = null;
  }

  getOwner() {
    return this.owner;
  }

  assignOwner(name) {
    this.owner = name;
  }
}

module.exports = Bag;
