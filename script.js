console.log("Hello small World");
let c;
let h;
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
	c = Math.floor(Math.random() * 3);
	
	if (c == 0) { 
		return('rock');
	}
	else if (c == 1) { 
		return('paper');
	}
	else if (c == 2) { 
		return('scissors');
	}
}
function getHumanChoice() {
	h = prompt("rock, paper or scissors?");
	if ( h == 'rock') {
	h = 2; 
	} else if (h == 'paper') {
	h = 0; 
	} else if (h == 'scissors') {
	h = 1; 
	}
}
function playRound() {
	getHumanChoice();
	getComputerChoice();
	if (h == c) {
	console.log('You won!');
	humanScore++;
	console.log(`human ${humanScore} computer ${computerScore}`);
}
	else {
	console.log('You lost...');
	computerScore++;
	console.log(`human ${humanScore} computer ${computerScore}`);
	}
}
function playGame() {
	playRound();
	playRound();
	playRound();
	playRound();
	playRound();
	if (humanScore > computerScore) {
		computerScore = 0;
		humanScore = 0;
		return('game over - the human won!!');
	} else {
		computerScore = 0;
		humanScore = 0;
		return('game over - the computer won!!');
	}
}



























/*//Create two variables for user and computer score
let usrscr = 0;
let pcscr = 0;
// Create variables for rock paper and scissors
const a = "rock";
const b = "paper";
const c = "scissors";

//Create variable called usr for user input
let usr = 3
// Assign return value of function d to variable d
d = d();
// create function to display a if the d equals 0, b if d equals 1 and c if d equals 2
function ans(d) {
if (d == 0) return(a);
else if (d == 1) return(b);
else if (d == 2) return(c);
}
//Ask user to input Rock, Paper or Scissors
let play = prompt("Rock, Paper or Scissors?");
/*If user input is 'Rock' assign the value 2 to usr, 
 * if user input is 'Paper' assign the value 0 to usr,
 * if user input is 'Scissors' assign the value 1 to usr *//*
if (play == 'Rock') {
	usr = 2;
} else if (play == 'Paper') {
	usr = 0;
} else if (play == 'Scissors') {
	usr = 1;
}
//if usr equals d, increment usrscr and return 'you won!', otherwise increment pcscr and return 'you lost...'
console.log(usr, d);

if (usr == d) {
	console.log('You won!');
	usrscr++;
	console.log(`user ${usrscr} computer ${pcscr}`);
}
else {
	console.log('You lost...');
	pcscr++;
	console.log(`user ${usrscr} computer ${pcscr}`);
}

replay = function() {
	play = prompt("Rock, Paper or Scissors?");
}
*/
