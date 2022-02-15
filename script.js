/* Add variables */
var gameStarted, dice, diceDOM, playerTurn, roundScore, globalScore;

init();

/* Principle of the roll dice button */
document.getElementById('btn-roll-dice').addEventListener('click', function() {
    if(gameStarted) {
        /* Roll of the dice */
        dice = Math.floor(Math.random() *6) + 1;

        /* Display the right dice according to the roll */
        diceDOM = document.getElementById('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        /* Each roll is added to the score of the round, if the player rolls the number 1, the round is cancelled */
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + playerTurn).textContent = roundScore; 
        }
        else {
            nextPlayer();
        }
    }
});

/* Principle of the hold button */
document.getElementById('btn-hold').addEventListener('click', function() {
    if (gameStarted) {
        /* Adding the roundScore to globalScore */
        globalScore[playerTurn] += roundScore;
        document.getElementById('score-' + playerTurn).textContent = globalScore[playerTurn];

        /* Winner or not */
        if (globalScore[playerTurn] >= 100) {
            document.getElementById('name-' + playerTurn).textContent = 'Game won';
            document.getElementById('.dice').style.display = 'none';
            document.getElementById('.player-' + playerTurn + '-screen').classList.add('winner');
            document.getElementById('.player-' + playerTurn + '-screen').classList.remove('activeturn');
            gameStarted = false;
        }
        else {
            nextPlayer();
        }
    }
});

/* Functions */

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('.player-0-panel').classList.toggle('activeturn');
    document.getElementById('.player-1-panel').classList.toggle('activeturn');
    document.getElementById('.dice').style.display = 'none';
}

document.getElementById('.btn-new-game').addEventListener('click', init);

function init() {
    /* Initial parameters */
    globalScore = [0, 0];
    playerTurn = 0;
    roundScore = 0;
    gameStarted = true;

    document.getElementById('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.getElementById('.player-0-screen').classList.remove('winner');
    document.getElementById('.player-1-screen').classList.remove('winner');
    document.getElementById('.player-0-screen').classList.remove('activeturn');
    document.getElementById('.player-1-screen').classList.remove('activeturn');
    document.getElementById('.player-0-screen').classList.add('activeturn');
}