let country = function () {
    // popuation is a closure
    let population = 0;

    let add = function (add) {
        population += add
        return this;
    }

    let substract = function (sub) {
        population -= sub
        return this;
    }

    let print = function () {
        console.log(population)
    }

    // to access all of these methods we need to return them
    return {
        add,
        substract,
        print
    }
    // can also be addingPopulatin: add, removingPopulation: substract and so on
}


let USA = new country();

USA.add(100).substract(10).print();
// # 1
//  in this example we add `return this` statement which return the entire object,
// hence allowing us to chain it.

// #2