
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  
var firstNum = prompt('enter first number of two: ');
var secondNum = prompt('enter second number of two: ');
var twoNum = Number(firstNum)+Number(secondNum);
alert('sum of the two numbers is: '+ twoNum);

// BONUS: Make a program that can subtract, multiply, and also divide!
var firstNum = prompt('enter first number of two: ');
var secondNum = prompt('enter second number of two: ');
var operator = prompt('enter your operation: ');
var twoNum = "not a solution";
console.log(firstNum);
switch(operator) {
	case '+':
		twoNum = Number(firstNum)+Number(secondNum);
	break;
	case '-':
		twoNum = Number(firstNum)-Number(secondNum);
	break;
	case '*':
		twoNum = Number(firstNum)*Number(secondNum);
	break;
	case '/':
		twoNum = Number(firstNum)/Number(secondNum);
	break;
	default: console.log ('fail');
}
alert('result of the two numbers is: '+ twoNum);