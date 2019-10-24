// Create an object and an array which we will use in our facebook exercise. 
// let userProfile = {
// }
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// userProfile.username = "Billy";
// userProfile.password = "billyyouplaytoorough";
// 2. Create an array which contains the object you have made above and name the array "database".
// const database=[userProfile];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const database=[
	{
		username:"tom",
		password:"111",
	},	{
		username:"dick",
		password:"222",
	},	{
		username:"harry",
		password:"333",	
	},	{
		username:"ingrid",
		password:"444",
	},	{
		username:"sally",
		password:"555",
	},
];

const newsfeed=[
	{
		username:"tom",
		timeline:"iliketurtles",
	},	{
		username:"dick",
		timeline:"orangeisthenewblack",
	},	{
		username:"harry",
		timeline:"thegoodplace",	
	},	{
		username:"ingrid",
		timeline:"mexicanfood",
	},	{
		username:"sally",
		timeline:"stillstanding",
	},
];

const userName=prompt("Enter your username?");
const userPass=prompt("Enter your password?");

const isUserValid = function(user,pass){
	for (var i=0; i<database.length; i++){
		if(database[i].username===user && database[i].password===pass){
			return true;
		}
	}
	return false;
}

const signIn = function(user,pass) {
	if (isUserValid(user,pass)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, incorrect username or password.");
	}
}

signIn(userName,userPass);
// isUserValid(userName,userPass);