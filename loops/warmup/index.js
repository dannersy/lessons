const up = document.querySelector('.up');
const down = document.querySelector('.down');
const counter = document.querySelector('input');
// Select all the elements I intend to manipulate
console.log(counter);

let count = 0;
// Counter variable that both functions can change (think scope)

up.addEventListener('click', function(){
  // Listener method on up button waiting for 'click'
  count+= 1
  // Add one to count, same as 'count++' or 'count = count + 1'
  counter.value = count
  // Change value of our input box to new count
  console.log(counter.value);
})

down.addEventListener('click', function(){
  // Listener method on down button waiting for 'click'
  count--
  // Minus one to count, same as 'count -= 1' or 'count = count - 1'
  counter.value = count
  // Change value of our input box to new count
})
