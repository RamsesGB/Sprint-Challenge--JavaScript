// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(a, b, cb) {
  return console.log(cb(a, b));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2){
  return (num1 + num2);
}


function multiply(num1, num2){
  return (num1 * num2);
}

function greeting(fName, lName){
  return (`Hello ${fName} ${lName}, nice to meet you!`);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log('check work')

consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// add(1, 1, function(sum){
//   console.log(sum);
// });

// multiply(3, 3, function(product){
//   console.log(product);
// });

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: `nestedfunction()` can access the variable `internal` because it is an inner function that has access to the outer (enclosing) function’s variables


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();