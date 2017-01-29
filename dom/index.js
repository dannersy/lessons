//DOM Stuff
console.log("I'm working");

const allLis = document.querySelectorAll('li');
// console.log(allLis);
// allLis.style.color = "blue"
// We cant do this because you can't change the style of an array



// console.log(allLis.children);
// Nope, not on an array

const firstUl = document.querySelector('ul').childNodes
// This works because we now have an element instead of an array
// console.log(firstUl);

const firstA = document.querySelector('a')
firstA.style.textDecoration = "none"
firstA.style.color = "green"
// console.log(firstA);
// We tried the first li and that's no good because there is an extra node <a> element that needs to be the target of our styles


const quote = document.querySelector('h1');
quote.addEventListener('click', function(){
  console.log("You clicked quote");
})

// We SELECTED our FIRST h1 and attached an eventlistener which runs a callback function with a console.log

quote.addEventListener('mouseenter', function(){
  quote.innerText = "Dont Hover over me"
})

// When Mouse enters, change innerText to "dont hover"

quote.addEventListener('mouseleave', function(){
  quote.innerText = "Quotes"
})
// When Mouse leaves, change innerText to back to the original text

document.addEventListener("keydown", function(event) {
  console.log(event.which);
  if (event.which === 87){
    if (quote.style.color === "blue" || quote.style.color === "black"){
      quote.style.color = "green";
    } else {
      quote.style.color = "blue"
    }
  }
});

// CONDITIONAL!! when I see an event on keycode 87 which happens to be 'e', it will change the color of our h1 depending on it's current value of element.style.color

window.addEventListener('scroll', function(ev) {
  console.log("scrolling!");
});
