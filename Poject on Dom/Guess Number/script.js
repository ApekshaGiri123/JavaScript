let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaning=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultparams')


const p=document.createElement('p')


let prevGuess=[]
let numGuesses=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }else if(guess>100 ){
        alert('Please enter valid number less than 100')
        
    }else if(guess<1){
        alert('Please enter valid number more than 1')
        
    
    }else{
        prevGuess.push()
        if(numGuesses===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            cheackGuess(guess)
        }
    }

}

function cheackGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Guessed it right! 👑`)
        
    }else if(guess <randomNumber){
        displayMessage(`Number is TOOO low.`)
        
    }else if(guess>randomNumber){
        displayMessage(`Number is TOOO low.`)

    }

}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuesses++;
    remaning.innerHTML=`${11-numGuesses}`

}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuesses=1
        guessSlot.innerHTML=''
        remaning.innerHTML=`${11-numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('dissabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false

}
