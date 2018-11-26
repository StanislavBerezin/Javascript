let object = {
    num:2
}
let object1 = {
    num:5
}
let shouldAcessObject =  function(arg, arg1, arg2){
    return this.num + arg + arg1 + arg2
}
// addToThis is calling the object, gets all of its properties like num and 
// the second parameter is for "arg" in addToThis

// Makes it as if its a part of the objec
console.log(shouldAcessObject.call(object, 1,2,3))


// apply
let arr1 = [1,2,3]
console.log(shouldAcessObject.apply(object , arr1))


// we bind the function to the object in variable bound
let bound = shouldAcessObject.bind(object)

// then we can just execute it, as its all binded
console.log(bound(1,2,3))