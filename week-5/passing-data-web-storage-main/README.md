# Passing Data Using a Query String
This repository contains a JavaScript application that features two pages and dynamically generated content.

* Download the example
* Run the example in a browser (it uses the ```fetch()``` API so it will need to be on a web server or it won't work)
* Have a look at the code, in particular look at how the web storage API is used to store the id of the selected country. Have a look at the code and in the browser, use the developer tools and then *Application > Session Storage* to view the stored data.
  * The web storage API has limitations and is rarely used in the real world, but it is quite simple to use and will work fine for our purposes. You can read more about the web storage API here, https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.

Now try the following:-
* Can you make changes to the JSON file(s)
  * Add another property e.g. *continent* for each country.
  * Modify the JavaScript code so that the continent information is displayed for each country along with capital and population.

* Can you use the SWAPI API that we used last week - https://www.swapi.tech/ to load the data instead of hard-coded JSON files.
  * You will need to pass the id number of a species in the query string e.g.  https://www.swapi.tech/api/species for the first request, and then requests for specific species on the details page e.g. https://www.swapi.tech/api/species/3.

## Closures
This example relies on a programming concept known as a *closure*. This is explained below, but you'll probably need to do some additional reading to fully grasp this important programming concept.

### Closures Introduction: Returning Functions
It's possible for a function to return another function - here's an example.

```javascript

function getWelcomeFnc()
{
  return function()
  {
    console.log("Hello")
  }
}

const welcomeFnc=getWelcomeFnc();
welcomeFnc(); //Hello

```
This probably seems fairly pointless. The really great thing about returning functions is when we use closures.

A closure takes place when a function is able to access a specific instance of a local variable. In the following example that variable is ```name```.

```javascript
function getWelcomeFnc(name)
{
  return function()
  {
    console.log("Hello "+name);
  }
}

const welcomeMatthew = getWelcomeFnc("Matthew");
const welcomeFred = getWelcomeFnc("Fred");
welcomeMatthew(); //Hello Matthew
welcomeFred(); //Hello Fred
```

Each time the ```getWelcomeFnc()``` is called the variable ```name``` is assigned a different value, first 'Matthew' and then 'fred'. Importantly, each time we call ```getWelcomeFnc()``` a new instance of the variable ```name``` is created i.e. we don't replace an existing value. The returned function has access to a specific instance of the variable ```name```. This is 'Matthew' for ```welcome Matthew()``` and 'Fred' for ```welcomeFred()```. This probably all seems fairly pointless. Here's a really common use case for closures.

### Closures - Associating data with dynamically generated elements
In front-end web applications there is often a requirement to dynamically generate HTML elements from an array of data. Here's an example.

```javascript
const students=[
  {name:"Jane",course:"ICT", mark:67},
  {name:"Imran",course:"BACB", mark:42},
  {name:"Zofia",course:"BAIM", mark:72},
  {name:"Bill",course:"BAIM", mark:39}
]

function showMsg()
{
  console.log("You clicked on a student")
}

const studentsFragment = document.createDocumentFragment(); //create a fragment
students.forEach(function(student){
  const newLi=document.createElement("li"); //create a new <li>
  newLi.textContent=student.name; //add the student's name
  newLi.addEventListener("click",showMsg,false); // add an event listener
  studentsFragment.appendChild(newLi); //insert into the <ul> element
})

const stuList=document.querySelector("#stu-list"); //get hold of a <ul> element
stuList.appendChild(studentsFragment);

```

A new list item is added for each of the students. When a list element is clicked the console displays 'You clicked on a student'.

How would you go about associating data with a list item? i.e. the console shouldn't just display a generic message, it should tell us which student was clicked and their mark.

The answer is to use a closure:

```javascript
const students=[
  {name:"Jane",course:"ICT", mark:67},
  {name:"Imran",course:"BACB", mark:42},
  {name:"Zofia",course:"BAIM", mark:72},
  {name:"Bill",course:"BAIM", mark:39}
]

function getShowMsgFnc(student){
  return function()
  {
      console.log(student.name+" has a mark of "+student.mark);
  }
}

const studentsFragment = document.createDocumentFragment(); //create a fragment
students.forEach(function(student){
  const newLi=document.createElement("li"); //create a new <li>
  newLi.textContent=student.name; //add the student's name
  newLi.addEventListener("click",getShowMsgFnc(student),false); // add an event listener
  studentsFragment.appendChild(newLi); //insert into the <ul> element
})

const stuList=document.querySelector("#stu-list"); //get hold of a <ul> element
stuList.appendChild(studentsFragment);
```

Now instead of attaching an event listener function directly we call ```getShowMsgFnc()``` and pass the current student as an argument to this function. The returned function closes around this value so it can access the specific student when the list element is clicked.

## Further Reading / References
* Eloquent JavaScript - Higher Order Functions http://eloquentjavascript.net/05_higher_order.html
* Smashing Magazine - http://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/
* JavaScript Info - https://javascript.info/closure
