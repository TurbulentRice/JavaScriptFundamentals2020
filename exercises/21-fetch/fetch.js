(function () {

  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

  // Fetch a random dogpic and change the img in HTML
  const changeDogPic = () => {
    fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
      .then(response => response.json())
      .then(json => json.message)
      .then(url => document.querySelector("#image").src = url)
  }
  
  // Add event listener to button
  document.querySelector("#randomBtn").addEventListener("click", changeDogPic)

})();
