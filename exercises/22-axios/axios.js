/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */


// Global constants
const apiURL = "https://rickandmortyapi.com/api/character"
const dropdown = document.querySelector("#dropdown")
const mainImage = document.querySelector("#get-schwifty")
let characters;

// Add an option to dropdown
const addOption = (charName) => {
  let newOption = document.createElement("option")
  newOption.textContent = charName;
  dropdown.appendChild(newOption)
}

// Get characters and populate dropdown
axios.get(apiURL)
  .then(response => response.data.results)
  .then(charList => {
    characters = charList;
    charList.forEach(char => addOption(char.name));
  })
  .catch(error => console.log(error))

// Add event listener to dropdown
dropdown.addEventListener('change', () => {
  let selectedChar = dropdown.value;

  if (selectedChar === "Select a character") return;

  selectedChar = characters[characters.findIndex(char => char.name === selectedChar)]
  console.log(selectedChar)
  mainImage.src = selectedChar.image
})



