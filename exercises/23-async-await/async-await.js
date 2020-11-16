/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */


const quoteBox = document.querySelector("#quote")
const quoteBtn = document.querySelector("#get-quote")

const getQuote = async () => {
  try {
    let response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    let newQuote = await response.json()
    quoteBox.textContent = newQuote
  } catch (error) {
    console.log(error)
  }
}

quoteBtn.addEventListener('click', getQuote)
