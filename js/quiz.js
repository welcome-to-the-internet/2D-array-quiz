//2D array with question + answer
var quiz = [["cat or dog", ""], ["dragon or fairy?", ""], ["XaaS?", "fill in the blank (paragraph)"]];
//default function
function print(message) {
  document.write(message);
}
var questionsRight = [];
var questionsWrong = [];

//quiz function which loops through each of the questions, gathers input and compares it to the stored answer value
function quizRun(){
var score = 0;
var wrong = 0;
var question = "";	
var listCorrect = "<ol>";
var listWrong = "<ol>";
for(var i =0; i < quiz.length; i++){
		var question = prompt(quiz[i][0]);
		var playerAnswer = question;
		if(playerAnswer === quiz[i][1]){
			score += 1;
			questionsRight.push(quiz[i][0]);
			listCorrect += "<li>" + quiz[i] + "</li>";
		}
		else{
			wrong +=1;
			questionsWrong.push(quiz[0]);
			listWrong += "<li>" + quiz[i] + "</li>";						
		}
	}

	print("You got " + score + " question(s) right!");
	print(listCorrect);
	print("You got " + wrong + " question(s) wrong! \n");
	print(listWrong);
}

quizRun();	
