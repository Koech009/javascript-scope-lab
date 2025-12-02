// Write your solution in this file!
// Global variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake"; // use let so it can be updated

// Function to add a new burger (function-scoped variable)
function addBurger() {
    const newBurger = "Flatburger";
    burgers.push(newBurger);
}

// Block-scoped variable added to the array
if (true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
}

// Call functions
changeFeaturedDrink();
addBurger();
