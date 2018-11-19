var validFirstname=false;

var firstname = document.getElementById("firstname").value;
      (firstname==="null" || firstname==="" || firstname.length > 20) ; 
errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>" else ; 
   validFirstname = true;
 
 document.getElementById("errorMessages").innerHTML = errorMessages;

(validFirstname);

var validLastname=false;
var validLastname = document.getElementById("lastname").value;

return (validFirstname && validLastname);
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
  // send error message. For example:  errorMessages = "<p>Invalid email</p>";
else
    return true; //Or assign the value to a variable. For example validEmail = true
   var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;

//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//...
  var country = document.getElementById("country").value;
if (country === "USA)
// validate Zipcode according to the rules
else
//Zipcode is OK. For example: validZipcode = true;
