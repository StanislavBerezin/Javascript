var object = { t1: 1, t2: 33, t3: 10, t4: 9, t5: 45, t6: 101 },
    result = Object.assign(                      // collect all objects into a single obj
        ...Object                                // spread the final array as parameters
            .entries(object)                     // key a list of key/ value pairs
            .sort(({ 1: a }, { 1: b }) => b - a) // sort DESC by index 1
            .slice(0, 3)                         // get first three items of array
            .map(([k, v]) => ({ [k]: v }))       // map an object with a destructured
    );                                           // key/value pair

console.log(result);
