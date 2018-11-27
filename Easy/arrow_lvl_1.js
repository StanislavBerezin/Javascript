const name = 'Stas';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));


// The reason for arrow functions described here
var x = function () {
  let that = this;
  this.val = 1;

  // by using basic function, the word this, refers to the setTimeOut function
  // to solve this issue we can add let that = this

  // another solution, is to use arrow function, and the arrow function "this" will refer
  // to the parent object which is the x function itself.
  setTimeout(function () {
    that.val++;
    console.log(that.val)
  }, 1)

  setTimeout(() => {
    this.val++;
    console.log(this.val)
  }, 1)
};

var xxx = new x();