//! Promise.all
/*
 * Let's take a look at a previous example and how we might be able to refactor it with a handy tool called Promise.all
 */

//! Parallel Request
//? Let's now write a request to go in parallel.

async function get3pokemon() {
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  //? Instead of writing all of these variables for awaiting different promises...
  //* We can use a promise helper method called Promise.all with all of them put into an array instead:
  const results = Promise.all([promise1, promise2, promise3]);
  console.log(results);
  printPokemon(results);
  // const poke1 = await promise1;
  // const poke2 = await promise2;
  // const poke3 = await promise3;
}

function printPokemon(results) {
  for(let pokemon of results) {
    console.log(pokemon.data.name);
  }
}
get3pokemon();
