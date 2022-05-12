// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
let cellsArr = document.getElementsByTagName('TD')
//putting mole into hole
//making sure mole goes into random cells
//creating image element
function putMoleInHole() {
  let randomIndex = Math.floor(Math.random() * 24)
  let randomCell = cellsArr[randomIndex]
  let mole = document.createElement('img')
  //creating pathway for mole image
  //creating on click and making sure it works
  //appending to child elements(cells)
  mole.classList.add('mole')
  mole.src = 'mole.PNG'
  mole.id = 'whack'
  mole.onclick = whackedMole
  randomCell.appendChild(mole)
}
//calling function
putMoleInHole()
//creating function to remove the mole after click and put it into another box
//adding audio to play once clicked
function whackedMole() {
  let mole = document.getElementById('whack')
  mole.remove()
  putMoleInHole()
  let audio = new Audio()
  audio.src = `whack-audio.wav`
  audio.play()
  console.log('whack')
}
