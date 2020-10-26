/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

 // 1)
 const firstDiv = document.querySelector(".alert.alert-danger")
 firstDiv.setAttribute("role", "alert")
 //console.log(firstDiv)

// 2)
const linkDiv = document.querySelector(".alert-warning > div a")
linkDiv.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
//console.log(linkDiv.attributes)

// 3)
const victoryDiv = document.querySelector(".alert-success")
victoryDiv.textContent = "I am victorious!"
//console.log(victoryDiv)

// Last problem
(function () {
  const btn = document.querySelector("#last-btn");
  console.log(btn)
  if (btn.matches(".btn-primary")) {
    document.querySelector("#last-div").textContent = "✓ blue"
  }
})

