
function userSubmit(){
//Create text variables to store data provided by user:

var firstName = document.getElementById('userfname').value;
var firstNText = document.createTextNode(firstName);
// console.log(firstNText);
document.getElementById('newUserName').appendChild(firstNText);

var lastName = document.getElementById('userlname').value;
var lastNText = document.createTextNode(" " + lastName);
//console.log(lastNText);
document.getElementById('newUserName').appendChild(lastNText);

//create text variable that obtains the className for gender.
var gender = document.getElementsByClassName('userGender');
//create empty text variable that contains empty string. The
//empty string will contain selected gender (from for-loop method).
var person = "";
// console.log(gender);
//create for-loop, that loops thru the gender array (3 items) and finds
//the ".checked" gender (as selected by user).
for(i = 0; i<gender.length; i++){
	if(gender[i].checked){
//create text variable for gender value.
		person = gender[i].value;
		// console.log(person);
	}
}
//create text variable for textNode and then append it to selected id.
var genText = document.createTextNode(person);
// console.log(genText);
document.getElementById('newUserGender').appendChild(genText);


var userEmail = document.getElementById('userEmail').value;
var regExmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,10}$/i
console.log(userEmail(regExmail));

// var userPhone = document.getElementById('userPhone').value;
// var regExphone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/i

// var userAddress = document.getElementById('userAddress').value;

// var userCity = document.getElementById('userCity').value;
// var regExcity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i

// var userState = document.getElementById('userState').value;
// var regExstate = /^[A-Za-z]+{2,}$/i

// var userZip = document.getElementById('userZip').value;
// var regExZip = /^\\d{5}(-\\d{4})?$/i

// var userChoice = document.getElementById('myChoice').value;

// var userCountry = document.getElementById('myCountry').value

// 	var btn = document.getElementById('sendDataButton').value
// 	var buttonText = document.createTextNode("Thank you! Please wait while candidate profile is compiling" + btn);

}

