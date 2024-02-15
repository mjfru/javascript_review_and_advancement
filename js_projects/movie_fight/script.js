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

  // Handling errors, such as no movie being found in the DB:
  if (response.data.Error) {
    return [];
  }
  // Uppercase 'S' because of what the API returns to us, this is nonstandard!
  return response.data.Search;
  // console.log(response.data);
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search for a Movie</b></label>
  <input type="text" class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

//! Below will be turned into a helper function in the event that we need to debounce something else.
// In one second (after typing stops, fetch the data)
//? This is called debouncing an input!
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  
  // Making it so any existing data is cleared on a new search; initialized as an empty string
  resultsWrapper.innerHTML = '';

  dropdown.classList.add('is-active');
  for (let movie of movies) {
    const option = document.createElement("a");
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src="${imgSrc}"/>
      ${movie.Title}
    `;

    resultsWrapper.appendChild(option);
  }
  // console.log(movies);
};

input.addEventListener("input", debounce(onInput, 500));
// Triggered anytime the user inputs something - not ideal as this API has a hard cap and each keystroke causes a request.
// input.addEventListener("input", event => {
// Calling our fetchData function with the value of the user's input:
//   fetchData(event.target.value);
// });
