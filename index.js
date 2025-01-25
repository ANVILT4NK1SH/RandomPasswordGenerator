
let passwordNumbers = "yes";

function promptLength() {
  let passwordLength = "12";
	do {
		passwordLength = prompt("How many characters in your password?", 12);
		passwordLength = parseInt(passwordLength);
		console.log(passwordLength);
	} while (passwordLength <= 0 || typeof passwordLength != "number");
	return passwordLength;
}

function promptUppercase() {
  let passwordUppercase = "yes";
	do {
		passwordUppercase =	prompt("Would you like to use uppercase?", "yes/no").toLowerCase();
    console.log(passwordUppercase);
    console.log(typeof(passwordUppercase))
	} while (passwordUppercase !== "yes" || passwordUppercase !== "no");
	return passwordUppercase;
}

promptLength();
promptUppercase();
// if (passwordLength > 0 || typeof passwordLength === "number")

// if (passwordUppercase != "yes" || passwordUppercase != "no") {
// 	passwordUppercase = toLowerCase(
// 		prompt("Would you like to use uppercase?", "yes/no")
// 	);
// }

// passwordNumbers = prompt("Would you like to use numbers?", "yes/no");
// if (passwordNumbers != "yes" || passwordNumbers != "no") {
// 	passwordNumbers = prompt("Would you like to use numbers?", "yes/no");
// }
