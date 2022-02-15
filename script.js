/* Add variables */
var gameStarted, dice, diceDOM, playerTurn, roundScore, globalScore

/* Principle of the roll dice button */
init();

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

