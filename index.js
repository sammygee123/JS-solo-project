let homePlusOne = document.getElementById("home-plus-1")
let homePlustwo = document.getElementById("home-plus-2")
let homePlusthree = document.getElementById("home-plus-3")
let scoreEl = document.getElementById("home-score")

let homeScore = 0

function homePlus1() {
    homeScore += 1
    scoreEl.innerText = homeScore

}
function homePlus2() {
    homeScore += 2
    scoreEl.innerText = homeScore

}
function homePlus3() {
    homeScore += 3
    scoreEl.innerText = homeScore

}

let guestPlusOne = document.getElementById("guest-Plus-1")
let guestPlusTwo = document.getElementById("guest-Plus-1")
let guestPlusThree = document.getElementById("guest-Plus-1")
let guestScoreEl = document.getElementById("guest-score")

let guestScore = 0

function guestPlus1() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}
function guestPlus2() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}
function guestPlus3() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

let reset = document.getElementById("new-game")

function newGame(){
    guestScore = 0
    homeScore = 0
    scoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
   
    
}