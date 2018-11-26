let Civilisation = {
    culture: "Strategic",
    population: 300,
    isDeveloped: true,

    howManyPeople(){
        return this.population
    }

}
// to access
console.log(Civilisation.culture)

// adding vars and functons
Civilisation.GDP = "100$"
Civilisation.calculateGDP = function(){
    return this.GDP
}
console.log(Civilisation.calculateGDP())


// NEXT
// WE can also use factory method
let CivilisationFactory = function(culture = "developing", population = "undefined", isDeveloped = false){
    this.culture = culture,
    this.population = population,
    this.isDeveloped = isDeveloped
 }
CivilisationFactory.prototype.howManyPeople = function(){
    return this.population
}

let american = new CivilisationFactory("Interesting", 300, true)
let eu = new CivilisationFactory("Either brutality or vanity", 340, true)

console.log(american.howManyPeople())
console.log(eu.howManyPeople())
console.log(american instanceof CivilisationFactory)