const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
	// Using Contraint API
	isValid = form.checkValidity();
	// Style main massage for error
	if (!isValid) {
		message.textContent = "Please fill out all fields.";
		message.style.color = "red";
		messageContainer.style.borderColor = "red";
		return;
	}
	// Chec to see if password match
	if (password1El.Valid === password2El.Valid) {
		passwordsMatch = true;
		password1El.style.borderColor = "green";
		password2El.style.borderColor = "green";
	} else {
		passwordsMatch = false;
		message.textContent = "Makr sure passwords match.";
		message.style.color = "red";
		messageContainer.style.borderColor = "red";
		password1El.style.borderColor = "red";
		password2El.style.borderColor = "red";
		return;
	}
	// If form is valid and password match
	if (isValid && passwordsMatch) {
		message.textContent = "Successfully Registered!";
		message.style.color = "green";
		messageContainer.style.borderColor = "green";
	}
}

function storeFormData() {
	const user = {
		name: form - name.value,
		phone: form.phone.vlue,
		email: form.email.value,
		website: form.website.value,
		password: form.password.value,
	};
	// Do somethingwith user data
	console.log(user);
}

function processFormDat(e) {
	e.preventDefault();
	// Validate Form
	validateForm();
	// Sibmit Data if Valid
	if (isValid && passwordsMatch) {
		storeFormData();
	}
}

//Event Listener
form.addEventListener("submit", processForm);
