(function r_changepassword(){
	var password3=document.getElementById("password1");
	var password4=document.getElementById("password2");

	var checkPasswordValidity=function(){
		if (password3.value != password4.value) {
			password4.setCustomValidity('Passwords must match.');
		} else {
			password4.setCustomValidity('');
		}
	};
	password3.onchange=checkPasswordValidity;
	password4.onchange=checkPasswordValidity;
}());