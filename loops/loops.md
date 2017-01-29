# Agenda:

- Warm-up
- Review
- What are loops and why do we need 'em?
- Iterate over objects using count controlled loops
- Iterate using condition-controlled loops
- (if all goes well) Let's get hardcore, advanced loops

# Warmup:

How did Sunday go? Write warmup based on that....


# Loops:

I was curious what would happen if I searched for images of loops on Google, I decided to share what I found:

![Loops!](http://i.giphy.com/ZvLUtG6BZkBi0.gif)

Now that I have your attention.. We will use loops in every program we write. There are many reasons to **iterate** over collections, such as arrays of data, for building your dynamic webpage.

Wat? Consider the following:

Say we used a `GET` request to NYCDA's figurative API that gave us an `array` of `strings`, each being a student name in our class. Then we wanted to list all students on our sweet WDI info page.

Programatically:
- Create a `ul`
- `loop` to **iterate** over our `array`, accessing each `index` which are the student names as `strings`
- During each iteration you would:  
 - Create a new `li`
 - Add text using our `string` at that `index`
 - Append the `li` to our `ul`
 - Move to the next `index` and repeat till the end of our `array`

Now that I've explained a use case for a loop, lets finally take a look at some:

## The `for` loop:

There are many types of `for` loops in JS:
- `for`
- `for...in`
- `for...each`
- `for...of`

Today we will make sure the basic `for` loop is understood. Later we'll talk about `for/each` and a peek at more advanced loops.

A `for` loop simply repeats a procedure a specified number of times.

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

`for (` `let i = 0;` `i < array.length;` `i++` `){logic}`

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

The value of `i` changes with each iteration, so it will evaluate to different things as well.

In a nut shell:
- Declared `i`
- For every iteration (or loop), check if `i` is less than 6
- If so (if `true`), perform code **and** add 1 to `i`
- If not, don't perform code and stop
---

This can also be applied to strings. Consider the following:

Strings can be iterated over too!

```js
var word = 'tacocat';

for(var i = 0; i < word.length; i++){
  console.log(i);
  console.log(word[i]);
}
```

The standard `for` loop you should probably know the best. It is one of the more versatle tools you have.

---



### The `while` loop

While loops are condition-controlled loops. Meaning that there is a `predicate` (just like an `if` statement) that tests if a condition is true.

The block of code will repeat **while** the predicate is true, and **stop** when that predicate becomes untrue.


```js
var x = 6;

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

## What about Objects?
DEPRECATED, BOOOOOM, Delete:

```
for...each`

Iterating over objects can be a bit strange.

Taken straight from MDN:

let sum = 0;
const obj = {num1: 5, num2: 13, num3: 8};

for each (var item in obj) {
  console.log(item);
  sum += item;
}
// 5
// 13
//8
console.log(sum);
// logs "26", which is 5+13+8

Notice how we are using the `values` and not the `keys` (or property).

Technically this still works on arrays, but don't do it, use:
```
## `for...in`

If you need to use the key/property for whatever reason, there is also this.

```js

const obj = {prop1: "1", prop2: "2", prop3: "3"};

for (const prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

// prop1
// 1
// prop2
// 2
// prop3
// 3
```
---
## Exercise:

Stick to the first set and get as many as you can. Hint: these can all be solved with a standard `for` loop.

[Samantha Exercises](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_8)


---

How are we feeling? `.reduce()`, `.map()`, `.filter`()?
