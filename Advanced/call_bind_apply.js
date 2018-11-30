// in general call, apply and bind to borrow functionalities from other functions

let object = {
  num: 5
};
let object1 = {
  num: 5
};
let shouldAcessObject = function (arg, arg1, arg2) {
  return this.num + arg + arg1 + arg2;
};
// addToThis is calling the object, gets all of its properties like num and
// the second parameter is for "arg" in addToThis

// Makes it as if its a part of the objec
console.log(shouldAcessObject.call(object, 1, 2, 3));

// apply
let arr1 = [1, 2, 3];
console.log(shouldAcessObject.apply(object, arr1));

// we bind the function to the object in variable bound
let bound = shouldAcessObject.bind(object);

// then we can just execute it, as its all binded
console.log(bound(1, 2, 3));

let add = function (c) {
  console.log(this.a + this.b + c);
};
let obj = {
  a: 1,
  b: 2
};

// last param is for add, by doing call, add can acess A, B
add.call(obj, 3);

// CALL
// You have a function and then lets say you want to acess something,
// so it becomes thisFUNCTION.call(thatObject), so the function will get access
// to variables u need. If the function requres params, then they come last in call
//e.g (thatObject, "param")


let argsToArray = function () {
  // by doing this we transfer arguments into an array
  // array []. has method slice and in it we call arguments
  console.log([].slice.call(arguments));
};

argsToArray(1, 2, 3);

let mammal = function (legs) {
  this.legs = legs;
};
//here we call for mammal and bind it to cat
let cat = function (legs, isDomestic) {
  mammal.call(this, legs);
  this.isDomestic = isDomestic;
};

let lion = new cat(4, false);
console.log(lion);

// apply, an array doesnt have Math.in, so we can apply it to our
// array, hence giving us the results
let numArray = [1, 2, 3];

console.log(Math.min.apply(null, numArray));

//bind
let button = function (content) {
  this.content = content;
};
button.prototype.click = function () {
  console.log(`${this.content} clicked`);
};

let newButton = new button("add");
let boundClick = newButton.click.bind(newButton);

boundButton();