let todos=[
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

let todosLength=todos.length;
// for (var i=0; i<todosLength; i++){
// 	todos.pop();
// }

// let counter1=10;
// while (counter1>0){
// 	console.log(counter1);
// 	counter1--;
// }

// var counter2 = 10;
// do {
// 	console.log(counter2);
// 	counter2--;
// } while(counter2>10);

function logTodos(todos) {
	console.log(todos);
}
todos.forEach(logTodos);
