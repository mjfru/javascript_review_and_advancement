const autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}"/>
    ${movie.Title} (${movie.Year})
  `;
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
  },
};

// The searchTerm parameter comes from the event listener, taking that data and passing it in
createAutoComplete({
  ...autoCompleteConfig, // Make a copy of everything inside the object and throw them in here
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
});
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
});

let leftMovie;
let rightMovie;

//? Creating a helper function for selecting and displaying movies after choosing from the dropdown
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "799bee64",
      // Accessing the id parameter the API wants (i) and giving it the value of the ID a movie holds in its object
      i: movie.imdbID,
    },
  });
  summaryElement.innerHTML = movieTemplate(response.data);
  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
  // console.log(reponse.data);
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);

    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-warning");
    } else {
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-warning");
    }
    console.log(leftStat, rightStat);
  });
};

//? A helper function to create / populate HTML fields with information from a selected movie
const movieTemplate = (movieDetail) => {
  // Taking the Box Office details and turning them into an integer with $s or commas

  const dollars = parseInt(
    movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));
  // console.log(dollars, metascore, imdbRating, imdbVotes);
  const awards = movieDetail.Awards.split(" ").reduce((prev, word) => {
    const value = parseInt(word);
    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);
  console.log(awards);

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
    <article data-value=${awards} class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards:</p>
    </article>
    <article data-value=${dollars} class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office:</p>
    </article>
    <article data-value=${metascore} class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore:</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating:</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes:</p>
    </article>
  `;
};
