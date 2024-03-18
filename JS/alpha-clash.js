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
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}