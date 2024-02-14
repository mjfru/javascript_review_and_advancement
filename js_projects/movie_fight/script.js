// The searchTerm parameter comes from the event listener, taking that data and passing it in
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "799bee64",
      s: searchTerm,
      //? Below is to go deeper than the search result and get more information about a specific movie (id was obtained from the initial search).
      // i: "tt0848228",
      //? Below is to test getting an initial search result
      // s: 'avengers'
    },
  });
  // Uppercase 'S' because of what the API returns to us, this is nonstandard!
  return response.data.Search;
  // console.log(response.data);
};

const input = document.querySelector("input");

//! Below will be turned into a helper function in the event that we need to debounce something else.
// In one second (after typing stops, fetch the data)
//? This is called debouncing an input!
const onInput = async event => {
  const movies = await fetchData(event.target.value);
  for (let movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${movie.Poster}"/>
      <h1>${movie.Title}</h1>
    `;

    document.querySelector('#target').appendChild(div);
  }
  // console.log(movies);
};

input.addEventListener("input", debounce(onInput, 500));
// Triggered anytime the user inputs something - not ideal as this API has a hard cap and each keystroke causes a request.
// input.addEventListener("input", event => {
// Calling our fetchData function with the value of the user's input:
//   fetchData(event.target.value);
// });
