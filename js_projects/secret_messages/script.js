const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  // Prevents a refresh upon submission - We have no backend at the moment so this is essential.
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  // Get the text in the input:
  const input = document.querySelector("#message-input");
  // console.log(input.value);

  // Let's use Base-64 encoding to make our messages 'secret':
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  // To automatically highlight / select the produced link:
  linkInput.select();
});
