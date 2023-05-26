// TODO: What does 'this' refer to?
// This refers to the browsee window.
console.log(this);

// TODO: What does 'this' refer to?
function helloThis() { 
   //This is a global object
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); //Add 10 to the above 10 years
   }
};

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15) // Multiplying 'this investment' 5000 * 1.15
    }
   }   
};

// TODO: After commenting, check your results!
helloThis(); // Log a global object as "this"

// TODO: After commenting, check your results!
child.ageTenYears(); // Adds 10 to the exting 10
investor.investment.investmentGrowth(); // 5750: 5000 * 1.15 from function

console.log(Math.floor(Math.random() * 100))
