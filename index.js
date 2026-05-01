let scoreHome = 0
let scoreAway = 0
let scoreElhome = document.getElementById("scoreHome")
let scoreElaway = document.getElementById("scoreAway")

    scoreElhome.textContent = scoreHome
    scoreElaway.textContent = scoreAway

// Home functions
function HomeincrementOne() {
  scoreHome += 1
  scoreElhome.textContent = scoreHome
}

function HomeincrementTwo() {
  scoreHome += 2
  scoreElhome.textContent = scoreHome
}
function HomeincrementThree() {
  scoreHome += 3
  scoreElhome.textContent = scoreHome
}

// Away functions
function AwayincrementOne() {
  scoreAway += 1
  scoreElaway.textContent = scoreAway
}

function AwayincrementTwo() {
  scoreAway += 2
  scoreElaway.textContent = scoreAway
}
function AwayincrementThree() {
  scoreAway += 3
  scoreElaway.textContent = scoreAway
}