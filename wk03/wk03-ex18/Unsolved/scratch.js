var greeting="Hello"  //Global

function fun1(something) {
    // This is local
    var var1 = "Hello"
    console.log(`Bringing in: ${something}`)
    greeting = something
    console.log(`Inside Function: ${greeting}`)
    return greeting
}

function fun2(){
    console.log(var1)  //Fail
}

console.log(greeting)
somethingelse = fun1("Goodbye")
console.log(somethingelse)
console.log(greeting)
console.log(var1)