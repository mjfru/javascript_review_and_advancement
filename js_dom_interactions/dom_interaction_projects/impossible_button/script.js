const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  console.log("Moused over me!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

// Let's use window.innerHeight/Width to be somewhat responsive to our users' screens.

btn.addEventListener('click', function() {
  btn.innerText = "You got me!";
  document.body.style.backgroundColor = "green";
})