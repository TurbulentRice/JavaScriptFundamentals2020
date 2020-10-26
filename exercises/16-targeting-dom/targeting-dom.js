/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
 */
const firstLI = document.querySelector('li');
//firstLI.innerHTML = "Target"
const myLI = document.querySelector("#myId")
//myLI.innerHTML = "Butts"
const allLI = document.querySelectorAll('li')
//console.log(allLI)
const bgWarning = document.getElementsByClassName('bg-warning')
console.log(bgWarning)
const nestedElems = document.querySelectorAll(".bg-success > div")
//console.log(nestedElems)