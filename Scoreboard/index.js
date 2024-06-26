let healthScore = 0
let manaScore = 0
let healthScoreEl = document.getElementById("score1-el")
let manaScoreEl = document.getElementById("score2-el")



function add1Health() {
    healthScore += 1 
    healthScoreEl.textContent = healthScore
}

function add2Health() {
    healthScore += 2
    healthScoreEl.textContent = healthScore
}

function add3Health() {
    healthScore += 3 
    healthScoreEl.textContent = healthScore
}



function add1Mana() {
    manaScore += 1
    manaScoreEl.textContent = manaScore
}

function add2Mana() {
    manaScore += 2
    manaScoreEl.textContent = manaScore
}

function add3Mana() {
    manaScore += 3
    manaScoreEl.textContent = manaScore
}

function reset() {
    healthScore = 0
    manaScore = 0
    healthScoreEl.textContent = healthScore
    manaScoreEl.textContent = manaScore

      
  
}





