//! Fetch
/*
* Fetch API is the newer way of making API requests via JavaScript and DOES support promises!
* Created because XHR were too difficult and clunky to remember and write.
? Here's what one looks like:
*/

// We call the 'fetch' method and pass in some URL (mandatory!) which returns a promise.
fetch("https://swapi.dev/api/planets/", {
  headers: { Accept: "application/json" },
})
  // What to do if resolved (with a response object) - variable can be named anything, here it's res:
  .then((res) => {
    if (res.status !== 200) {
      console.log("Error!", res.status);
      return;
    }
    res.json().then((data) => {
      console.log(data);
    });
  })
  // Catch a rejected promise
  .catch(function (err) {
    console.log("Fetch Error", err);
  });

//? Let's rewrite our previous XML request call with Fetch:
// The only downside to this is it could take awhile .json(), it's another promise!
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    } else {
      response.json().then((data) => {
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log("Something went wrong with fetch.");
    console.log(err);
  });

/*
! Chaining Fetch Requests
* We can avoid nesting by returning the promise (response.json())
*/
fetch("https://swapi.dev/api/planets/")
  //? Requesting all the planets:
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
  })
  //? Moved this 'out' and made it less nested.
  .then((data) => {
    console.log("Fetched planets");
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log("Fetched first film based off of first planet");
    console.log(data.title);
  })
  .catch((err) => {
    console.log("Something went wrong with fetch!");
    console.log(err);
  });

//? Now, let's refactor this quite a bit:
const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
  return response.json();
};

const printPlanets = (data) => {
  console.log("Loaded 10 more planets...");
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data);
};

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return fetch(url);
};

fetch("https://swapi.dev/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log("Something went wrong with fetch!");
    console.log(err);
  });
