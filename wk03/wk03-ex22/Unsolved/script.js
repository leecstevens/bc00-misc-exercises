//WRITE YOUR CODE BELOW
let drink_order = {
    name: "Coffee",
    number_sugars: 2,
    ready: false    
}

console.log (drink_order.name, drink_order.number_sugars)

drink_order['ready'] = true;

if (drink_order.ready) {
    console.log (`${drink_order.name} is ready for pickup with ${drink_order.number_sugars} sugars.`)
    console.log (drink_order.name+ " is ready for pickup with "+drink_order.number_sugars+" sugars.")    
} else {
    console.log (`${drink_order.name} is NOT ready for pickup.`)
}


/*
//WRITE YOUR CODE BELOW
let drink_orders = [{
    name: "Coffee",
    number_sugars: 2,
    ready: false    
},
{
    name: "Not Coffee",
    number_sugars: 3,
    ready: false    
}
]

for (i=0; i < drink_orders.length; i++) {
    console.log(drink_orders[i].name)
}

*/