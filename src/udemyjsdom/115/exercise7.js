// Create an object and an array which we will use in our facebook exercise. 
let userProfile = {
}
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
userProfile.username = "Billy";
userProfile.password = "billyyouplaytoorough";
// 2. Create an array which contains the object you have made above and name the array "database".
let database=[userProfile];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed=[
	{
		username:"tom",
		timeline:"iliketurtles",
	},	{
		username:"dick",
		timeline:"orangeisthenewblack",
	},	{
		username:"harry",
		timeline:"thegoodplace",	
	},
];

//from exercise practice:
// let userProfile = {
// }
// userProfile.username = "Billy";
// userProfile.password = "billybilly";
// const database=[userProfile];

// const newsfeed=[
// 	{
// 		username:"tom",
// 		timeline:"iliketurtles",
// 	},	{
// 		username:"dick",
// 		timeline:"orangeisthenewblack",
// 	},	{
// 		username:"harry",
// 		timeline:"thegoodplace",
// 	},
// ];

const userNamePrompt=prompt("Enter your username?");
const passwordPrompt=prompt("Enter your password?");
const signIn = function(user,pass)
	{
		if (user===database[0].username &&
			pass===database[0].password){
			console.log(newsfeed);
		} else {
		alert("Sorry, incorrect username or password.")
	};
};
signIn(userNamePrompt,passwordPrompt);