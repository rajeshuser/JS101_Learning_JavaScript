let stored_username = "raka101";
let stored_password = "548125";
let input_username = "raka01";
let input_password = "54815";

if (input_username === stored_username) {
	if (input_password === stored_password) {
		console.log("Login successful");
	} else {
		console.log("Wrong password");
	}
} else {
	console.log("Wrong username");
}