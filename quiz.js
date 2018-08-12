//2D array with question + answer
var quiz = [["Does a cat meow or bark?", "meow"], ["Does a dog meow or bark?", "bark"], ["Does a duck meow or bark?", "neither"]];
//default function
function print(message) {
  document.write(message);
}
//quiz function which loops through each of the questions, gathers input and compares it to the stored answer value
function quizRun(){
var score = 0;
var wrong = 0;
var question = "";	
for(var i =0; i < quiz.length; i++){
		var question = prompt(quiz[i][0]);
		var playerAnswer = question;
		if(playerAnswer === quiz[i][1]){
			score += 1;
		}
		else{
			wrong +=1;						
		}
	}

	print("You got " + score + " question(s) right!");
	print("\n");
	print("You got " + wrong + " question(s) wrong!");

}

quizRun();	
