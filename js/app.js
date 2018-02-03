
//create a variable and store your name
let name = 'Daniel';

//Create a variable to hold the number of states and name it appropriately
const numberOfStates = 50;

//add 5 + 4 and store it in a variable
let addition = (5+4);

//Write a function that says Hello World
function sayHello() {
    alert("Hello World");
}

//Call the Hello World function
sayHello();

//Create function to check the ages of people
function checkAge (name,age) {
    if(age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!');
    }
}

//Call the function checkAge with the following people
checkAge('Charles', 21);
checkAge('Abby',27);
checkAge('James', 18);
checkAge('John',17);

//Create an array for my favorite vegatables 
let favoriteVegetables = ['Celery','Spinach', 'Brocolli', 'Carrots'];

//Create a for loop to console log vegatables

for (x = 0; x < favoriteVegetables.length; x++) {
    console.log(favoriteVegetables[x]);
}