//#region initialization
	// using this array,
	var array=["Banana", "Apples", "Oranges", "Blueberries"];
	var consoleArr=[];
	var consoleString='';
//#endregion initialization

//#region 1. Remove the Banana from the array.
	array.shift();
	consoleString='"Banana" removed: ';
	consoleArr=array;
	console.log(consoleString+consoleArr.join(', '));
//#endregion 1. Remove the Banana from the array.

//#region 2. Sort the array in order.
	array.sort();
	consoleString='Array sorted: ';
	consoleArr=array;
	console.log(consoleString+consoleArr.join(', '));
//#endregion 2. Sort the array in order.

//#region 3. Put "Kiwi" at the end of the array.
	array.push('Kiwi');
	consoleString='"Kiwi" appended: ';
	consoleArr=array;
	console.log(consoleString+consoleArr.join(', '));
//#endregion 3. Put "Kiwi" at the end of the array.

//#region 4. Remove "Apples" from the array.
	function appleDropper(fruit) {
		return fruit!=="Apples";
	}
	consoleString='"Apples" found and removed: ';
	consoleArr = array.filter(appleDropper);
	array = consoleArr;
	console.log(consoleString+consoleArr.join(', '));
//#endregion 4. Remove "Apples" from the array.

//#region 5. Sort the array in reverse order. 
	// you should have: ["Kiwi", "Oranges", "Blueberries"]
	consoleString='Array elements reversed: ';
	consoleArr=array.reverse();
	console.log(consoleString+consoleArr.join(', '));
//#endregion 5. Sort the array in reverse order.

//#region "using this array" access "Oranges".
	var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	consoleString='"Oranges accessed: ';
	consoleArr=array2[1][1];
	console.log(consoleString+consoleArr.join(', '));
//#endregion "using this array"
