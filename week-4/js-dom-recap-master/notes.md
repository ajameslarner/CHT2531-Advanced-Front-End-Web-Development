# JavaScript - The Document Object Model and Event Handling
The following is a brief overview of some key topics in JavaScript. They should familiar if you took my Year 1 module.

## Selecting elements
Often we need to get hold of parts of the HTML page. You should be familiar with methods such as *document.getElementById()* and *document.querySelector()*. These days *querySelector()* and *querySelectorAll()* are supported by many browsers and are often favoured for their flexibility.

### querySelector()
Here's an example of selecting a div element:

HTML
```html
<div id="output">Lorem ipsum dolar</div>
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<p>This is a third paragraph</p>
```

JavaScript
```javascript
const outputDiv=document.querySelector("#output");
console.log(outputDiv); //<div id="output">Lorem ipsum dolar</div>
```
### querySelectorAll()
*querySelectorAll()* returns multiple elements as a NodeList (like an array). Here's an example:

HTML
```html
<div id="output">Lorem ipsum dolar</div>
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<p>This is a third paragraph</p>
```
JavaScript
```javascript
const paras = document.querySelectorAll("p");
paras.forEach(function(para){
	console.log(para)
})
```
Output
```
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<p>This is a third paragraph</p>
```

## Adding text to an element
Again there are several ways to do this. Here's one that uses *createTextNode*.

HTML
```html
<div id="content">This is a div.</div>

```

JavaScript
```javascript
const divElem = document.querySelector("#content"); //get hold of a <div>
const textNode = document.createTextNode("This is some new text."); //create the text
divElem.appendChild(textNode); //insert the text into the <div>
```
This would result in the div element changing to:-
```html
<div id="content">This is a div.This some new text.</div>
```

## Creating new elements
To do this we use *document.createElement()*.

### Inserting single elements
Here's an example of inserting a single paragraph element into the page.

HTML
```html
<div id="content">This is a div.</div>
```

JavaScript
```javascript
const divElem = document.querySelector("#content"); //get hold of the <div>
const newParagraph = document.createElement("p"); //create a <p> element
const newText = document.createTextNode("new text"); //create some text
newParagraph.appendChild(newText); //insert the text into the <p>
divElem.appendChild(newParagraph); //insert the <p> into the <div>
```
This would result in the div element changing to:-

```html
<div id="content">This is a div.<p>new text.</p></div>
```

### Inserting multiple elements
When we make changes to the HTML page the browser has to re-draw the page. We call this reflow. Making lots of changes at a time can affect browser performance, slowing a webpage down.

If we want to make lots of changes to a document we should use a document fragment. A document fragment allows us to construct HTML without updating the page. Once we have finished building our fragment of HTML, we can insert it into the page. See the following:

HTML
```html
<div id="countries"></div>
```

JavaScript
```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

const countriesFragment = document.createDocumentFragment(); //create a fragment
countries.forEach(function(country){
    const newParagraph = document.createElement("p"); //create a <p> element
    newParagraph.textContent = `${country.name} has a population of ${country.population}.`; //insert text into the <p>
    countriesFragment.appendChild(newParagraph); //insert the <p> into the fragment
});
const countriesDiv = document.querySelector("#countries"); //get hold of the div from the page
countriesDiv.appendChild(countriesFragment); // we only update the document once!

```
Would result in:-

```html
<div id="countries">
  <p>England has a population of 53000000.</p>
  <p>France has a population of 67000000.</p>
  <p>USA has a population of 325000000.</p>
</div>
```

## Removing Elements
To do this we can use *removeChild()*.

### Removing a single element

HTML

```html
<div id="content">This is a div.</div>
```

JavaScript
```javascript
const divElem = document.getElementById("content");
divElem.removeChild(divElem.firstChild);
```
Would result in
```html
<div id="content"></div>
```

### Removing multiple elements

We can use a *while* loop to remove multiple child elements

HTML

```html
<div id="countries">
  <p>England has a population of 53000000.</p>
  <p>France has a population of 67000000.</p>
  <p>USA has a population of 325000000.</p>
</div>
```

JavaScript
```javascript
const countriesDiv = document.querySelector("#countries");
while(countriesDiv.firstChild){
    countriesDiv.removeChild(countriesDiv.firstChild);
}
```
Would result in:-
```html
<div id="countries">
</div>
```

## Changing the CSS of an element
All DOM elements have a *classList* property that maintains a list of classes currently applied to the element. We can add and remove CSS classes using the classList.

```javascript
const outputDiv=document.querySelector("#output");
outputDiv.classList.add("sold"); //adds the CSS class 'sold'
outputDiv.classList.remove("for-sale"); //removes the CSS class 'for-sale'
```

## Events
Using JavaScript we can listen for events and run code when an event happens. Here's an example. When the user clicks on the button, the function *doIt()* will be executed.

HTML
```html
<input type="button" id="btn">
```

JavaScript
```javascript
function doIt()
{
    console.log("button was clicked");
}
const btn=document.querySelector("#btn"); //get hold of the button
btn.addEventListener("click", doIt, false); //when the button is clicked run the function doIt()
```
We can listen for lots of different events, when the page loads, when a key is pressed, when the mouse moves etc.

## Working with Form Controls
We can 'read' the values users enter into HTML form controls using the value property.

HTML
```html
<input type="text" id="txt-box">
```

JavaScript
```javascript

const txtBox=document.querySelector("#txt-box"); //get hold of the text box
console.log(txtBox.value); //displays whatever the user has entered into txtBox.
```

Form controls have other properties and methods e.g. we can put focus on a form control.

JavaScript
```javascript
const txtBox=document.querySelector("#txt-box"); //get hold of the text box
txtBox.focus(); //apply focus to the txt box
```

## Additional resources
If you are struggling there are lots of resources online. For example, Udacity offer a short course on the DOM (https://www.udacity.com/course/javascript-and-the-dom--ud117), and the Mozilla Developer Network (MDN) is a really good reference site ( https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).
