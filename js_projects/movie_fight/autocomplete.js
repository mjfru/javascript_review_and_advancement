const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input type="text" class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;
  
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");
  
  //! Below will be turned into a helper function in the event that we need to debounce something else.
  // In one second (after typing stops, fetch the data)
  //* This is called debouncing an input!
  const onInput = async (event) => {
    const items = await fetchData(event.target.value);
    //* Making sure the results bar doesn't show anymore upon deletion or a search yielding no results:
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
  
    //* Making it so any existing data is cleared on a new search; initialized as an empty string
    resultsWrapper.innerHTML = "";
  
    dropdown.classList.add("is-active");
    for (let item of items) {
      const option = document.createElement("a");
      
      
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);
  
      //* For when the user selects an option from the dropdown, exits the dropdown and uses the value of their selection in the search input.
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });
  
      resultsWrapper.appendChild(option);
    }
  };
  
  input.addEventListener("input", debounce(onInput, 500));
  //* Triggered anytime the user inputs something - not ideal as this API has a hard cap and each keystroke causes a request.
  // input.addEventListener("input", event => {
  // Calling our fetchData function with the value of the user's input:
  //   fetchData(event.target.value);
  // });
  
  //? Making the 'click-off' feature to close the search results:
  document.addEventListener("click", (event) => {
    //? Let's check to see if the element clicked on what inside (or not) of our root variable, which contains the autocomplete feature.
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
}