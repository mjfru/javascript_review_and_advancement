// The searchTerm parameter comes from the event listener, taking that data and passing it in
createAutoComplete({
  root: document.querySelector(".autocomplete"),
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}"/>
    ${movie.Title} (${movie.Year})
  `;
  },
  onOptionSelect(movie) {
    onMovieSelect(movie);
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
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
  }
});

//? Creating a helper function for selecting and displaying movies after choosing from the dropdown
const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "799bee64",
      // Accessing the id parameter the API wants (i) and giving it the value of the ID a movie holds in its object
      i: movie.imdbID,
    },
  });
  document.querySelector("#summary").innerHTML = movieTemplate(response.data);
  // console.log(reponse.data);
};

//? A helper function to create / populate HTML fields with information from a selected movie
const movieTemplate = (movieDetail) => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary>
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards:</p>
    </article>
    <article class="notification is-primary>
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office:</p>
    </article>
    <article class="notification is-primary>
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore:</p>
    </article>
    <article class="notification is-primary>
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating:</p>
    </article>
    <article class="notification is-primary>
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes:</p>
    </article>
  `;
};
