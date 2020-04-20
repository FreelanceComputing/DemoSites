$(document).ready(function () {
	// reset forms on page refresh
	var contactForm = $('#contactForm');
	if (contactForm.length > 0) {
		contactForm[0].reset();
	}
	var interestForm = $('#interestForm');
	if (interestForm.length > 0) {
		interestForm[0].reset();
	}
});

$(function () {
	var form = $('#contactForm');
	var nameError = $('#displayNameError');

	form.submit(function (event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		// Clear error fields
		var error = false;
		nameError.css('display', 'none');

		// Validate input
		if (!form[0].alias.validity.valid) {
			nameError.css('display', '');
			error = true;
		}

		if (error == true)
			return;
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