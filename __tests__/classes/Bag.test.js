const Bag = require('../../classes/Bag');

describe('Bag class verification', () => {
  let bag1;
  let bag2;

  beforeEach(() => {
    bag1 = new Bag(10, 1);
    bag2 = new Bag(11, 2);
  });

  test('can create an instance of the Bag class', () => {
    expect(bag1 instanceof Bag).toBe(true);
    expect(bag2 instanceof Bag).toBe(true);
  });

  test('constructor should properly initialize the weight and id properties', () => {
    expect(bag1.weight).toBe(10);
    expect(bag2.weight).toBe(11);
    expect(bag1.id).toBe(1);
    expect(bag2.id).toBe(2);
  });

  test('every bag has an owner initialized to null', () => {
    expect(bag1.owner).toBe(null);
    expect(bag2.owner).toBe(null);
  });

  test('getOwner() successfully returns the owner of the bag', () => {
    expect(bag1.getOwner()).toBe(bag1.owner);
    expect(bag2.getOwner()).toBe(bag2.owner);
  });

  test('assignOwner() successfully assigns an owner to a bag', () => {
    bag1.assignOwner('Mar');
    bag2.assignOwner('Jane');
    expect(bag1.owner).toBe('Mar');
    expect(bag2.owner).toBe('Jane');
  });
});
