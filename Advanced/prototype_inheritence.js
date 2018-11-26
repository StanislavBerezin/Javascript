let motherProt = function(arg){
    this.i = 0;
    this.arg = arg;
}

motherProt.prototype.getArg = function(){
    return this.arg;
}

let son_1 = new motherProt(1);
let son_2 = new motherProt(2);

console.log(son_1.getArg)
console.log(son_2.getArg)

// there is a chain of prototype objects, our object, then parent object, 
// then lastly is the master object which contains everything, thats how js operates
