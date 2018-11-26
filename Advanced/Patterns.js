// FActory pattern
// creating an object, putting all the values in it, including functions
// and at the end returing that object. Everything defined in factory method
console.log("FACTORY PATTERN")
let peopleFactory = function(name, age, status){
    let temp = {}

    temp.age = age
    temp.name = name
    temp.status = status

    temp.printPerson = function(){
        console.log(this.name  + " " + this.age + " "+ this.status)
    }

    return temp
}

let person = peopleFactory("Stas", 25, "Single")


person.printPerson()

// Constructor pattern
//  similar to factory however printPerson becomes redundant
// each new person will have this function, creating unnessary load, so better to have a
// prototype function for that.
console.log("CONSTRUCTOR PATTERN")
let peopleConstructor = function(name, age, status){
    
    this.name = name
    this.age = age
    this.status = status

    this.printPerson = function(){
        console.log(this.name  + " " + this.age + " "+ this.status)
    }
}

let person_con = new peopleConstructor("Stas", 25, "Single")

person_con.printPerson()

// Prototype pattern
console.log("PROTOTYPE PATTERN")
let peopleProt = function(){
    // values are assigned through prototypes
}
// all assigned from here
// if no values supplised when creating an object, then the default ones are used
peopleProt.prototype.age = 0
peopleProt.prototype.name = "default"
peopleProt.prototype.status = "default"
peopleProt.prototype.printPerson = function(){
    console.log(this.name  + " " + this.age + " "+ this.status)
}
// creating a person
let person_prot = new peopleProt()
person_prot.age = 25
person_prot.name = "Stas"
person_prot.status = "single"

// we can also check for property by
console.log(person_prot.hasOwnProperty('name'))
// or
console.log("name" in person_prot)
person_prot.printPerson()

// Dynamic prototyping
console.log("DYNAMIC PROTOTYPING")
let peopleDynamicProto = function(name, age, status){
    this.age = age
    this.name = name
    this.status = status

    // its using this logc to avoid redundancy, for example if we create first object
    // then it will create this prototype function, and then when we create another object
    // it will see that we already got this function, therefore no need to create it again
    // otherwise it will just create this functon for each new instance
    if(typeof this.printPerson !== 'function'){
        peopleDynamicProto.prototype.printPerson = function(){
            console.log(this.name  + " " + this.age + " "+ this.status)
        }
    }
}
let person_dynamo = new peopleDynamicProto("Stas", 25, "Single")
person_dynamo.printPerson();
