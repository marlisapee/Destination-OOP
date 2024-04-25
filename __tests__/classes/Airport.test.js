const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane');

describe('Airport class verification', () => {
  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport('John F Kennedy');
    plane = new Plane('Delta', 'Puerto Rico');
  });

  test('can create an instance of the Airport class', () => {
    expect(airport instanceof Airport).toBe(true);
  });

  test('constructor should properly initialize the name and airportCode properties', () => {
    expect(airport.name).toBe('John F Kennedy');
    expect(Airport.airportCode).toBe('JFK');
  });

  test('planes property properly initialized to empty array', () => {
    expect(airport.planes).toStrictEqual([]);
  });

  test('getPlanes() successfully retrieves planes array', () => {
    expect(airport.getPlanes()).toStrictEqual(airport.planes);
  });

  test('addPlane(plane) successfully adds plane to the planes array', () => {
    airport.addPlane(plane);
    expect(airport.getPlanes()).toContainEqual({
      company: 'Delta',
      destination: 'Puerto Rico',
      passengers: [],
    });
  });
});
