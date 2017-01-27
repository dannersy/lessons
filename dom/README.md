## Agenda:

- Warmup: 5 mins per problem
- Review
- What is the DOM?
- What does it mean to us and why is it useful?
- Differences between ELEMENTS and TEXT NODES
- Create, append & remove elements
- Get, traverse & manipulate elements
- Select elements by id and class
- Changing a node's properties
- Getters VS Setters
- AT SOME POINT, when it feels right, tie in Thurs concepts to DOM manipulation.

## Review/Warmup:

Wait for Taq's class on Thursday to populate....(loops? Yeah... loops)

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

Here is a line of Javascripts...

```js

document.querySelector('h1')

```

This format looks awfully familiar lets talk about it:
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

**SO!** If you've done this before, you might say, "Hey aren't there other selectors like .getElementById or .getElementsByClassName?" And I'll reply, "Yes there are, but they suck, so just use querySelector."  If you like them better, that's fine, we'll touch on them briefly and go over their caveats.

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
### Exercise(separate file/needs completion/perhaps let students walk through):
### Manipulating DOM elements: getting, creating & deleting
Let's 'get' some elements a few different ways aside from `.querySelector()`:
- `const ulLessonList = document.getElementById('lesson-list');` // get the UL by ID
- `const allLis = document.getElementsByClassName('list-item');` // get **all** the lis by class name
- `const allLiTags = document.getElementsByTagName('li');` // get **all** lis by HTML tag
- `const firstListItemByID = document.getElementById('accessing');` // get the **1st** li
- `const firstLiChild = document.getElementById('lesson-list').childNodes[1];` // returns first child of given ID
- `const firstLiByQuery = document.querySelector('#accessing');` // returns the first matching element

Now let's play with this `<li>`
- `firstListItemByID.innerHTML = "Hello, I'm new text."` // change inner html
- `firstListItemByID.style.background = '#ff00aa';` // change bg color

Let's add some elements
- `const newLi = document.createElement("li");` // create element
- `document.body.appendChild(newLi);` // append new el
- `newLi.innerHTML = "Hello, I'm new here."` // add some text
- `newLi.classList.add('new-li');` // add class
- `const newNewLi = document.createElement("li");` // create element 2
- `const ulEl = document.getElementById('lesson-list');` // get the parent node
- `ulEl.insertBefore(newNewLi, firstListItemByID);` // insert the new LI before the 1st LI
- `newNewLi.innerHTML = "Hello, I'm first here."` // add some text

Now let's remove them
- `newLi.classList.remove('new-li');` // remove the class
- `document.body.removeChild(newLi);` // remove the el
- `document.body.removeChild(newNewLi);` // remove the el ==> xxxx!
- `ulEl.removeChild(newNewLi);` // remove the el!

Hierarchical relationships
- `.children`
- `.childNodes` // text nodes too
- `.nextSibling`
- `.parentElement`
- `.parentNode`

Examples of hierarchical relationships:
- `const pChildren = document.querySelector('#paragraphs-div').children;` // returns array
- `const firstP = document.querySelector('#paragraphs-div').children[0];`


---


### Extra DOM Resources:
- [What is the DOM?](https://css-tricks.com/dom/)
- [Most Common DOM Methods](https://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
