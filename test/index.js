var builder = require('../src/builder');
var Car = require('./car');

var greenCar = builder(Car).withColor('green').withWheels(2).build();
var blackCar = builder(Car).withColor('black').build();
var purpleCar = builder(Car).from(greenCar).withColor('purple').build();

console.log(greenCar, blackCar, purpleCar);

function thing() {
    return {
        firstName:'',
        lastName:''
    };
}

var thing = builder(thing).withFirstName('Ryan').withLastName('Rife').build();
console.log(thing);
