const up = document.querySelector('.up');
const down = document.querySelector('.down');
const counter = document.querySelector('input');
console.log(counter);

let count = 0;


up.addEventListener('click', function(){
  count+= 5
  counter.value = count
  console.log(counter.value);
})

down.addEventListener('click', function(){
  count--
  counter.value = count
})
