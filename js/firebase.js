console.log("HELLO Im firebase");

// query by id #<what the id is>
const registerButton = document.querySelector("#register");

const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");

const clickRegisterButton = () => {
	// function code goes here
	console.log(" just clicked the register button ");

	let textInsideEmailBox = emailInput.value;
	let textInsidePasswordBox = passwordInput.value;

	if (textInsidePasswordBox.length < 6) {
		// do something
	}

	console.log('Text inside email: ' + textInsideEmailBox);
	console.log(`Text inside password ${textInsidePasswordBox}`);

	firebase.auth().createUserWithEmailAndPassword(textInsideEmailBox, textInsidePasswordBox).then(function(success) {
		// do whats inside here

		console.log("Register was successful");

	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  console.log("Register failed");
	  console.log(errorMessage);

	  // ...
	});

}
registerButton.addEventListener('click', clickRegisterButton);






const clickLoginButton = () => {
	console.log('Clicked the login button');
	let textInsideEmailBox = emailInput.value;
	let textInsidePasswordBox = passwordInput.value;

	firebase.auth().signInWithEmailAndPassword(textInsideEmailBox, textInsidePasswordBox).then(function(success) {
		// login was successful	

		console.log("LOGIN WAS SUCCESSFUL");


	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  console.log("LOGIN FAILED because: " + errorMessage);
	  // ...
	});
}

const loginButton = document.querySelector("#login");
loginButton.addEventListener('click', clickLoginButton);


const uploadInput = document.querySelector("#saveThisInput");

const clickUploadButton = () => {
	console.log('Clicked the upload button');

	let textInsideUploadBox = uploadInput.value;

	firebase.database().ref("saveThis").set(textInsideUploadBox);
}


const uploadButton = document.querySelector("#uploadToDb");
uploadButton.addEventListener('click', clickUploadButton);



var saveThisRef = firebase.database().ref('saveThis');
saveThisRef.on('value', function(snapshot) {
	const text = document.querySelector("#something");
	text.innerText = snapshot.val();
  console.log("UPdated this to: " + snapshot.val());
});


