let runElections = function(){
    return new Promise(function(resolve, reject){
        resolve("\nElections are now running\n ");
    })
}

let secureElections = function(){
    return new Promise(function(resolve, reject){
        resolve("Elections are now secured \n");
    })
}

let showResult = function(){
    return new Promise(function(resolve, reject){
        resolve("Trump has won \n")
    })
}
// so that it runs after Promise.All
setTimeout(()=>{
    runElections().then((text)=>{
        console.log(text)
        return secureElections()
    }).then((text)=>{
        console.log(text)
        return showResult();
    }).then((text)=>{
        console.log(text)
        console.log("All promises are gone now in time out")
    })
},2000)


// OR ALTERNATIVELY CAN USE

Promise.all([runElections(), secureElections(), showResult()])
    .then((text)=>{
    console.log("This runs all of them: " + text)
})