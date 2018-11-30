let motherProt = function (arg) {
    this.i = 0;
    this.arg = arg;
}

motherProt.prototype.getArg = function () {
    return this.arg;
}

let son_1 = new motherProt(1);
let son_2 = new motherProt(2);

console.log(son_1.getArg)
console.log(son_2.getArg)

// there is a chain of prototype objects, our object, then parent object, 
// then lastly is the master object which contains everything, thats how js operates

// Base class
let Job = function () {
    this.pays = true
}

Job.prototype.print = function () {
    console.log(this.pays ? "Hire me" : "No thanks")
}

// Subclass
let TechJob = function (title, pays) {
    // this referes to this TechJob functions, and its assigned to Job class
    Job.call(this)
    this.title = title,
        this.pays = pays
}
// now it inherits the Job prototype functions
TechJob.prototype = Object.create(Job.prototype)
// constructor
TechJob.prototype.constructor = TechJob

let softwarePosition = new TechJob("Javascript", true)

console.log(softwarePosition.print())

//MORE
let Car = function (color) {
    this.color = color;

    // saves under __proto__ rathen than inside of object Car
    Car.prototype.getColor = function () {
        return this.color;
    }
}

// now anything created will have this prototype functio
Object.prototype.toString = function () {
    return `color: ${this.color}`
}

let redCar = new Car('red')

console.log(redCar.toString())