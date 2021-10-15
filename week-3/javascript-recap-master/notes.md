# JavaScript Recap

## Data and Variables

## Variables
There are a number of different ways to create variables

* *var* e.g.
```javascript
var price=24.50;
```
* *let*  e.g.
```javascript
let sunnyInHuddersfield=false;
```
* *const* e.g.
```javascript
const moduleCode="CHT2531";
```
* *var* is used for function scoped variables.
* *let* is used for block scoped variables.
* *const* is used for a variable that won't change.

The idea of scope relates to where the variable can be seen or used. See https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var for an in-depth discussion.

As a general rule:
  * If the variable won't need to change value use *const*.
  * If the variable needs to change value use *let*.
  * Try and avoid using *var*, but you might need it sometimes if you run into scope problems.

### Mathematical Operations

* Mathematical operators can be used to manipulate numeric data
* Mathematical Operators
  * \+ addition
  * \- subtraction
  * \* multiplication
  * \/ division
  * ++ incremental operator (adds one)

Here are some examples:
```javascript
const newvar = 3;
let agevar = 21;
agevar = agevar + newvar;
console.log(agevar); //outputs 24
agevar = agevar+6;
agevar = agevar-5;
console.log(agevar); //outputs 25
agevar = agevar*2;
agevar = agevar/5;
console.log(agevar); //outputs 10
agevar++;
console.log(agevar); //outputs 11
let anothervar = (agevar-1) * newvar;
console.log(anothervar); //outputs 30
```
### Concatenation
* The \+ sign is known as the concatenate operator when it is used with string data.
* The concatenate operator joins pieces of text together.
```javascript
const startName = "Bill ";
const endName = "Pill";
const completeName=startName+endName;
console.log(completeName); //outputs Bill Pill
```
```javascript
const jobName="gardener";
console.log("I am a "+jobName+". Gardening is one of the UK's happiest jobs."); //I am a gardener. Gardening is the UK’s happiest jobs.
```
### Template Literals
* These are new to ES2015
* Template literals are created using the back tick (`) character. This is usually key in the top-left corner of the keyboard (below escape) .
* Place holders ${expression} allow us to easily embed variables in a string.

```javascript
const jobName="gardener";
console.log(`I am a ${jobName}. Gardening is one of the UK's happiest jobs.`);//I am a gardener. Gardening is the UK’s happiest jobs.
```
Here's another example
```javascript
const num1=10;
const num2=7;
const diff=num1-num2;
console.log(`${num1} - ${num2} = ${diff}`); // 10 - 7 = 3
```

## Control Structures

### The 'if' statement

The if statement is used to test values
```javascript
const name="Matthew";
if(name === "Matthew"){
  console.log(`Welcome ${name}`);
}else{
  console.log(`Welcome user`);
}
```
Conditional Operators allow us to test in different ways:

* === 	(Equal to)
* \> 		(Greater than)
* \>= 		(Greater than or equal to)
* < 		(Less than)
* <=		(Less than or equal to)
* !==		(Not equal to)

```javascript
const uTeam="Huddersfield Town";
if(uTeam!=="Man Utd."){
	console.log(`You support ${uTeam}, good choice`);
}else{
	console.log('Bad choice');
}
```
JavaScript allows us to combine two or more tests into one statement using AND (&&) and OR (||) operators.

```javascript
const mark=68;
if(mark>=60 && mark<70){
	console.log("You got a B");
}
```
```javascript
const weather="raining";
if(weather === "raining" || weather === "cold"){
	console.log("Wear a coat");
}
```
### Loops
The while loop repeats a set of instructions over and over again until a condition is met. This while loop outputs the numbers 10 to 19:

```javascript
let counter=10;
while (counter<20){
	console.log(counter);
	counter++;
}
```
The for loop outputs a set of instructions a pre-defined, set number of times. The following for loop will output the numbers 1 to 10.

```javascript
for(let i=1;i<=10;i++){
	console.log (i);
}
```
## Arrays
* An array is a special type of variable that can store multiple pieces of data.
* We can think of an array as being a bit like a list of information.
* Each item in the list is numbered so it can be distinguished from the others.

```javascript
const shopping = ["Tea","Bread","Milk","Cheese","Flour"];
console.log(shopping[0]); //Tea
console.log(`Do you like ${shopping[3]}`); // Do you like Cheese
console.log(`I need to buy some ${shopping[1]} and ${shopping[2]} today.`); // I need to but some Bread and Milk today.
```
We can add items to an array using the push method:
```javascript
let like=[]; //an empty array
like.push("Vanilla");
like.push("Strawberry");
like.push("Chocolate");
console.log(like); // Array ["Vanilla", "Strawberry", "Chocolate"]
```
### Looping over arrays

#### forEach Loop
Typically we will use a forEach loop to efficiently loop over an array's values. The following example will display each country in turn:

```javascript
const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];
countries.forEach(function(country){
	console.log(country);
});
```
The output will be:
```
China
India
USA
Indonesia
Brazil
Pakistan
```
#### map
Map is used to create a new array using an existing array. The function is applied to each element of the array and the results are returned as a new array. Here's an example:

```javascript
const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];

const upperCountries = countries.map(function(country){
	return country.toUpperCase();
});

upperCountries.forEach(function(country){
	console.log(country);
});
```
The output will be
```
CHINA
INDIA
USA
INDONESIA
BRAZIL
PAKISTAN
```
#### filter
The filter method is used to create a new array that only features the elements that pass a test. Here's an example:

```javascript
const stuScores=[45,66,34,89,21,65,45];
const passingScores = stuScores.filter(function(score){
	if(score>=40){
		return true;
	}
	return false;
})

passingScores.forEach(function(score){
	console.log(score);
})
```
The output will be
```
45
66
89
65
45
```

## Objects
An object is simply a collection of variables (we call these properties) and functions (we call these methods) that we group together. Here's an example:
```javascript
const employee={
    name:"Jane",
    wage:8,
    calcWeeklyWage:function(hours){
        return hours*this.wage
    }
}
```
To work with an object we use dot-notation syntax, *objectName.property* or *objectName.method()*. Here are some examples:

```javascript
console.log(`${employee.name} earns ${employee.wage} an hour.`); //Jane earns 8 pounds an hour.
console.log(`This week ${employee.name} earned £${employee.calcWeeklyWage(40)}.`); // This week Jane earned £320.
```
Note the use of the keyword *this* in the *calWeeklyWage()* function. It simply means look in the object for the wage value.

We can store any type of data as an object property (even other objects). This example adds an *onCall* property that uses an array.

```javascript
const employee={
    name:"Jane",
    wage:8,
    onCall:["Monday","Wednesday","Thursday"],
    calcWeeklyWage:function(hours){
        return hours*this.wage
    }
}
console.log(`The first day ${employee.name} is on call is ${employee.onCall[0]}.`); // The first day Jane is on call is Monday.
```

## Using Objects
Objects really have two uses:-
1. Storing data
2. Structuring and organising code. This requires a good understanding of topics such as factory functions, prototypes, inheritance, classes etc.

We will largely focus on (1) in this module. If you plan on using a JavaScript framework e.g. Angular, React, or plan on doing more JavaScript when you graduate it would be worth exploring (2).

## Objects and Arrays
We often store a collection of objects in an array. Here's an example:

```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

console.log(`${countries[2].capital}`); // Washington
console.log(`${countries[0].name} has a population of ${countries[0].population}`); // England has a population of 53000000
```
## Arrays of Objects and Array Methods
The same forEach, map and filter methods apply for arrays of objects.

### forEach example
```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];
countries.forEach(function(country){
  console.log(`${country.name}`);
})
```
Outputs
```
England
France
USA
```
### filter example
``` javascript
const europeanCountries = countries.filter(function(country){
    if(country.continent === "Europe"){
      return true;
    }
    return false;
})
europeanCountries.forEach(function(country){
    console.log(`${country.name}`);
})
```
Outputs
```
England
France
```

## Functions

### Basic Function Syntax
A function is simply a block of code we give a name to, in this example *showMessage*
```javascript
function showMessage(){
    console.log("printing some details")
}
```
### Calling Functions
To run the code in a function we simply write the function name and some parentheses (curved brackets()).
```javascript
function showMessage(){
    console.log("printing some details")
}
showMessage(); //outputs 'printing some details'
```
### Function Arguments and Parameters
Arguments allow us to pass data into a function. In this example
* "Jane" is an argument
* *name* is a parameter
```javascript
function showMessage(name){
    console.log(`name - ${name}`)
}
showMessage("Jane"); 
```
Outputs
```
name - Jane
```

### Multiple Arguments
We can specify multiple arguments by separating them with a comma
```javascript
function showMessage(name, course){
    console.log(`name - ${name}`);
  	console.log(`course - ${course}`);
}
showMessage("Jane","IT");
```
Outputs
```
name - Jane
course - IT
```

### Different Data Types
It's not just numbers and strings that can be arguments. We can pass any data type. This example passes an array as an argument.
```javascript
function printNames(namesArr){
    namesArr.forEach(function(name){
      console.log(name);
    })
}
const allStudents=["Jane","Imran","Zofia"]
printNames(allStudents);
```
Outputs
```
Jane
Imran
Zofia
```

This example uses an object.
```javascript
function printStudent(student){
    console.log(`name:${student.name}`);
    console.log(`course:${student.course}`);
    console.log(`mark:${student.mark}`);
}
const someStudent={name:"Jane",course:"IT", mark:67};
printStudent(someStudent);
```
Output
```
name:Jane
course:IT
mark:67
```
This example uses an array of objects
```javascript
function printStudents(studentsArr){
  studentsArr.forEach(function(student){
    console.log(`${student.name} has a mark of ${student.mark}`);
  })
}
const students=[
  {name:"Jane",course:"IT", mark:67},
  {name:"Imran",course:"BACB", mark:82},
  {name:"Pete",course:"BACB", mark:38},
  {name:"Zofia",course:"Web Design", mark:72}
];
printStudents(students);
```
Outputs
```
Jane has a mark of 67
Imran has a mark of 82
Pete has a mark of 38
Zofia has a mark of 72
```

## Returning Values
Functions can *return* (send data back) values. Here's an example:
```javascript
function hasPassed(mark){
    if(mark<40)
    {
        return false;
    }
    return true;
}
console.log(hasPassed(50)) //outputs true
```
Here's another example
```javascript
function square(num){
    return num*num;
}
console.log(square(4)) //outputs 16

```
Again,we can work with any data type e.g. Objects
```javascript
function hasPassed(student){
    if(student.mark>=40){
       return true;
    }else{
      return false;
    }
}

const someStudent={name:"Jane",course:"IT", mark:67}
if(hasPassed(someStudent)){
 	console.log(`${someStudent.name} has passed.`); // Jane has passed.
}
```
This example uses arrays.

```javascript
function longNames(namesArr){
    const matches = namesArr.filter(function(name){
      if(name.length>4){
        return true;
      }else{
        return false;
      }
    })
  return matches
}

var allStudents=["Jane","Imran","Zofia"]
console.log(longNames(allStudents));
```
Outputs
```
Array ["Imran", "Zofia"]
```
And this example uses an array of objects:

```javascript
function getPassingStudents(studentsArr){
  const passingStudents = studentsArr.filter(function(student){
    if(student.mark>=40){
        return true;
    }else{
      return false;
    }
  })
  return passingStudents;
}

const students=[
  {name:"Jane",course:"IT", mark:67},
  {name:"Imran",course:"BACB", mark:82},
  {name:"Pete",course:"BACB", mark:38},
  {name:"Zofia",course:"Web Design", mark:72}
];

const studentsThatPassed = getPassingStudents(students);

studentsThatPassed.forEach(function(student){
    console.log(`${student.name} has passed.`);
  })
```
Outputs
```
Jane has passed.
Imran has passed.
Zofia has passed.
```
