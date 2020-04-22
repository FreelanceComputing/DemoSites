$(document).ready(function () {
	// reset forms on page refresh
	var contactForm = $("#contactForm");
	if (contactForm.length > 0) {
		contactForm[0].reset();
	}
	var interestForm = $("#interestForm");
	if (interestForm.length > 0) {
		interestForm[0].reset();
	}
});

$(function () {
	var form = $("#contactForm");
	if (form.length < 1) { return; }

	// grab variables
	var contactForm = form[0];
	var nameError = $("#displayNameError");
	var numberError = $("#displayNumberError");
	var emailError = $("#displayEmailError");
	var subjectError = $("#displaySubjectError");
	var messageError = $("#displayMessageError");
	var sendSuccess = $("#displaySuccess");

	var addInputEvtListeners = function () {
		contactForm.alias.addEventListener("input", function (event) {
			if (contactForm.alias.validity.patternMismatch) {
				nameError.css("display", "");
				if (!form.hasClass("invalid")) {
					form.addClass("invalid");
				}
			} else {
				nameError.css("display", "none");
				if (form.hasClass("invalid")) {
					form.removeClass("invalid");
				}
			}
		});
		contactForm.number.addEventListener("input", function (event) {
			if (contactForm.number.validity.patternMismatch) {
				numberError.css("display", "");
				if (!form.hasClass("invalid")) {
					form.addClass("invalid");
				}
			} else {
				numberError.css("display", "none");
				if (form.hasClass("invalid")) {
					form.removeClass("invalid");
				}
			}
		});
		contactForm.email.addEventListener("input", function (event) {
			if (contactForm.email.validity.patternMismatch) {
				emailError.css("display", "");
				if (!form.hasClass("invalid")) {
					form.addClass("invalid");
				}
			} else {
				emailError.css("display", "none");
				if (form.hasClass("invalid")) {
					form.removeClass("invalid");
				}
			}
		});
		contactForm.subject.addEventListener("input", function (event) {
			if (contactForm.subject.validity.patternMismatch) {
				subjectError.css("display", "");
				if (!form.hasClass("invalid")) {
					form.addClass("invalid");
				}
			} else {
				subjectError.css("display", "none");
				if (form.hasClass("invalid")) {
					form.removeClass("invalid");
				}
			}
		});
		contactForm.message.addEventListener("input", function (event) {
			if (contactForm.message.value.length > 0 && contactForm.message.value.length < 5) {
				messageError.css("display", "");
				if (!form.hasClass("invalid")) {
					form.addClass("invalid");
				}
			} else {
				messageError.css("display", "none");
				if (form.hasClass("invalid")) {
					form.removeClass("invalid");
				}
			}
		});
	};
	// add event input listeners
	addInputEvtListeners();

	form.submit(function (event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		// Validate (name, subject and message) inputs
		validateTextInputs();

		// implement this
		validateHiddenInputs();

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


	var validateTextInputs = function () {
		var trimmedName = contactForm.alias.value.trim();
		if (trimmedName.length < 5) {
			contactForm.alias.value = trimmedName;
			nameError.css("display", "");
			return;
		}
		var trimmedSubj = contactForm.subject.value.trim();
		if (trimmedSubj.length < 5) {
			contactForm.subject.value = trimmedSubj;
			subjectError.css("display", "");
			return;
		}
		var trimmedMess = contactForm.message.value.trim();
		if (trimmedMess.length < 5) {
			contactForm.message.value = trimmedMess;
			messageError.css("display", "");
			return;
		}
	};

	var validateHiddenInputs = function () { };
});