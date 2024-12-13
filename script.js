function toCase(text) {
  // write your code here
	let lower = text.toLowerCase()
	let capital = text.toUpperCase()
	return lower+"-"+capital
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
