let Civilisation = {
    culture: "Strategic",
    population: 300,
    isDeveloped: true,

    howManyPeople() {
        return this.population
    }

}
// to access
console.log(Civilisation.culture)

// adding vars and functons
Civilisation.GDP = "100$"
Civilisation.calculateGDP = function () {
    return this.GDP
}
console.log(Civilisation.calculateGDP())


// NEXT
// WE can also use factory method
let CivilisationFactory = function (culture = "developing", population = "undefined", isDeveloped = false) {
    this.culture = culture,
        this.population = population,
        this.isDeveloped = isDeveloped
}
CivilisationFactory.prototype.howManyPeople = function () {
    return this.population
}

let american = new CivilisationFactory("Interesting", 300, true)
let eu = new CivilisationFactory("Either brutality or vanity", 340, true)

console.log(american.howManyPeople())
console.log(eu.howManyPeople())
console.log(american instanceof CivilisationFactory)

// ASSSIGN
const jsSkill = {
    knowsJS() {
        return true;
    }
}

const engDegree = {
    hasDegree() {
        return true;
    }
}
// first arg is the object we are gonna assign it to, in this case
// its an empty one, and insert jsSkill and engDegree in there.
const jsEngineer = Object.assign({}, jsSkill, engDegree);

// can also have a function that return and object
let Car = function (color) {
    let moving = false;
    // returns this object
    return Object.assign({}, {
        color: color,
        drive() {
            moving = true
        },
        isMoving() {
            return moving;
        }
    })
}

// MIXINS

const humanFactory = function (obj) {
    // goes to closure
    let isStrong = false;

    return Object.assign({}, obj, {
        getStrong() {
            isStrong = true;
        },
        isStrongFunc() {
            return isStrong
        }
    })
}
const flyFactory = function (obj) {
    let isFlying = false;
    return Object.assign({}, obj, {
        fly() {
            isFlying = true
            // to allow chaining
            return this
        },
        isFlying() {
            return isFlying
        }
    })
}

const superman = humanFactory(flyFactory({}))