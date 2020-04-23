var year = "2020";
var month = "04";
var version = "1.0.0";
var locale = "en_GB";
var resetForm = function (form) {
	form.reset();
	form.rat_year.value = year;
	form.rat_month.value = month;
	form.rat_version.value = version;
	form.rat_locale.value = locale;
};
var validateHiddenInputs = function (form) {
	if (form.rat_year.value != year) { return false; }
	if (form.rat_month.value != month) { return false; }
	if (form.rat_version.value != version) { return false; }
	if (form.rat_locale.value != year) { return false; }
	return true;
};
var validateTextInput = function (field, error) {
	var trimmed = field.value.trim();
	if (trimmed.length < 5) {
		field.value = trimmed;
		error.css("display", "");
		return false;
	}
	return true;
};
var addInputEvtListener = function (field, error) {
	field.addEventListener("input", function (event) {
		if (field.validity.patternMismatch) {
			error.css("display", "");
			/*if (!form.hasClass("invalid")) {
				form.addClass("invalid");
			}*/
		} else {
			error.css("display", "none");
			/*if (form.hasClass("invalid")) {
				form.removeClass("invalid");
			}*/
		}
	});
}

$(document).ready(function () {
	// reset forms on page refresh
	var contactForm = $("#contactForm");
	if (contactForm.length > 0) {
		resetForm(contactForm[0]);
	}
	var interestForm = $("#interestForm");
	if (interestForm.length > 0) {
		resetForm(interestForm[0]);
	}
});

$(function () {
	var form = $("#contactForm");
	if (form.length < 1) { return; }

	// grab variables
	var contactForm  = form[0];
	var nameError    = $("#displayNameError");
	var numberError  = $("#displayNumberError");
	var emailError   = $("#displayEmailError");
	var subjectError = $("#displaySubjectError");
	var messageError = $("#displayMessageError");
	var sendSuccess  = $("#displaySuccess");
	
	// add input event listeners
	addInputEvtListener(contactForm.alias,   nameError);
	addInputEvtListener(contactForm.number,  numberError);
	addInputEvtListener(contactForm.email,   emailError);
	addInputEvtListener(contactForm.subject, subjectError);

	// add message event listener
	contactForm.message.addEventListener("input", function (event) {
		if (contactForm.message.value.length > 0 && contactForm.message.value.length < 5) {
			messageError.css("display", "");
		} else {
			messageError.css("display", "none");
		}
	});

	form.submit(function (event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		// Validate inputs
		if (!validateTextInput(contactForm.alias, nameError)) {
			return;
		}
		if (!validateTextInput(contactForm.subject, subjectError)) {
			return;
		}
		if (!validateTextInput(contactForm.message, messageError)) {
			return;
		}
		if (!validateHiddenInputs(contactForm)) {
			return;
		}

		// Serialize the form data.
		var formData = {};
		formData["Name"] = form[0].alias.value;

		// Submit the form.
		$.ajax({
			type: "POST",
			url: "../post.php",
			data: formData
		})
		//console.log(formData);
	});
	// TODO: The rest of the code will go here...

	
});