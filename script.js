// Add variables //
var gameStarted, dice, diceDOM, playerTurn, roundScore, globalScore;

init();

// Principle of the roll dice button //
document.querySelector('.btn-roll-dice').addEventListener('click', function() {
    if(gameStarted) {
        // Roll of the dice //
        dice = Math.floor(Math.random() * 6) + 1;

        // Display the right dice according to the roll //
        diceDOM = document.getElementById('dice');
        diceDOM.src = 'images/dice-' + dice + '.png';

        // Each roll is added to the score of the round, if the player rolls the number 1, the round is cancelled //
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + playerTurn).textContent = roundScore; 
        }
        else {
            nextPlayer();
        }
    }
});

// Principle of the hold button //
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gameStarted) {
        // Adding the roundScore to globalScore //
        globalScore[playerTurn] += roundScore;
        document.getElementById('score-' + playerTurn).textContent = globalScore[playerTurn];

        // Winner or not //
        if (globalScore[playerTurn] >= 100) {
            document.getElementById('name-' + playerTurn).textContent = 'GAME WIN';
            document.getElementById('player-' + playerTurn + '-screen').classList.add('winner');
            document.getElementById('player-' + playerTurn + '-screen').classList.remove('activeturn');
            gameStarted = false;
        }
        else {
            nextPlayer();
        }
    }
});

// Functions //

function nextPlayer() {
    if (playerTurn == 0) {
        playerTurn = 1
    } 
    else {
        playerTurn = 0
    }
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-screen').classList.toggle('activeturn');
    document.querySelector('.player-1-screen').classList.toggle('activeturn');
}

document.querySelector('.btn-new-game').addEventListener('click', init);

function init() {
    // Initial parameters //
    globalScore = [0, 0];
    playerTurn = 0;
    roundScore = 0;
    gameStarted = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-screen').classList.remove('winner');
    document.querySelector('.player-1-screen').classList.remove('winner');
    document.querySelector('.player-0-screen').classList.remove('activeturn');
    document.querySelector('.player-1-screen').classList.remove('activeturn');
    document.querySelector('.player-0-screen').classList.add('activeturn');
}