class Civilisation {
    constructor(name, population, planet) {
        // can be done like this.name = name or a faster way
        //though assigning those variables through object.assign(THIS)
        Object.assign(this, {
            name,
            population,
            planet
        })
    }

}