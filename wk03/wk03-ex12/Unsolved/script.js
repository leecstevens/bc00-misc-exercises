
// WRITE YOUR CODE HERE
let names = [{
    id: 1,
    name: "Valerie"
    },
    {id: 2,
    name: "Lee"}
    ]
    
let student_names = ["Valerie", "Iz", "Lee"]

//One by one, by index
console.log(student_names)
console.log(student_names[0]);
console.log(student_names[1]);
console.log(student_names[2]);

// In a loop, do one at a time.
for(let i=0; i < student_names.length; i++) {
    console.log(`Welcome to the class ${student_names[i]}.`)    
}

/*
    use the ` character and ${} as below 
    to enhance how you use strings in
    things like console.log.
*/
console.log(`Welcome to the class ${student_names[0]}!`)
console.log(`Welcome to the class ${student_names[1]}!`)
console.log(`Welcome to the class ${student_names[2]}!`)


