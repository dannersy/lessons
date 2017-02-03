//console.log("hello");
//----------------Warm up-------------
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

//------------Jankey Search Example-----------

const input = document.querySelector('input');
// Grabbing my input and storing it in a function
// const input = $('input'); <- jQuery version
const h3Title = document.querySelector('h3');
// Grabbing my H3 and storing it in a variable
const poster = document.querySelector('img');
// Grabbing my image tag and storing it in a variable
const search = document.querySelector('button');
// Grabbing the search button and storing it in a variable
search.addEventListener('click', (event) => {
  // Add a listener to our button element
  event.preventDefault();
  // This actually isn't necessary (whoops) but if we had a submit button on a <form> it would be necessary
  const movieTitle = input.value;
  // Get the value our input box
  const apiURL = "http://www.omdbapi.com/?t=" + movieTitle;
  // Concat the value of the input box to base url
  $.get(apiURL, (response) => {
    // Using our constructed url and passing it in as an arg to the GET request
    // Using a callback function to do something with the response from our request
    console.log(response);
    // What does the response object look like
    h3Title.innerHTML = response.Title;
    // Change the h3 to the title of our response
    poster.src = response.Poster;
    // Replace the src of our img tag to the the image url from the response
  });
})

// //-----Interested in jQuery? Comment out the top listener and uncomment this one-----
// $('button').click(function(){
// // Notice how instead of storing the button, we can just grab it and use it directly with less code with $()
//   const movieTitle = input.value;
//   const apiURL = "http://www.omdbapi.com/?t=" + movieTitle;
//   $.get(apiURL, function(response) {
//     console.log(response);
//     $('h3').text(response.Title);
//     // .text() to replace .innerText
//     $('img').attr("src", response.Poster);
//     // You can change the src a bunch of different ways, this is off the top of my head
//   });
// })
// // Note: I am not a jQuery pro, so there may even be more concise ways than this
