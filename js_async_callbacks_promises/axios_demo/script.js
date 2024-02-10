// axios.get("https://swapi.dev/api/planets/").then((res) => {
//   console.log(res.data);
// }).catch((err) => {
//   console.log("In catch callback")
//   console.log(err);
// })

// When we did fetch, we had to manually check the status code, with Axios, it knows that if it's a 404 or anything that's not a 200, it knows not to run and to reject it.

// Let's rewrite our fetch example and refactor that even more with Axios.
// axios.get("https://swapi.dev/api/planets/").then(({ data }) => {
//   console.log(data);
//   for(let planet of data.results) {
//     console.log(planet.name);
//   }
//   return axios.get(data.next);
// })
// .then(({ data }) => {
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
// }).catch((err) => {
//   console.log("Error!", err)
// });

// And further into functions and callback functions...
const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  console.log(url);
  return axios.get(url);
};
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("Error!", err);
  });
