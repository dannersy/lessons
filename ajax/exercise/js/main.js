(function() { // protect the lemmings!
	/* The goal of this exercise is practice callbacks and
	 * familiarize yourselves with making GET requests.
	 *
	 * Keep in mind these concepts from last class:
	 * 	 - using ajax to make an api call
	 * 	 - using query parameters
	 * 	 - asynchronous javascript (callbacks)
	 *
	 *
	 * We'll start by trying out OMDBI,
	 * an api with information about different movies.
	 */

	// PART 1: MOVIES
	// ------------------------------------------------------------
	// PROBLEM 1:
	// ------------------------------------------------------------
	 /* Please make a call to the godFatherUrl below and log the response.
	 */
	 const godFatherUrl = 'http://www.omdbapi.com/?t=the+godfather&y=&plot=short&r=json'

	$.get(godFatherUrl, (response) => {
		console.log(response);
	})

	// ------------------------------------------------------------
	// PROBLEM 2:
	// ------------------------------------------------------------
	/* Cool. Now following a similar format,
	 * Make another call and get info for the movie 'Titanic'(1997)
	 * and print the names of the actors.
	 * Hint: (Use base url and params)
	 */

	// ------------------------------------------------------------
	// PROBLEM 3:
	// ------------------------------------------------------------
	  /* At this point you'll notice it's annoying to write out the urls.
	   * Let's make a generateOMDBurl function to make life easier
	   *
	   * @param(string) title - function should take the title of the movie
	   * @returns(string) url - function should return a url similar to those above
	   *
	   * Use your function to generate urls for 'the eternal sunshine of the spotless mind' and
	   * 'Hostel' and 'Mrs. Doubtfire'.
	   * Make sure it works for all those movies(don't get tripped up by spaces),
		 * Use the function as the first argument of your AJAX GET
	   * Then console.log out each director in the callback
	   */
	// ------------------------------------------------------------
	// PROBLEM 4:
	// ------------------------------------------------------------
	/*
	 * Use your generateOMDBurl function to fill in these variables.
	 * Then make a call for each movie and log out the titles in alphabetical order.

	 * Once you think you've got it working try refreshing your browser to
	 * make sure you always get the same results.
	 * Remember javascript runs asynchronously, so you may not always get
	 * what you expect.
	 */
	//  const psychoUrl
	//  const theBirdsUrl
	//  const frenzyUrl

	// ------------------------------------------------------------
	// PROBLEM 5:
	// ------------------------------------------------------------
	/*
	 * Console.log which movie came out first: Frenzy, Psycho or The Birds.
	 * Once again remember that these calls are all running simultaneously.
	 * Hint: the property "Year" has a value that is a string "2017", but we don't
	 * want to compare strings, right?
	 */
	 let birdsYear
	 let psychoYear
	 let frenzyYear

	// ------------------------------------------------------------
	// PROBLEM 6:
	// ------------------------------------------------------------
	 /*
	  * Console.log which movie has the highest rating: Psycho, The Birds,or Ratatouille.
	  */
	 let psychoRating
	 let theBirdsRating
	 let ratatouilleRating

	// ------------------------------------------------------------
	// PROBLEM 7:
	// ------------------------------------------------------------
	/* Let's wrap things up by combining our new api skills with our prior knowledge
	 * Make a request to the movie of your choice.
	 * Get the poster from the response. Then use DOM manipulation to create an image element with the movie poster.
	 * and append that image element to the div with the movie id.
	 *
	 * Key Tools:
	 * - append or appendChild
	 * - css and background image
	 */
})();
