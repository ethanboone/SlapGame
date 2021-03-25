let chosenCharacter;
let health1;
let health2;
let computer;
let characters = {
    wolverine: { character: 'wolverine', health: 100 },
    batman: { character: 'batman', health: 100 }
}


function chooseCharacter() {
    let defaultCard = document.getElementById('default')
    document.getElementById('game').classList.add('d-none')
    defaultCard.innerHTML = `
    <div class="row justify-content-center">
        <div class="col-6 card d-flex justify-content-center">
            <h3>Choose Character:</h3>
            <button class="btn btn-light" id="wolverine" onclick="selection('wolverine')">Wolverine</button>
            <button class="btn btn-light" id="batman" onclick="selection('batman')">Batman</button>
        </div>
    </div>
    `
}

function selection(choice) {
    if (choice == 'wolverine') {
        chosenCharacter = characters[choice]
        computer = characters['batman']
    } else {
        chosenCharacter = characters[choice]
        computer = characters['wolverine']
    }
    draw()
}


function draw() {
    let template = ''
    let element = document.getElementById('game')
    document.getElementById('game').classList.remove('d-none')
    document.getElementById('default').classList.add('d-none')

    element.innerHTML = `

        <div class="row">
                <div class="col-6 d-flex justify-content-between text-center text-light" id="health">
                <h3>${chosenCharacter.character}</h3>
                </div>
                <div class="col-6 d-flex justify-content-between text-center text-light" id="computer-health">
                <h3>${computer.character}</h3>
                </div>
                <div class="col-6 d-flex justify-content-between text-center text-light">
                <p>Health: ${chosenCharacter.health}</p>
                </div>
                <div class="col-6 d-flex justify-content-between text-center text-light">
                <p>Health: ${computer.health}</p>
                </div>
            </div>
        </div>
                
        
        <div class="row my-5">
        <div class="col-6 d-flex justify-content-center">
        <img src="${chosenCharacter.character == 'wolverine' ? 'wolverine.png' : 'batman_PNG79.png'}" class="image" alt="">
        </div>
        <div class="col-6 d-flex justify-content-center">
        <img src="${computer.character == 'wolverine' ? 'wolverine2.png' : 'batman2.png'}" class="image" alt="">
        </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-12 d-flex justify-content-center">
            <button class="btn btn-light" onclick="${chosenCharacter.character == 'wolverine' ? `attacks('punch')` : `attacksBatman('punch')`}">Punch</button>
            <button class="btn btn-light" onclick="${chosenCharacter.character == 'wolverine' ? `attacks('kick')` : `attacksBatman('kick')`}">Kick</button>
            <button class="btn btn-light" onclick="${chosenCharacter.character == 'wolverine' ? `attacks('claw')` : `attacksBatman('batarang')`}">${chosenCharacter.character == 'wolverine' ? `Claw` : `Batarang`}</button>
            <button class="btn btn-light" id="special" onclick="${chosenCharacter.character == 'wolverine' ? `specialMove('wolverine')` : `specialMove('batman')`}">${chosenCharacter.character == 'wolverine' ? `Health+` : `Armor+`}</button>
            </div>
            </div>
        `
    template = element.innerHTML
    endGame()
}

/*function defaultHealth() {
    let defaultHealth = 100
    let userHealth = document.getElementById('health')
    let computer = document.getElementById('computer-health')
    health = health1
    computerHealth = health2
} **/

function attacks(button) {
    if (button == 'punch') {
        computer.health -= 5
    } else if (button == 'kick') {
        computer.health -= 10
    } else if (button == 'claw') {
        computer.health -= 15
    }
    computerFunction()
    draw()
}

function attacksBatman(button) {
    if (button == 'punch') {
        computer.health -= 5
    } else if (button == 'kick') {
        computer.health -= 10
    } else if (button == 'batarang') {
        computer.health -= 15
    }
    computerFunction()
    draw()
}

function specialMove(character) {
    if (character == 'wolverine') {
        chosenCharacter.health = 100
        alert('Wolverine regenerated his health!')
    } else if (character == 'batman') {
        chosenCharacter.health = 100
        alert('Batman acquired new armor!')
    }
    draw()
    document.getElementById('special').classList.add('d-none')
}

function computerFunction() {
    let random = Math.floor(Math.random() * Math.floor(3))
    if (random == 0) {
        chosenCharacter.health -= 5
        alert('Your opponent used punch!')
    } else if (random == 1) {
        chosenCharacter.health -= 10
        alert(`Your opponent used ${chosenCharacter.character == 'wolverine' ? 'claw' : 'kick'}`)
    } else {
        chosenCharacter.health -= 15
        alert(`Your opponent used ${chosenCharacter.character == 'wolverine' ? 'stab' : 'batarang'}`)
    }
}

function endGame() {
    if (computer.health <= 0) {
        alert('You won!')
        location.reload()
    } else if (chosenCharacter.health <= 0) {
        alert('You lost!')
        location.reload()
    }

}


chooseCharacter()
