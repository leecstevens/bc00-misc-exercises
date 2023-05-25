//WRITE YOUR CODE BELOW
const greeting = "Great to see you, "
students = ["Valerie", "Iz", "Lee", "Stuart", "Brad"]

for (let i=0; i < students.length; i++) {
    console.log(`(loop): ${greeting}${students[i]}!`)
}

i = 0;
while (i < students.length) {
    console.log(`(while): ${greeting}${students[i]}!`)
    i++;
}

i = 0;
do {
    console.log(`(do): ${greeting}${students[i]}!`)  
    i++;
}
while(i < students.length)
