# Agenda:

- Warm-up
- Review warm-up
- What are loops and why do we need 'em?
- Iterate over "objects" using count controlled loop (`for`)
- Iterate using condition-controlled loops (`while`)
- One more.... (`forEach`)
- Problems
- Let's do some together

# Warmup:

Increment/Decrement Buttons!

Resource:
[DOM Lesson](https://github.com/dannersy/lessons/blob/master/dom/README.md)

**ALL** Create two buttons that will increment or decrement a number on our page using "Up" and "Down" buttons:

1. **Create** a new folder in your desktop.
2.  **Create** an index.js file
3. **Create** an index.html file with some text, and use
  `<script>` to link your JS at the bottom of your body
4. **Add** an `<input value="0" />` to your HTML (this is what will increment/decrement)
5. **Create** two buttons that will represent "Up" and "Down"
6. **Get** your buttons with selectors in Javascript and add click event listeners
7. **Write** Javascript in the event callback function that will increment or decrement the input value via your buttons.


# Loops:

I was curious what would happen if I searched for images of loops on Google, I decided to share what I found:

![Loops!](http://i.giphy.com/ZvLUtG6BZkBi0.gif)

Now that I have your attention.. We will use loops in every program we write. There are many reasons to **iterate** over collections, such as arrays of data, for building your dynamic webpage.

Wat? Consider the following:

Say we used a `GET` request to NYCDA's figurative API that gave us an `array` of `strings`, each being a student name in our class. Then we wanted to list all students on our sweet WDI info page.

Programatically/Pseudo code:
- Create a new `ul` (append somewhere in our HTML)
- `loop` to **iterate** over our new `array` of students, accessing each `index` which are the student names as `strings`
- During each iteration you would:  
 - Create a new `li`
 - Add text using our `string` at that `index`
 - Append the `li` to our `ul`
 - Move to the next `index` and repeat till the end of our `array`

Now that I've explained a use case for a loop, lets finally take a look at some:

## The `for` loop:

There are many types of `for` loops in JS:
- `for`
- `forEach`
- `for...in`
- `for...of`

Today we will make sure the basic `for` loop is understood, as well as touch on `forEach` and `while`.

So, a `for` loop simply repeats a procedure a specified number of times.

Let's look at a simple example first:

```js
for ( let i = 0; i < 10; i++ ) {
  console.log(i)
}
// =>
// 1
// 2
// 3
// 4
// all the way to 10
```

Here's an example with Rick and Morty characters:

```js
const rickAndMorty = [
  'Rick',
  'Morty',
  'Jerry',
  'Beth',
  'Summer',
  'Bird Person',
  'Mr. Meeseeks'
];

for (let i = 0; i < rickAndMorty.length; i++) {
  console.log("Hello there,", rickAndMorty[i]);
}
// =>
// Hello there,Rick
// Hello there,Morty
// Hello there,Jerry
// Hello there,Beth
// all the way to Mr. Meeseeks

```

Whoa...awesome. So what just happened?

Let's break down the beginning line of the for loop:

There's really three separate expressions here. Look at it like this.

`for (` `let i = 0;` `i < array.length;` `i++` `){run some JS}`

The first expression:

```js
let i = 0;
//This first one defines variable i, representing our index and our starting point in whatever we are iterating over.
```
```js
i < rickAndMorty.length;
// Continue running our logic within {} as long as this expression is true. So if i is less than the length of our array length, the loop will still run
```
```js
i++
// In other words: i = i + 1, just causing our i variable to increment by 1. Notice how we used "let" to declare i
```
Whew.

What does `rickAndMorty[i]` evalute to?

The value of `i` changes with each iteration, so it will evaluate to different things as we iterate.

In a nut shell:
- Declared `i`
- For every iteration (or loop), check if `i` is less than 6
- If so (if `true`), perform code **and** add 1 to `i`
- If not, don't perform code
---

This can also be applied to strings. Consider the following:

```js
const word = 'tacocat';

for(var i = 0; i < word.length; i++){
  console.log(i);
  console.log(word[i]);
}
//=>
// 0
// 't'
// 1
// 'a'
// 2
// 'c'
// etc
```

The standard `for` loop you should probably know the best. It is one of the more versatile tools you have, but more importantly, it's more "spelled out". `for` is less mysterious about it's magic. There are more ways to iterate than what is listed in this lesson, but understanding this one conceptually will make it easier to understand the magic of more advanced loops.

---



### The `while` loop

While loops are condition-controlled loops. Meaning that there is a `predicate` (just like an `if` statement) that tests if a condition is true.

The block of code will repeat **while** the predicate is true, and **stop** when that predicate becomes untrue.


```js
let x = 6;

while ( x < 10 ) {
  console.log("The number is: " + x)
  x++;
}
```

This will only loop 4 times before it stops. Why does it stop? Because the predicate ( `x < 10` ) became **untrue**.

Things to notice about the `while` loop:
- The variable is outside of the loop
- The syntax of the `while` loop
- The `increment` operator ( `++` )   


---

## `forEach`

`forEach` is a loop that is again only available in Array objects. It also allow you to iterate through elements of an array.

When invoked, it takes a `callback` (we know what that is right?) and runs it once for every array element. The callback can access both index and value of the array elements.

Applied to our top example:

```js
const rickAndMorty = [
  'Rick',
  'Morty',
  'Jerry',
  'Beth',
  'Summer',
  'Bird Person',
  'Mr. Meeseeks'
];

rickAndMorty.forEach(function(value, index) {
  console.log(index);
  console.log("Hello there,", value);
})
// =>
// 0
// Hello there, Rick
// 1
// Hello there, Morty
// 2
// Hello there, Jerry
// 3
// Hello there, Beth
// 4
// all the way to Mr. Meeseeks

```
Bit easier, right? There are differences in behavior, like how you can't [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) out of a `forEach`. Usually, as long as there isn't crazy complex 20 line long JS in your loops, we aren't too concerned about performance, it's more a matter of preference.

---
## Exercise:

Stick to the first set and get as many as you can. Hint: these can all be solved with a standard `for` loop. Feel free to try `forEach`, especially if you've already solved them with a standard `for`.

[Samantha Exercises](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_8)

## Loops easy? Perhaps a little ahead?

Or maybe you want a sneak peak at some tools that will make our lives easier in the future...

Look up the following:
- `.reduce()` [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- `.map()` [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- `.filter()` [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

And then try to apply them to the problems above. Taq will be covering these eventually. By the way, they're super awesome.
