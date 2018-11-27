let avg = function (...n) {
    let tot = 0;
    for (let i = 0; i < n.length; i += 1) {
        tot += n[i]
    }
    // getting the average
    return tot / n.length;
}


let spiceUp = function (fn, ...n) {
    return function (...m) {
        //n concatc(m) puts them together
        // fn.apply we applying the avg function
        return fn.apply(this, n.concat(m))
    }
}

let doAvg = spiceUp(avg, 1, 2, 5);
console.log(doAvg(2));