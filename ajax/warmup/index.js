console.log("hello");

const pTStaff = [
  'Taq',
  'Daniel T',
  'Baba',
  'Horatio',
  'Brittani',
  'Daniel Y'
];

const staffList = document.querySelector('.list');

pTStaff.forEach((value) => {
  const newLi = document.createElement('li')
  newLi.innerHTML = value
  staffList.appendChild(newLi)
})

let movieTitle = "batman&type=series"
const apiURL = "http://www.omdbapi.com/?t=" + movieTitle

$.get(apiURL, function(response) {
  console.log(response)
})

// $.get(differentUrl, function(response) {
//   console.log(response)
// })
