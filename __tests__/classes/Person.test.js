const Bag = require('../../classes/Bag');
const Person = require('../../classes/Person');

describe('Person class verification', () => {
  let mar;

  beforeEach(() => {
    mar = new Person('Marlisa', 'New York');
  });

  test('can create an instance of the Person class', () => {
    expect(mar instanceof Person).toBe(true);
  });

  test('constructor should properly initialize the name and destination properties', () => {
    expect(mar.name).toBe('Marlisa');
    expect(mar.destination).toBe('New York');
  });

  test('bags property should be initialized to an empty erray', () => {
    expect(mar.bags).toStrictEqual([]);
  });

  test('addBags() successfully assigns an owner to a bag and changes the owner property to the persons name', () => {
    const newBag = new Bag(10, 2);
    mar.addBags(newBag);
    expect(mar.bags).toContainEqual({
      weight: 10,
      id: 2,
      owner: 'Marlisa',
    });
  });

  test('getBags() successfully retrieves the array of bags', () => {
    const newBag = new Bag(10, 2);
    mar.addBags(newBag);
    expect(mar.getBags()).toEqual([
      {
        weight: 10,
        id: 2,
        owner: 'Marlisa',
      },
    ]);
    mar.getBags;
  });
});
