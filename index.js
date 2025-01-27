const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const numbers = "0123456789";
const spCharacters = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";

function generate() {
	let usedCharacters = lowerCase;
	let result = "";
	let passwordLength = promptLength();
	let passwordUppercase = promptUppercase();
	let passwordNumbers = promptUseNumbers();
	let specialCharacters = promptSpecialCharacters();
	let submit = promptSubmit(
		passwordLength,
		passwordUppercase,
		passwordNumbers,
		specialCharacters
	);

	if (submit === true && !Number.isNaN(passwordLength)) {
		// if ( currentVisible === 'hidden') {
		// 	password.style.visibility = 'visible'
		// }

		let i = 0;
		if (
			passwordUppercase === false &&
			passwordNumbers === false &&
			specialCharacters === false
		) {
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === true &&
			passwordNumbers === false &&
			specialCharacters === false
		) {
			usedCharacters = usedCharacters + upperCase;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === false &&
			passwordNumbers === true &&
			specialCharacters === false
		) {
			usedCharacters = usedCharacters + numbers;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === false &&
			passwordNumbers === false &&
			specialCharacters === true
		) {
			usedCharacters = usedCharacters + spCharacters;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === true &&
			passwordNumbers === true &&
			specialCharacters === false
		) {
			usedCharacters = usedCharacters + upperCase + numbers;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === false &&
			passwordNumbers === true &&
			specialCharacters === true
		) {
			usedCharacters = usedCharacters + numbers + spCharacters;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === true &&
			passwordNumbers === false &&
			specialCharacters === true
		) {
			usedCharacters = usedCharacters + upperCase + spCharacters;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}

		if (
			passwordUppercase === true &&
			passwordNumbers === true &&
			specialCharacters === true
		) {
			usedCharacters = usedCharacters + upperCase + numbers + spCharacters;
			while (i < passwordLength) {
				result += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
			console.log(result);
			document.getElementById(
				"message"
			).textContent = `Here's your new password:`;
			document.getElementById("password").textContent = result;
		}
	} else {
		document.getElementById("password").textContent = "Try again"
	}
}

function copyPassword() {
	let password = document.getElementById("password");

	navigator.clipboard.writeText(password.textContent);

	alert(`Password copied: ${password.textContent}`)
}

function promptLength() {
	let passwordLength = "12";
	do {
		passwordLength = prompt("How many characters in your password?", 12);
		passwordLength = parseInt(passwordLength);
		console.log(passwordLength);
	} while (passwordLength <= 0 || !Number.isInteger(passwordLength));
	return passwordLength;
}

function promptUppercase() {
	let passwordUppercase = true;

	passwordUppercase = confirm(
		`Would you like to use uppercase?
Ok for yes, Cancel for no.`
	);

	console.log(passwordUppercase);
	console.log(typeof passwordUppercase);

	return passwordUppercase;
}

function promptUseNumbers() {
	let passwordNumbers = true;

	passwordNumbers = confirm(
		`Would you like to use numbers? 
Ok for yes, Cancel for no.`
	);

	console.log(passwordNumbers);
	console.log(typeof passwordNumbers);

	return passwordNumbers;
}

function promptSpecialCharacters() {
	let specialCharacters = true;

	specialCharacters = confirm(
		`Would you like to use special characters?
Ok for yes, Cancel for no.`
	);

	return specialCharacters;
}

function promptSubmit(
	passwordLength,
	passwordUppercase,
	passwordNumbers,
	specialCharacters
) {
	let submit = true;

	submit = confirm(
		`Length: ${passwordLength}
Uppercase: ${passwordUppercase}
Numbers: ${passwordNumbers}
Special Characters: ${specialCharacters}
Submit?`
	);
	return submit;
}
