const Person = require('../../classes/Person');
const Plane = require('../../classes/Plane');

describe('Plane class verification', () => {
  let plane;
  let plane2;
  let mar;

  beforeEach(() => {
    plane = new Plane('Delta', 'Puerto Rico');
    plane2 = new Plane('Spirit', 'Mexico');
    mar = new Person('Marlisa', 'New York');
  });

  test('can create an instance of the Plane class', () => {
    expect(plane instanceof Plane).toBe(true);
    expect(plane2 instanceof Plane).toBe(true);
  });

  test('passengers property initializes as an empty array', () => {
    expect(plane.passengers).toStrictEqual([]);
    expect(plane2.passengers).toStrictEqual([]);
  });

  test('getPassengers() successfully retrieves the array of passengers', () => {
    expect(plane.getPassengers()).toStrictEqual(plane.passengers);
  });

  test('addPassenger() successfully adds a passenger to the passengers array', () => {
    plane.addPassenger(mar);
    expect(plane.passengers).toContainEqual({
      bags: [],
      destination: 'New York',
      name: 'Marlisa',
    });
  });
});
