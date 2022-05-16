// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// push left and right arrow keys to change outfit
// up and down keys to pick what part of the body to change
// on key down will call the function check key
document.onkeydown = checkKey
//create a function that executes when the arrow keys are pressed and assigns it to a
//changehorizontal/changeVertical function
//up arrow key code '38'
//down arrow key code '40'
//left button key code '37'
//right button key code '39'
//arguments in paramaters of change vertical/horizontal will move to to position (x) by one
function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}
//index is responsible for head,body,shoes
let indexes = [0, 0, 0]
//main index is responsible for which part of the body we want to look at
let mainIndex = 0
//grabbing elements from html
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')
// imgs contains an array
let imgs = [head, body, shoes]
// strings array to relate to which image we want
let strings = ['head', 'body', 'shoes']

//using a shift argument to shift the index from 0 left and right
//+= increase index by one
//index = index's and passes through the main index to figure out which part of the
//body we are working on
//using main index to pluck out image that i want

function changeHorizontal(shift) {
  let index = indexes[mainIndex]
  let image = imgs[mainIndex]
  let str = strings[mainIndex]

  index += shift
  //creating if statements that go through an array of different styles and go back to the
  //start once gone through
  if (index < 0) index = 5
  if (index > 5) index = 0

  indexes[mainIndex] = index
  //accessing images using src and string to get the items in the array of string and index for which body part.
  image.src = './images/' + str + index + '.png'
}
//function responsible for changing which part of the body we want to change
// creating if statements that go through array of different area of the clown
//main index moves up and down the body
// 0 = head
// 1 = body
// 2 = feet
//+= increase main index up one
function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2
  if (mainIndex > 2) mainIndex = 0
}
