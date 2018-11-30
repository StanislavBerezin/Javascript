class Car {
    // this refers to all methods and everything in this class
    constructor(color, price) {

        Object.assign(this, {
            color,
            price
        })
    }
    // Static methods are called by the class itself, rather than the object
    // that was created by the class. It goes inside of the class, if its not static
    // it goes into prototype section

    static comparePrice(car1, car2) {
        return Math.abs(car1.price - car2.price)

    }
    static sellCar(car) {
        return `selling for ${car.price}`
    }
    getColor() {
        console.dir(this)
        return this.color
    }
}
const redCar = new Car("red", 100)
const blueCar = new Car("blue", 102)

console.log(Car.comparePrice(redCar, blueCar));

class Toyota extends Car {
    constructor(color, price) {
        super(color, price)
    }
    static sellCar(car) {
        return `Toyota ${super.sellCar(car)}`
    }
}

const camry = new Toyota('orange', 100)
console.log(Toyota.sellCar(camry))