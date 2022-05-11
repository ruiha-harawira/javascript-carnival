// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClick
}

let balloonInflate = 0

function unicornClick(e) {
  let unicorn = e.target

  if (unicorn.id == 'unicorn-1') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('Thanks')
      alert('My horn is complete, Thank you!')
    }
  }
  if (unicorn.id == 'unicorn-2') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('Thanks')
      alert('My horn is complete, Thank you!')
    }
  }
  if (unicorn.id == 'unicorn-3') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('Thanks')
      alert('My horn is complete, Thank you!')
    }
  }
}
