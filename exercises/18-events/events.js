/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */

 // Generic function to alert on click
 const displayAlert = (event) => alert(`You've been alerted by ${event.target.id}!`);

 // Add event listener
 const alertMeBtn = document.querySelector("#alert-me");
 alertMeBtn.addEventListener("click", displayAlert);

/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */
// Generic function to disable a button when clicked
const disableButton = (event) => {
  event.target.textContent = "Loading...";
  event.target.disabled = true;
};

// Add event listener
const chargeMeBtn = document.querySelector("#charge-me");
chargeMeBtn.addEventListener('click', disableButton)

/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */


const viewCommentsBtn = document.querySelector("#view-comments")
viewCommentsBtn.addEventListener("click", (event) => {
  const comments = document.querySelector("#comments-card")
  comments.classList.toggle("hidden")
});
/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */

 const mysteryTextField = document.querySelector("#mystery-text")
 mysteryTextField.addEventListener("input", (event) => {
   const displayMysteryText = document.querySelector("#display-mystery-text")
   displayMysteryText.textContent = mysteryTextField.value;
 })

/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */


document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const searchInput = document.querySelector("#search-input");  
  let message = `No results for "${searchInput.value}" found`

  document.querySelector("#display-search").textContent = message;
});

/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */
const terms = document.querySelector("#terms");
const termsForm = document.querySelector("#termsForm");
termsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const good = document.querySelector("#termsTrue")
  const bad = document.querySelector("#termsFalse")
  terms.checked ? good.classList.remove("hidden") : bad.classList.remove("hidden")
})

/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */

// All student table entries
const tableEntries = document.querySelectorAll("[data-group]")

// Hide group 2, show group 1
const showGroup1 = () => {
  tableEntries.forEach((student) => {
    student.getAttribute("data-group") == 2 ? student.classList.add("hidden") : student.classList.remove("hidden")
  })
}

// Hide group 1, show group 2
const showGroup2 = () => {
  tableEntries.forEach((student) => {
    student.getAttribute("data-group") == 1 ? student.classList.add("hidden") : student.classList.remove("hidden")
  })
};

// Inititally, show only first 10 students
showGroup1()

// When button is pressed, change
const one = document.querySelectorAll("[data-group=pg1]")
one.forEach((btn) => btn.addEventListener("click", showGroup1))
const two = document.querySelectorAll("[data-group=pg2]")
two.forEach((btn) => btn.addEventListener("click", showGroup2))
