//your JS code here. If required.
let containerDiv = document.getElementById("container");
function showExistingUserButton() {
	if (
		localStorage.getItem("username") &&
		localStorage.getItem("password") &&
		!document.getElementById("existing")
	) {
		let existingBtn = document.createElement("button");
		existingBtn.id = "existing";
		existingBtn.textContent = "Login as existing user";

		existingBtn.addEventListener("click", () => {
			let storedUser = localStorage.getItem("username");
			alert(`Logged in as ${storedUser}`);
		});

		containerDiv.append(existingBtn);
	}
}

// ✅ Run on page load
// showExistingUserButton();
function onSubmit(e){
	e.preventDefault();

	let un = e.target.username.value;
	let pw = e.target.password.value;
	let isChecked = e.target.checkbox.checked;

	// ✅ Always show login alert
	alert(`Logged in as ${un}`);

	if (isChecked) {
		// ✅ Save credentials
		localStorage.setItem("username", un);
		localStorage.setItem("password", pw);

		// ✅ Show existing user button
		showExistingUserButton();
	} else {
		// ✅ Remove credentials
		localStorage.removeItem("username");
		localStorage.removeItem("password");

		// ✅ Remove existing button if present
		let btn = document.getElementById("existing");
		if (btn) btn.remove();
	}

	// ✅ Clear inputs
	e.target.username.value = "";
	e.target.password.value = "";
}