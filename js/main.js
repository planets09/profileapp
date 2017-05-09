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
var person = "";
// console.log(gender);
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
console.log(userEmail);
var userMessage = document.createTextNode(userEmail);
var regExmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,10}$/i
console.log(regExmail.test(userEmail));
//Create if statement in case email address is not submitted correctly.
if(regExmail.test(userEmail) == false){
	alert("Please try again and submit correct email address.");
}
document.getElementById('newUserEmail').appendChild(userMessage);


var userPhone = document.getElementById('userPhone').value;
var regExphone = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/
console.log(regExphone.test(userPhone));
//alternative regex: ^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$
var userPMessage = document.createTextNode(userPhone);
document.getElementById('newUserPhone').appendChild(userPMessage);

  
var userAddress = document.getElementById('userAddress').value;
var userAddText = document.createTextNode(userAddress);
document.getElementById('newUserAddress').appendChild(userAddText);


var userCity = document.getElementById('userCity').value;
var regExcity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i
console.log(regExcity.test(userCity));
var userCText = document.createTextNode(userCity);
document.getElementById('newUserCity').appendChild(userCText);


var userState = document.getElementById('userState').value;
var regExstate = /^(AL|Alabama|alabama|AK|Alaska|alaska|AZ|Arizona|arizona|AR|Arkansas|arkansas|CA|California|california|CO|Colorado|colorado|CT|Connecticut|connecticut|DE|Delaware|delaware|FL|Florida|florida|GA|Georgia|georgia|HI|Hawaii|hawaii|ID|Idaho|idaho|IL|Illinois|illinois|IN|Indiana|indiana|IA|Iowa|iowa|KS|Kansas|kansas|KY|Kentucky|kentucky|LA|Louisiana|louisiana|ME|Maine|maine|MD|Maryland|maryland|MA|Massachusetts|massachusetts|MI|Michigan|michigan|MN|Minnesota|minnesota|MS|Mississippi|mississippi|MO|Missouri|missouri|MT|Montana|montana|NE|Nebraska|nebraska|NV|Nevada|nevada|NH|New Hampshire|new hampshire|NJ|New Jersey|new jersey|NM|New Mexico|new mexico|NY|New York|new york|NC|North Carolina|new carolina|ND|North Dakota|north dakota|OH|Ohio|ohio|OK|Oklahoma|oklahoma|OR|Oregon|oregon|PA|Pennsylvania|pennsylvania|RI|Rhode Island|rhode island|SC|South Carolina|south carolina|SD|South Dakota|south dakota|TN|Tennessee|tennessee|TX|Texas|texas|UT|Utah|utah|VT|Vermont|vermont|VA|Virginia|virginia|WA|Washington|washington|WV|West Virginia|west virginia|WI|Wisconsin|wisconsin|WY|Wyoming|wyoming)$/

//alternative regex: ^[A-Za-z]+{2}$
console.log(regExstate.test(userState));
var userSText = document.createTextNode(userState);
document.getElementById('newUserState').appendChild(userSText);


var userZ = document.getElementById('userZip').value;
var regExZip = /^\\d{5}(-\\d{4})?$/i
console.log(regExZip.test(userZip));
var userZText = document.createTextNode(userZ);
document.getElementById('newUserZip').appendChild(userZText);

var userChoice = document.getElementsByClassName('userMedDropDown');
// console.log(userChoice);
var userMed = "";
for(i = 0; i < userChoice.length; i++){
	// console.log(i);
	// console.log(userChoice[i].selected);
	if(userChoice[i].selected){
		userMed = userChoice[i].value
	}
}
// console.log(userMed);
var medText = document.createTextNode(userMed);
document.getElementById('newUserMedical').appendChild(medText);

//create text variable that obtains the className for birthplace.
var userCountry = document.getElementsByClassName('userBirth');
var country = "";
for(i = 0; i<userCountry.length; i++){
	if(userCountry[i].checked) {
		country = userCountry[i].value
	}
}
//create text variable for textNode and then append it to selected id.
var userCText = document.createTextNode(country);
document.getElementById('newUserBirth').appendChild(userCText);

updatedProfile.style.display = "block";
}

