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
            document.getElementById('.player-' + playerTurn + '-screen').classList.add('winner');
            document.getElementById('.player-' + playerTurn + '-screen').classList.remove('activeturn');
            gameStarted = false;
        }
        else {
            nextPlayer();
        }
    }
});

