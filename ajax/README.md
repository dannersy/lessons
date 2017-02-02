## Agenda:

- Warmup: 15 mins
- Review
- All Together Now! (Bridge Thurs to Thurs)
- Arrow Functions
- jQuery - How to get it running
- AJAX
- Short API usage review with query parameters
- Let's use it all.

## Warm Up:

Let's loop through some data and see it on our page. Sunday we learned [DOM Stuff](https://github.com/dannersy/lessons/tree/master/dom) and Tues we learned [loops](https://github.com/dannersy/lessons/tree/master/loops). Let's try and use them together. I'll give you a sample array and walk you through the steps.

```js
const pTStaff = [
  'Taq',
  'Daniel T',
  'Baba',
  'Horatio',
  'Brittani',
  'Daniel Y'
]
```

**PROTIP**: Refresh your page to check errors and `console.log()` often! **DO NOT** write all this code in one go and then test!

- **Create** new HTML and link you JS file at the bottom of your `<body>`.
- **Copy** the sample array into your JS
- **Add** an `h1` with the text "Part Time Staff" and a `ul` with a class of "list"
- **Select** the `ul` using it's class and store it in a variable `staffList`
- **Write** a loop to iterate over `pTStaff`
- **Write** JS between our loop braces (`{}`) to do the following:
  - create a new `li` element and store it in a variable `newLi`
  - set the `li` text to `pTStaff[i]` which evaluates to a `string`
  - append the `li` to our `ul`

**EXTRA**: Got the above completed? Add CSS and some more classes.

## Arrow Functions:

In the spirit of making sure we are current in our Javascript, I want to quickly introduce arrow functions. They look like this:

Straight from MDN:
```js
(param1, param2) => { statements }
//Usual Syntax, if more than one simple expression, use {} to contain your JS statements/logic

(param1) => expression
// Same as (param1, param2) => { return expression }, one expression does not require {}

(singleParam) => { statements }
singleParam => { statements }
// If you are using a single parameter, parentheses are not necessary so these are the Same

() => { statements }
// A function without any parameters requires parentheses, I personally use them no matter what
```

Arrow functions are **always** anonymous.

Why are you cramming more crap into my brain!?!?!:
- General awareness
- We want you to be comfortable with ES6 (why use `const`/`let` if we aren't learning all ES6 stuffs?)
- Common when learning/using React in the future
  - Why? It has behavioral advantages that will help us in React - coming soon in a future lesson near you
- Simpler syntax, making it commonly used as callbacks (Hint: you'll see this in the exercises)

Here are some examples using an arrow function on callbacks you may have seen:

```js
setInterval( () => {
  // do stuff here every second
}, 1000);

document.addEventListener('load', () => {
  // do stuff when document loads
});

const numbers = [1,2,3,4];
numbers.forEach( (value) => console.log(value) )
// Logs each number of our array

```

### **READ THIS**:
It is **NOT** necessary that you use these all the time. Please do not go replacing every single function with these. Though it is encouraged that you try them out so you better understand how they work, we just need you to know what they are for now. (Repeated Hint: you'll see in the exercises).


## Ok, so what is an API, again?

At the end of the day, it's just a set of data provided for public use. Sometimes it's literal data stored in a database that you are given access to, or it could be functions/code that another developer has written that you are allowed to use.

Today we are going to use an API to make our HTTP requests to other APIs a bit easier.

## jQuery/AJAX
###### incoming wall of text...sorry


### What is AJAX?

- AJAX stands for "Asynchronous Javascript and XML"
- Nowadays indicates a set of technologies that allow us to make requests *without* reloading the page
- How does it work? Server-side requests are sent asynchronously on the client without having to send an actual browser request that would reload the page.
- The result is a much faster experience.

---

### What is jQuery?

- An API/library that extends the functionality of Javascript
- Only going to be looking at the AJAX method today
- jQuery offers us so much more! (selectors/effects/events/manipulation/etc....)
- We'll be adding a CDN script to our HTML to use it.

---

### SIGH, fine!...What the hell is a CDN?

- Content Delivery Network
- An easy way for us to use the jQuery library without downloading it
- Caveat: must be connected to interwebs for it to work
  - Conversely, if we had **downloaded** the library we would not need to be online for it to work

---

All that long winded explanation for this:  
#### index.html:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="./index.js"></script>
```
#### index.js:
```js
// AJAX request example
$.get(apiURL, (response) => {
  //do something with our API 'response'
})
```

Yep, essentially two lines of code, but there's a lot going on there. Let's break it down:

- Our CDN script is **BEFORE** our index.js because it needs to run the jQuery JS code before we can use it.
- `$` is just short for `jQuery`, the idea is that everything is done with one global symbol. Our JS file knows what `$` is because we've included our jQuery CDN script in the HTML.
- `.get()` is a method of `$` and short for doing an AJAX `GET` request
- `apiURL` in this example is the endpoint or full query to the API
- `response` as a parameter in our callback will be the data we get back from the API

Alternate syntax to further explain AJAX `GET`:
```js
  $.ajax({ // jQuery object, ajax method
    type: "GET", // if GET is not specified here, it GETs by default, this line is for the readability
    url: "http://www.omdbapi.com/?", // Base URL with a "?" at the end to signify it will take parameters
    data: {
      t: "sharknado" // "t" is a parameter OMDB uses so we can search by movie 'title'
    },
    dataType: "json", // the type of data we want, JSON is always what we want.
    success: function(response) { // On a successful request run this code
      console.log(response);
    }
  });
```

The first syntax is what we'll use for the exercises, I just didn't want heads to explode when you find the extended syntax when Googling.


## Super Ultra Mega Fast API Review

Everyone open up [OMDB](http://www.omdbapi.com/) and lets look at the "Parameters" section.

For those of you reading at home try entering the base url with added parameters (http://www.omdbapi.com/?t=batman) directly into your address bar in Chrome. See what you get!

We get JSON (JavaScript Object Notation)!

“a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.” -json.org

This will be the response data from our AJAX call in our Javascript file, which is easily traversable because of loops, and now our page is more dynamic because we are manipulating the DOM with JS based on that data; just like the warmup! **WHEW**. Full circle from Thursday.


## Exercise

First, let's all download the files from here: [AJAX PSET](https://github.com/dannersy/AJAX_PSET)

Don't bother touching the HTML or CSS, just work directly in `index.js` and go through all the problems. If you've opened the HTML directly already, you can take note that your CDN has been linked for you.

[Solution](https://github.com/dannersy/lessons/tree/master/ajax/exercise) - *It's not actually pushed yet, this link will be updated after class*

#### If you're ahead or need extra practice...

Do the BONUS Part 2 with the Giphy API

OR

Research more jQuery to try and tighten up your code. For example, jQuery provides more concise (and fun) ways to manipulate the DOM
