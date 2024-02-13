//! Parallel Vs. Sequential Requests
/*
* Below, it's important to note that while it looks like they're being returned instaneously, they are coming back - in sequence -.
One must finished completely before the next one fires off.
*/

//! Sequential Request
// async function get3pokemon() {
//   //? As it stands right now, these requests have no bearing on the others, they are independent of each other but must wait for one to finish before the next one is loaded.
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// get3pokemon();

//! Parallel Request
//? Let's now write a request to go in parallel.

// async function get3pokemon() {
//   const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(promise1); //! You'll see a pending promise here
//   //? Adding these makes a MASSIVE difference.
//   // We send off a request, poke1, for instance, it returns a promise, and then we're saying to await the response.
//   const poke1 = await promise1;
//   const poke2 = await promise2;
//   const poke3 = await promise3;
//   console.log(promise1); //! You'll see the promise has been resolved because we awaited it; we can now use the data.
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }
// get3pokemon();

//? The above examples happen so fast that it's hard to visiualize what's happening
function changebodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// changebodyColor("teal", 1000);

//? Sequential Example:
// async function lightShow() {
  //? These wait for the full second to be up before running the next
//   await changebodyColor("teal", 1000);
//   await changebodyColor("pink", 1000);
//   await changebodyColor("indigo", 1000);
//   await changebodyColor("violet", 1000);
// }

// lightShow();

//? Parallel Example:
async function lightShow() {
  const p1 = await changebodyColor("teal", 1000);
  const p2 = await changebodyColor("pink", 1000);
  const p3 = await changebodyColor("indigo", 1000);
  const p4 = await changebodyColor("violet", 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}

lightShow();