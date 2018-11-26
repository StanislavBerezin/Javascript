// this exercise to see where closure as variable sit in the function
let addTo = function(passed){

    let add = function(inner){
        return passed + inner
    }

    return add
}

let addThree = new addTo(3)

// here we will see that in closure(web tool) = 3, can paste it in JS.fiddle
console.dir(addThree);