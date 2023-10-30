function Validation() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var mobilenumber = document.getElementById("mobilenumber").value;
  var emailid = document.getElementById("emailid").value;

  if (username == "") {
    document.getElementById("user").innerHTML =
      "**please fill the username field";
    return false;
  }
  if (username.length < 3 || username.length > 20) {
    document.getElementById("user").innerHTML =
      "**username must be between 3 & 20";
    return false;
  }
  if (!isNaN(username)) {
    document.getElementById("user").innerHTML = "**Numbers are not allowed";
    return false;
  }
  if (password == "") {
    document.getElementById("pass").innerHTML =
      "**please fill the password field";
    return false;
  }
  if (password.length < 6 || password.length > 6) {
    document.getElementById("pass").innerHTML = "**password must be 6 digits ";
    return false;
  }
  if (confirmpassword == "") {
    document.getElementById("conpass").innerHTML =
      "**please fill the confirm password field";
    return false;
  }
  if (password != confirmpassword) {
    document.getElementById("conpass").innerHTML =
      "**password does not match confirm password";
    return false;
  }
  if (mobilenumber == "") {
    document.getElementById("mobile").innerHTML =
      "**please fill the mobile number field";
    return false;
  }
  if (isNaN(mobilenumber)) {
    document.getElementById("mobile").innerHTML =
      "**characters are not allowed";
    return false;
  }
  if (mobilenumber.length != 10) {
    document.getElementById("mobile").innerHTML =
      "**mobile number must be 10 digits only";
    return false;
  }
  if (emailid == "") {
    document.getElementById("email").innerHTML =
      "**please fill the email id field";
    return false;
  }
  if (emailid.indexOf("@") <= 0) {
    document.getElementById("email").innerHTML = "**@ Invalid Position";
    return false;
  }
  if (
    emailid.charAt(emailid.length - 4) != "." &&
    emailid.charAt(emailid.length - 3) != "."
  ) {
    document.getElementById("email").innerHTML = "**. Invalid Position";
    return false;
  }
}
