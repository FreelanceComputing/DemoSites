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
	if (form.rat_locale.value != locale) { return false; }
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
	var name         = contactForm.alias;
	var number       = contactForm.number;
	var email        = contactForm.email;
	var subject      = contactForm.subject;
	var message      = contactForm.message;
	var nameError    = $("#displayNameError");
	var numberError  = $("#displayNumberError");
	var emailError   = $("#displayEmailError");
	var subjectError = $("#displaySubjectError");
	var messageError = $("#displayMessageError");
	var sendOutcome  = $("#displayOutcome");
	
	// add input event listeners
	addInputEvtListener(name,    nameError);
	addInputEvtListener(number,  numberError);
	addInputEvtListener(email,   emailError);
	addInputEvtListener(subject, subjectError);

	// add message event listener
	message.addEventListener("input", function (event) {
		if (message.value.length > 0 && message.value.length < 5) {
			messageError.css("display", "");
		} else {
			messageError.css("display", "none");
		}
	});

	form.submit(function (event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		// disable the submit button
		//form.submit(false);

		// Validate inputs
		if (!validateTextInput(name, nameError)) {
			return;
		}
		if (!validateTextInput(subject, subjectError)) {
			return;
		}
		if (!validateTextInput(message, messageError)) {
			return;
		}
		if (!validateHiddenInputs(contactForm)) {
			return;
		}

		// Serialize the form data.
		var formData = {};
		formData["Name"]    = name.value;
		formData["Number"]  = number.value;
		formData["Email"]   = email.value;
		formData["Subject"] = subject.value;
		formData["Message"] = message.value;

		// Submit the form.
		$.ajax({
			type: "POST",
			url: "../post.php",
			data: formData
		})
			.done(function (data, status, xhr) {
				//console.log("data:\n", data); //console.log("status:\n", status); //console.log("xhr:\n", xhr);
				resetForm(contactForm);
				sendOutcome.find("h2").text("Thank you.");
				sendOutcome.find("p").text("Your message has been sent successfully.");
				sendOutcome.find("i").click(function (event) {
					sendOutcome.css("display", "none");
				});
				sendOutcome.css("display", "block");
			})
			.fail(function (xhr, status, error) {
				//console.log("xhr response text:\n", xhr.responseText); //console.log("status:\n", status); //console.log("error:\n", error);
				resetForm(contactForm);
				sendOutcome.find("h2").text("ERROR!");
				sendOutcome.find("p").text("Unfortunately your message couldn't be sent due to an internal server error.");
				sendOutcome.find("i").click(function (event) {
					sendOutcome.css("display", "none");
				});
				sendOutcome.css("display", "block");
			});
		sendOutcome.find("h2").text("Processing . . .");
		sendOutcome.find("p").text("Please wait while we send your message");
		sendOutcome.css("display", "block");
	});	
});

$(function () {
	var form = $("#interestForm");
	if (form.length < 1) { return; }

	// grab variables
	var interestForm = form[0];
	var name   = interestForm.alias;
	var number = interestForm.number;
	var email = interestForm.email;
	var nameError = $("#displayNameError");
	var numberError = $("#displayNumberError");
	var emailError = $("#displayEmailError");
	var sendOutcome = $("#displayOutcome");
	var evtName = $("#eventName")[0].textContent;
	var evtTown = $("#eventTown")[0].textContent;
	var evtDate = $("#eventDate")[0].textContent;

	// add input event listeners
	addInputEvtListener(name, nameError);
	addInputEvtListener(number, numberError);
	addInputEvtListener(email, emailError);

	form.submit(function (event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		// Validate input
		if (!validateTextInput(name, nameError)) {
			return;
		}

		// Serialize the form data.
		var formData = {};
		formData["Name"] = name.value;
		formData["Number"] = number.value;
		formData["Email"] = email.value;
		formData["Subject"] = evtName + " - " + evtTown + " - " + $.trim(evtDate.replace(/[\t \n]+/g, ' '));
		formData["Message"] = "Hello! I would like to find out how to purchase a ticket for this event. Thank you.";

		// Submit the form.
		$.ajax({
			type: "POST",
			url: "../../post.php",
			data: formData
		})
			.done(function (data, status, xhr) {
				//console.log("data:\n", data); //console.log("status:\n", status); //console.log("xhr:\n", xhr);
				resetForm(interestForm);
				sendOutcome.find("h2").text("Thank you.");
				sendOutcome.find("p").text("You will be contacted shortly with further information about this event.");
				sendOutcome.find("i").click(function (event) {
					sendOutcome.css("display", "none");
				});
				sendOutcome.css("display", "block");
			})
			.fail(function (xhr, status, error) {
				//console.log("xhr response text:\n", xhr.responseText); //console.log("status:\n", status); //console.log("error:\n", error);
				resetForm(interestForm);
				sendOutcome.find("h2").text("ERROR!");
				sendOutcome.find("p").text("Unfortunately your message couldn't be sent due to an internal server error.");
				sendOutcome.find("i").click(function (event) {
					sendOutcome.css("display", "none");
				});
				sendOutcome.css("display", "block");
			});
		sendOutcome.find("h2").text("Processing . . .");
		sendOutcome.find("p").text("Please wait while we send your message");
		sendOutcome.css("display", "block");
	});
});