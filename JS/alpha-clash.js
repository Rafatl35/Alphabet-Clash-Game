// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('Player Pressed',playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // --------------------------------------------------------
        // console.log('you have pressed correctly', expectedAlphabet);
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2.increase the current score
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        // ---------------------------------------------------------
        // // step-1: get the current Life number
        // const currentLifeEliment = document.getElementById('current-life');
        // const currentLifeText = currentLifeEliment.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;       
        // // step-3: display the updated life count
        // currentLifeEliment.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet',alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the play ground
    hideElementById('home-screen');
    hideElementById('final-score');  
    showElementById('play-ground');
    // reset score adn life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundById(currentAlphabet);
}