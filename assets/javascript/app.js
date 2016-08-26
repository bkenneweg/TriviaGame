var movOne = {
	question: 'In Back To The Future, where did Doc Brown get the plutonium to power the time travelling DeLorean?',
	choice1: "The Russians",
	choice2: "The Iranians",
	choice3: "Biff",
	choice4: "Libyian Terrorist",
	answer: "Libyian Terrorist",
	info: "<img src='assets/images/movQ1.gif'>"	
};

var movTwo = {
	question: 'What were Mouth and Chunks real names in The Goonies?',
	choice1: "Tom and Joe",
	choice2: "Billy and Fred",
	choice3: "Clark and Lawrence",
	choice4: "Carlos and Ted",
	answer: "Clark and Lawrence",
	info: "<img src='assets/images/movQ2.gif'>"
};

var movThree = {
	question: 'In the Breakfast Club, What did Brian try to kill himself with?',
	choice1: "Lawn Dart",
	choice2: "Flare Gun",
	choice3: "Pellet Gun",
	choice4: "Expired Pepto",
	answer: "Flare Gun",
	info: "<img src='assets/images/movQ3.gif'>"

};

var movFour = {
	question: 'What was the make and model of the villian in "The Terminator" 1984?',
	choice1: "Model 2",
	choice2: "T100 Model 200",
	choice3: "T-800 Cyberdyne Systems Model 101",
	choice4: "T-90 IIc",
	answer: "T-800 Cyberdyne Systems Model 101",
	info: "<img src='assets/images/movQ4.gif'>"
};

var movFive = {
	question: "In The Karate Kid what color did Daniel have to paint Miagis house, as part of his training?",
	choice1: "Green",
	choice2: "Yellow",
	choice3: "Computer Blue",
	choice4: "Fuchsia",
	answer: "Green",
	info: "<img src='assets/images/movQ5.gif'>"
};


var musOne = {
	question: 'What band did Prince play with under the alias "Alexander Nevermind"?',
	choice1: "Rolling Stones",
	choice2: "Phil Collins",
	choice3: "Stevie Nicks",
	choice4: "Janet Jackson",
	answer: "Stevie Nicks",
	info: "<img src='assets/images/musQ1.gif'>"
};

var musTwo = {
	question: 'Mike Score from "A Flock of Seagulls" used to be a what?',
	choice1: "Hairdresser",
	choice2: "Chef",
	choice3: "Dentist",
	choice4: "Teacher",
	answer: "Hairdresser",
	info: "<img src='assets/images/musQ2.gif'>"
};

var musThree = {
	question: 'This lead guitarist left Metallica to create Megadeth',
	choice1: "Dave Mustaine",
	choice2: "James Hetfield",
	choice3: "Lars Ulrich",
	choice4: "Brian Slagel",
	answer: "Dave Mustaine",
	info: "<img src='assets/images/musQ3.gif'>"
};

var musFour = {
	question: 'Blue Oyster Cult had this American Idol judge as a bassist',
	choice1: "Simon Cowell",
	choice2: "Randy Jackson",
	choice3: "Steve Tyler",
	choice4: "Keith Urban",
	answer: "Randy Jackson",
	info: "<img src='assets/images/musQ4.gif'>"
};

var musFive = {
	question: 'What did Eddie Money do before he was an entertainer?',
	choice1: "Firefighter",
	choice2: "Janitor",
	choice3: "Cop",
	choice4: "Plummer",
	answer: "Cop",
	info: "<img src='assets/images/musQ5.gif'>"
};

var gameOne = {
	question: 'This game stands out as being the first to be designed by a woman. What is the name of this game?',
	choice1: "Dig-Dug",
	choice2: "Centipede",
	choice3: "Flower",
	choice4: "Worm",
	answer: "Centipede",
	info: "<img src='assets/images/gameQ1.gif'>"
};

var gameTwo = {
	question: "What is the name of the game where you battle tanks, missles and the occasional saucer by looking through a periscope and controlling two joysticks to maneuver and shoot?",
	choice1: "Gorf",
	choice2: "Moon Patrol",
	choice3: "Missle Command",
	choice4: "Battlezone",
	answer: "Battlezone",
	info: "<img src='assets/images/gameQ2.gif'"
};

var gameThree = {
	question: "Which of the following phrases does Evil Otto from the video game Berzerk NOT say?",
	choice1: "Humanoid destroyed",
	choice2: "Get the humanoid!",
	choice3: "Intruder Alert! Intruder Alert!",
	choice4: "Coin detected in pocket.",
	answer: "Humanoid destroyed",
	info: "<img src='assets/images/gameQ3.gif'"
};

var gameFour = {
	question: "What was the sequel to Tron?",
	choice1: "Tron:Grid Bugs",
	choice2: "Tron:MCP Attack",
	choice3: "Discs of Tron",
	choice4: "Tron:Light Cycles",
	answer: "Discs of Tron",
	info: "<img src='assets/images/gameQ4.gif'>"
};

var gameFive = {
	question: "What popular rock group of the lates 70s and early 80s had a video game created about them?",
	choice1: "Asia",
	choice2: "Journey",
	choice3: "Queen",
	choice4: "Pink Floyd",
	answer: "Journey",
	info: "<img src='assets/images/gameQ5.gif'>"
};

var moviesQuestions = [movOne, movTwo, movThree, movFour, movFive];
var musicQuestions = [musOne, musTwo, musThree, musFour, musFive];
var gamesQuestions = [gameOne, gameTwo, gameThree, gameFour, gameFive];
var questions = [];
var num = 0;
var time = 30;
var numbercorrect = 0;
var numberwrong = 0;
var numtimeout = 0;


function nextquestion() {
	time = 30;
	counter = setInterval(increment, 1000);
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>");
	$(".question").html(questions[num].question);
	$(".ans1").html(questions[num].choice1);
	$(".ans2").html(questions[num].choice2);
	$(".ans3").html(questions[num].choice3);
	$(".ans4").html(questions[num].choice4);
	$(".info").empty();
};

function increment() {
	time--
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		stop();
		$(".choice").empty();
	} else if (time < 10) {
		$(".timer").addClass("red");
		setTimeout(function(){$(".timer").removeClass("red")}, 500)
	};
};

function stop() {
	clearInterval(counter);
	num++;
	if (num == questions.length) {
		setTimeout(endgame, 5000);
	} else {
		setTimeout(nextquestion, 5000);
	};
};

function correctanswer() {
	$(".question").html("<p>Correct!</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

function wronganswer() {
	numberwrong++;
	$(".question").html("<p>Nope! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
};

function timeout() {
	numtimeout++;
	$(".question").html("<p>Time's up! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

function endgame() {
	$(".question").html("<h2>Nice you got " + numbercorrect + " correct!</h2>"
		+ "<h2>You got " + numberwrong + " wrong!</h2>" + "<h2> Questions you didn't answer " + numtimeout + "</h2>");
	$(".choice").empty();
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	numbercorrect = 0;
	numberwrong = 0;
	numtimeout=0;
	$("button").show();
};


$('.moviesButton').click(function() {
	questions = moviesQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$('.musicButton').click(function() {
	questions = musicQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$('.gamesButton').click(function() {
	questions = gamesQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$(".choice").click(function() {

	if ($(this).text() == questions[num].answer) {
		numbercorrect++;
		correctanswer();
		stop();
	} else {
		wronganswer();
		stop();
	};

	$(".choice").empty();
});


    