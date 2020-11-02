// Get the elements
const input = document.querySelector("#user-input")
const mainForm = document.querySelector("#main-form")
const newDiv = document.querySelector("#newDiv")

let itemCount = 0;

// Site interactions

// Clear input
const clearInput = () => {
  input.value = ""
}

// if input has certain text as value when clicked, clear it
input.addEventListener("click", () => {
  input.value === "Your text here" && clearInput();
})


mainForm.addEventListener("submit", (event) => {
  // Prevent page refresh
  event.preventDefault();

  // Don't do anyhting if input is blank
  if (!input.value) return;

  // Create new div alert element with input text, append to body
  const newElem = document.createElement("div");
  newElem.textContent = `${++itemCount}) ${input.value}`
  newElem.classList.add("alert", "alert-warning", "p-2");
  newDiv.appendChild(newElem);

  // Clear the input
  clearInput()

})
