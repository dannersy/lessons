## Agenda:

- Warmup: 5 mins
- Review
- What is the DOM?
- What does it mean to us and why is it useful?
- Differences between ELEMENTS and TEXT NODES
- Create, append & remove elements
- Get, traverse & manipulate element
- Getters VS Setters
- AT SOME POINT, when it feels right, tie in Thurs concepts to DOM manipulation.
- Event listeners

## Review/Warmup:


Remember to reference **[Terminal Tutor](https://github.com/mottaquikarim/TerminalTutor)** as needed.

**ALL IN TERMINAL**:

1. **Create** a new folder in your desktop.
2.  **Create** an index.js file
3. **Create** an index.html file with some text, and use
  `<script>` to link your JS at the bottom of your body
4. **Create** a styles folder
5. **Add** empty main.css
6. **Initialize** git in this directory
7. **Create repo** in GitHub
8. **Push** repo to Github

---

# 'DOM' sounds too close to 'dumb':

- First, it's not dumb, it's awesome and you'll be working with it all throughout the class.

- DOM stands for Document Object Model, but to you it means: our visual representation of the HTML in our browser.

- By the powers of Greysku.... Javascript, we can manipulate HTML elements as we see fit.  This is more powerful than we might initially give credit:
    - Remember when webpage links always took you to different pages?
    - Instead of taking us to different pages, reloading it every user action, what happens now?

**BAM!** DOM Manipulation => Dynamic Webpages ...but lets start simple and quickly talk about our "DOM tree" before getting into selecting and manipulating:


```html

<h1>Boring Head Tag Text</h1>
<h4>Things Daniel Doesn't Like</h4>
<ul id="list">
  <li class="list-item">Mac Shortcuts</li>
  <li class="list-item">People who don't Google</li>
  <li class="list-item">Lazy Students</li>
</ul>

```
Our `<tags>` are elements, but anything within those tags that are content are considered text nodes. Here is a tree of our structure.

```
h1: Element
├─ "Boring Head Tag Text": Text Node
h4: Element
├─ "Things Daniel Doesn't Like": Text Node
ul: Element
├─ li: Element
│  └─ "Mac Shortcuts": Text Node
└─ li: Element

Etc!

```

Keep the above in mind. Now lets talk about selectors:

### Selectors

**Rources**:
- [MDN document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN  document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

Here is a line of Javascript...

```js

document.querySelector('h1')

```

This format looks awfully familiar... lets talk about it:
- `document` is an object!
- `querySelector()` is a function (method)!
- `<h1>` is a tag.

You pretty much already know what's going on based on syntax and semantics alone! We are running a function that seems like it's 'selecting' something from our 'document' using a tag as it's argument.


### `document.querySelector()`

Using our HTML example from before:

```js
document.querySelector('h1')
//=> <h1>Boring Head Tag Text</h1>
```

This method literally **queries** the **document** for the **selector** you tell it to find. This method returns the **first** html element that matches the supplied query.

```js
const headline = document.querySelector('h1'); // string argument is an html el
// console.log(headLine)
// =>    <h1>Boring Head Tag Text</h1>
const theUL = document.querySelector('#list'); // string argument is an id
// console.log(theUL)
// =>    <ul id="list">
//       <li class="list-item">Mac Shortcuts</li>
//       <li class="list-item">People who don't Google</li>
//       <li class="list-item">Lazy Students</li>
//     </ul>
const theListItem = document.querySelector('.list-item'); // string argument is a class name
// console.log(theListItem)
// =>   <li class="list-item">Mac Shortcuts</li>

```

### `document.querySelectorAll()`

Rather than returning only the **first** html element that matches the query, we can instead use `document.querySelectorAll()` method returns a list of **all** elements that match the supplied query (or queries - you can supply multiple).

```js
var allTheLis = document.querySelectorAll('li') // get all the li tags on the page
// console.log(allTheLis)
// => [li.list-item, li.list-item, li.list-item]
var allTheLisPs = document.querySelectorAll('li, p') // get all the li & p tags
```

**SO!** If you've done this before, you might say, "Hey aren't there other selectors like .getElementById or .getElementsByClassName?" And I'll reply, "Yes there are, but they suck, so just use querySelector."  If you like them better, that's fine, we'll touch on them briefly in demonstration and go over their caveats.

---

### `.innerText` and `.innerHTML`

- Inner Text: Includes text inside the element.
- Inner HTML: Includes nested elements AND text inside the element.

Use these methods to retrieve (get) information:

```js

document.querySelector('.li').innerText; // GETs the innerText of the FIRST li element
document.querySelector('#list').innerHTML; // GETs the innerHTML of the FIRST element with
// the id of 'list'

```

And to set information:

```js
document.querySelector('.li').innerText = 'hello';
document.querySelector('#list').innerHTML = '<h1>THIS IS AN H1</h1>';
```

Chances are you'll use variables, so it may look like this:

```js
const firstLi = document.querySelector('.li')
firstLi.innerText = "New first li text"
```

---


### `someElement.classList`

Once you have an element (and a node with text if you intend for the styles to affect text), you can access information about the classes the element/node has.  You can also add, remove, or toggle classes.

Example:

```js
document.querySelector('#accessing').classList // retrieve the class list
document.querySelector('#accessing').classList.add('new-class') // add a class to the class list
document.querySelector('#accessing').classList.remove('new-class') // remove a class
```


---


### `someElement.style`

If you've grabbed an element, it has a property called `style`, which is *itself* a collection of properties.  You can change these properties, and the styling of your page will reflect it.

```js
element.style;
element.style.color = "blue";
element.style.float = "right";
element.style.border = "3px dotted green";
element.style.boxShadow = "3px 2px 5px orange";
```

Example:
```js
document.querySelector('h1').style.color = "blue";
```

---
So we can select elements, change them and their nodes, add and change styles. Let's create elements/nodes:
### `.createElement`, `.createTextNode`, `.appendChild`

```js
const newP = document.createElement("p");
const newText = document.createTextNode("Super cool paragraph text");
newP.appendChild(newText);

```

This, unfortunately, is the proper way to add text without a framework. Especially if your user is interacting with the site and text should change as a result of it. Seems tiresome right? Well, we need to just understand vanilla DOM manipulation and we'll get to shortcuts super soon....promise.

---
### Lab:

Copy the following HTML in your own `index.html`:
[Sample HTML](https://github.com/dannersy/lessons/blob/master/dom/exercise/index.html)

Don't forget to create your own `.js` and link it to your HTML. Don't worry about CSS, because you can add it via Javascript as part of the exercise.

Run through the following commands in your own JS, notice how your selector arguments will be different.

Refresh the page to see changes and `console.log()` often!

Get as far as you can, be as creative as you like. If you're ahead, check your neighbor and help out! Nothing reaffirms what you know better than explaining it to someone else!!

### Manipulating DOM elements: getting, creating & deleting
Let's 'get' some elements a few different ways aside from `.querySelector()`:
- `const ulLessonList = document.querySelector('#list');` // get the UL by ID
- `const allLis = document.querySelectorAll('.list-item');` // get **all** the lis by class name
- `const allLiTags = document.querySelectorAll('li');` // get **all** lis by HTML tag
- `const firstListItemByID = document.querySelector('li');` // get the **1st** li
- `const firstLiChild = document.querySelector('#list').childNodes[1];` // returns first child of given ID

Now let's play with this `<li>`
- `firstListItemByID.innerHTML = "Hello, I'm new text."` // change inner html
- `firstListItemByID.style.background = '#ff00aa';` // change bg color

Let's add some elements
- `const newLi = document.createElement("li");` // create element
- `document.body.appendChild(newLi);` // append new el
- `newLi.innerHTML = "Hello, I'm new here."` // add some text
- `newLi.classList.add('new-li');` // add class
- `const newNewLi = document.createElement("li");` // create element 2
- `const ulEl = document.querySelector('#list');` // get the parent node
- `ulEl.insertBefore(newNewLi, firstListItemByID);` // insert the new LI before the 1st LI
- `newNewLi.innerHTML = "Hello, I'm first here."` // add some text

Now let's remove them
- `newLi.classList.remove('new-li');` // remove the class
- `document.body.removeChild(newLi);` // remove the el
- `document.body.removeChild(newNewLi);` // remove the el ==> xxxx!
- `ulEl.removeChild(newNewLi);` // remove the el!

Check these out, if they don't make sense, let's practice our researching skills and let's hit up MDN:

Hierarchical relationships
- `.children` // Gives children elements
- `.childNodes` // Gives children elements and text nodes too
- `.nextSibling`
- `.parentElement`
- `.parentNode`

Examples of hierarchical relationships:
- `const pChildren = document.querySelector('#paragraphs-div').children;` // returns array
- `const firstP = document.querySelector('#paragraphs-div').children[0];`


---

# dare we continue.... Event Listeners

You're all champions. Let's ramp it up a little and intro event listeners.

## What is an event?

- A user **clicks** a button
- A user **hovers** over an element
- A user **presses** a key on the keyboard
- A user **scrolls** the page
- A user **resizes** the window


There are so many events! Check the bottom of this markdown for more.


Not all events are evoked by users. There are other events, such as `DOMContentLoaded`, that have nothing to do with user interaction. This event detects when the HTML in your `document` is done loading. This is useful if you're not sure your JS file is running.

How do events work?

When an event occurs (a user clicked a button), a specified function will run.

The key here is that the function will only run **after the event occurs**. Perhaps you may have guessed it already, but these are **callback** functions. The code that happens after the event is up to you... it can be anything JS can do.

## Neat, so how do we use them?

An `event handler` can be attached to an HTML element.

Wat?

Consider the following:

When a user clicks a button, I would like to turn the background color of the body blue.

```html
<button>Just a button.</button>  
```  

Then in my JS file, I need to first use a selector to an element and then attach an `event listener` to the button.

```js
// first grab the element:
const theButton = document.querySelector('button');

// then attach the event listener:
theButton.addEventListener('click', function() {
  console.log("You've clicked the button!");

  document.body.style.backgroundColor = "blue";
});
```

How do you think we can use our DOM manipulation and events in relation to Thursday's lesson on using APIs and retrieving data?

### Other types of events

### Hover

`mouseenter` & `mouseleave`

```js
var theDiv = document.querySelector('div');

function divHasBeenHovered(event){
  this.style.color = 'red';
}

function divHasBeenUnHovered() {
  this.style.color = 'green';
}

theDiv.addEventListener('mouseenter', divHasBeenHovered);
theDiv.addEventListener('mouseleave', divHasBeenUnHovered);
```

---


### When a key is pressed

[Excellent resource from CSS Tricks](https://css-tricks.com/snippets/javascript/javascript-s/).

`keydown`

This event listener goes on the document.

Check the above resource for key codes.


```js
document.addEventListener("keydown", function(event) {
  console.log(event.which);
});
```


---


### Scroll

This event attaches to the `window`.

Careful. Scroll events fire at a high rate.

```js
window.addEventListener('scroll', function(ev) {
  console.log("scrolling!");
});
```

---


### Toggling

Remember our button that turns our body's background color to blue?

What if when we reload the page we want to press it & turn the body blue, but then press the button again and turn the body green, then press again and turn it blue, then green...  

Take 60 seconds and think about a way you could solve this problem. No coding! Just thinking!

---

### Prevent default

Inside of the callback fxn you have access to the `event` object. It is automatically passed in as a parameter.

```html
<a href="http://www.google.com">Link</a>
```

An `<a>` tag will automatically take me to wherever the `href` attribute specifies. But what if I want to use an `a` tag, but want to specify my own action?

User `event.preventDefault();`.

```js
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('a has been clicked. Now I can do my own action');
});
```

---


### Access to the 'event' and removing a listener from an element


[MDN docks for `.removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).

`.removeEventListener( typeOfListener, nameOfCallbackFxn );`

**Type of listener:** such as 'click'

**Name of the cb fxn:** The cb that runs when 'click' occurs

Example:

When you click the `<a>`, it will log something, then remove the event listener from the element. The second time you click `<a>`, it takes you to google.

```html
<a href="http://www.google.com">Link</a>
```

```js
const theA = document.querySelector('a');

function aHasBeenClicked(event){
  event.preventDefault();
  console.log('a has been clicked.');

  this.removeEventListener('click', aHasBeenClicked );
}

theA.addEventListener('click', aHasBeenClicked);
```
What do we know about `this` and what is it references in this example? `console.log()` it if you're not sure.

When the event handler is invoked, the `this` keyword inside the handler is set to the DOM element on which the handler is attached.


## Exercise:

Using our HTMl and Javascript from before try this:

- Create an event listener for a click on an element of your choosing. Make it change the color and size CSS, as well as the text content of a separate element.
- Create an event listener with a `'keydown'` of your choosing that makes an element disappear.

### Extra DOM Resources:
- [What is the DOM?](https://css-tricks.com/dom/)
- [Most Common DOM Methods](https://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
- [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Keycode Article for 'keydown'](https://css-tricks.com/snippets/javascript/javascript-s/).
