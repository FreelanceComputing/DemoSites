var sessionObtained;

jQuery(document).ready(function(){
	shippingTimeout();
	populateSummary();
	//jQuery('#skip-billing-btn').click(function(){
		jQuery('#shipping-form')
			//.formValidation('destroy')
			.formValidation({
				message: 'This value is not valid',
				icon: {
					valid: 'glyphicon glyphicon-ok',
					invalid: 'glyphicon glyphicon-remove',
					validating: 'glyphicon glyphicon-refresh'
				},
				fields: {
					'ship[FirstName]': {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 3,
                            max: 30,
                            message: 'Names must have at least 3 characters'
                        },
                        regexp: {
                            regexp: /^[- a-zA-Z]+$/,
                            message: 'Names can only consist of letters, spaces and dashes'
                        }
                    }
                },
				'ship[LastName]': {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 3,
                            max: 30,
                            message: 'Names must have at least 3 characters'
                        },
                        regexp: {
                            regexp: /^[- a-zA-Z]+$/,
                            message: 'Names can only consist of letters, spaces and dashes'
                        }
                    }
                },
				'ship[Email]':{
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: ''
                        },
                        regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                            message: 'The input is not a valid email address'
                        }
                    }
                },
				'ship[Street1]': {
                    validators: {
                        notEmpty: {
                            message: 'Street address is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 3,
                            max: 128,
                            message: 'Addresses must have at least 3 characters'
                        },
                        regexp: {
                            regexp: /^[- a-zA-Z0-9]+$/,
                            message: 'Addresses may only consist of letters, numbers, spaces and dashes'
                        }
                    }
                },
				'ship[Street2]': {
                    validators: {
                        regexp: {
                            regexp: /^[- a-zA-Z0-9]+$/,
                            message: 'Addresses may only consist of letters, numbers, spaces and dashes'
                        }
                    }
                },
				'ship[City]': {
                    validators: {
                        notEmpty: {
                            message: 'The city is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 3,
                            max: 30,
                            message: 'The city must have at least 3 characters'
                        },
                        regexp: {
                            regexp: /^[- a-zA-Z]+$/,
                            message: 'The city can only consist of letters, spaces and dashes'
                        }
                    }
                },
				'ship[Country]': {
						validators: {
							notEmpty: {
								message: 'Please select a country'
							}
						}
					},
					'ship[Tel]': {
						validators: {
							notEmpty: {
								message: 'Phone number can\'t be blank'
							},
							phone: {
								country: 'ship[Country]',
								message: 'Invalid phone number for %s'
							},
							regexp: {
								regexp: /^\+[1-9][0-9]+$/,
								message: 'Full number including country code, starting with +. No spaces or other symbols.'
							}
						}
					},
					'ship[Zip]': {
						validators: {
							notEmpty: {
								message: 'Zip/Postal code can\'t be blank'
							},
							zipCode: {
								country: 'ship[Country]',
								message: 'Invalid zip/postal code for %s'
							},
							regexp: {
								enabled: false,
								regexp: /^[- a-zA-Z0-9]+$/,
								message: 'May only consist of letters, numbers, spaces and dashes.'
							}
						}
					}
				}
			})
			.on('change', '[name="ship[Country]"]', validateCountry)
			.on('success.form.fv', function(e) {
				// Prevent form submission
				e.preventDefault();
				var $form = jQuery(e.target);
				var fv = $form.data('formValidation');
				
				jQuery.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
				if(result == '0')
				{
					window.location = 'https://doualatees.com/shop/checkout/bag';
				}
				else
				{
				    window.location = 'https://doualatees.com/shop/checkout/billing';
				}
                }, 'json');			
			});
		
	//});
});

function shippingTimeout()
{
	return jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			shipping_timeout: "true"
		},
		success:function(response){
			//console.log(response);
			var respArr = response.split(',');
			if(respArr.length > 1)
			{
			    window.location = 'https://doualatees.com/shop/checkout/bag';
			}
		}
	});
}

function populateSummary()
{
	jQuery.when(showSession()).done(function(){
		console.log(sessionObtained);
		populateItems();
	});
}

function showSession()
{
	return jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			show_session: "true"
		},
		success:function(response){
			//console.log(response);
			sessionObtained = jQuery.parseJSON(response);
			verifyLocation();
		}
	});
}

function verifyLocation()
{
	var price = sessionObtained['price'][0];
	var priceArray = price.split(' ');
	var currency = priceArray[1];
	
	switch(currency)
	{
	    case 'EUR':
	        jQuery("#ship_Country option").css("color", "green");
			//jQuery("#ship_Country option[value='CM']").css("color", "red").attr('disabled','disabled');
	        jQuery("#ship_Country option[value='AU']").css("color", "#888").prop('disabled', true);
	        jQuery("#ship_Country option[value='US']").css("color", "#888").prop('disabled', true);
	        jQuery("#ship_Country option[value='GB']").css("color", "#888").prop('disabled', true);
			break;
		case 'GBP':
			jQuery("#ship_Country option").prop('disabled',true);
		    jQuery("#ship_Country option[value='GB']").prop('disabled', false).css("color", "green");
			break;
		case 'USD':
		    jQuery("#ship_Country option").prop('disabled', true);
		    jQuery("#ship_Country option[value='US']").prop('disabled', false).css("color", "green");
			break;
		/*case 'CFA':
			jQuery("#ship_Country option").css("color", "red").attr('disabled','disabled');
			jQuery("#ship_Country option[value='CM']").css("color", "#888").attr('disabled', false);
			break;*/
		case 'AUD':
		    jQuery("#ship_Country option").prop('disabled', true);
		    jQuery("#ship_Country option[value='AU']").prop('disabled', false).css("color", "green");
			break;
	}
}

function populateItems()
{
	var bagItems = sessionObtained['uId'].length;
	var itemPrice;
	for(var i=0; i<bagItems; i++)
	{
		var uniqueId = sessionObtained['uId'][i];
		var imagePath = sessionObtained['img'][i];
		var title = sessionObtained['title'][i];
		var desc = sessionObtained['desc'][i];
		var size = sessionObtained['size'][i];
		var quantity = sessionObtained['qty'][i];
		itemPrice = getItemPrice(sessionObtained['price'][i]);
		var price = itemPrice[0] + itemPrice[1];
		
		var outerRow = jQuery("<div id='"+ uniqueId + "'class='product col-md-12 col clearfix'></div>");
		jQuery('#summaryItems').append(outerRow);
		var imageRow = jQuery("<div class='col col-md-3 image float-left'><img id='summaryImg" + uniqueId + "' src='" + imagePath + "'/></div>");
		var detailsRow = jQuery("<div id='details" + uniqueId + "'class='description col col-md-9 sml-padding no-padding-top float-left'></div>");
		jQuery('#' + uniqueId).append(imageRow);
		jQuery('#' + uniqueId).append(detailsRow);
		var titleRow = jQuery("<p class='account-sub-title'>" + title + "</p>"); //("<p id='summaryTitle'" + uniqueId +"' class='account-sub-title'>" + title + "</p>");
		var descriptionRow = jQuery("<p><p >" + desc + "</p>");
		var sizeRow = jQuery("<p >Size: " + size + "</p>");
		var quantityRow = jQuery("<p >Qty: " + quantity + "</p></p>");
		var priceRow = jQuery("<p><span class='price'>" + price + "</span></p>");
		jQuery('#details' + uniqueId).append(titleRow);
		jQuery('#details' + uniqueId).append(descriptionRow);
		jQuery('#details' + uniqueId).append(sizeRow);
		jQuery('#details' + uniqueId).append(quantityRow);
		jQuery('#details' + uniqueId).append(priceRow);
	}
	var editLink = jQuery("<a class='cart-link link' id='edit_link' onclick='setEditLink()' style='cursor:pointer;position:relative;float:right;padding-top:0px;'>Edit</a>");
	jQuery('#summaryItems').append(editLink);
	var subtotal = "A$" + sessionObtained['defSubTotal'] + " (" + itemPrice[0] + sessionObtained['curSubTotal'] + ")";
	var finalShipping = "A$" + sessionObtained['finalShipping'];
	var grandTotal = "A$" + sessionObtained['total'];
	var row1 = jQuery("<hr/><div class='order-total sml-padding no-padding-top'><p class='no-margin account-sub-title'>Subtotal: <span class='price'>" + subtotal +"</span></p><p class='no-margin account-sub-title'>Shipping: <span class='price'>" + finalShipping + "</span></p></div>");
	var row2 = jQuery("<div class='order-total sml-padding'><p class='no-margin account-sub-title'>Grand Total: <span class='price'>" + grandTotal + "</span></p></div>");
	jQuery('#summaryColumn').append(row1);
	jQuery('#summaryColumn').append(row2);
	var backLinkRow = jQuery("<div class='address-details sml-padding relative'><ul id='summaryAddresses' class='tcheckout-customer-info'></ul><a class='link' id='back_link' href='javascript:history.back()' style='cursor:pointer;'>Back</a></div>");
	jQuery('#summaryColumn').append(backLinkRow);
}

function getItemPrice(price)
{
	var priceArray = price.split(' ');
	var value_ = priceArray[0];
	var currency = priceArray[1];
	switch(currency)
	{
		case 'EUR':
			currency = "&euro;";
			break;
		case 'GBP':
			currency = "&pound;";
			break;
		case 'USD':
			currency = "$";
			break;
		case 'CFA':
			currency = "XAF";
			break;
		default:
			currency = "A$";
	}
	return [currency , value_];
}

function validateCountry(e)
{
	validatePhoneNumbers(jQuery(this));
	validatePostCode(jQuery(this));
}

function validatePhoneNumbers(selectedOption)
{
	var tel= 'ship[Tel]';
	var selOpt = selectedOption.val();
	
	switch(selOpt)
	{
		case "US":
		case "BG":
		case "CZ":
		case "DK":
		case "FR":
		case "DE":
		case "NL":
		case "RO":
		case "RU":
		case "SK":
		case "ES":
		case "GB":
			var re = /^\+[1-9]{10,}$/;
			var msg = 'Full number including country code, starting with +. No spaces or other symbols.';
			jQuery('#shipping-form')
				.formValidation('updateOption', tel, 'regexp', 'regexp', re)
				.formValidation('updateMessage', tel, 'regexp', msg)
				.formValidation('revalidateField', tel);
			break;
		case "AU":
			var re = /^\+(61)[1-9][0-9]{8}$/;
			var msg = 'Invalid phone number for Australia. Prefix with +61. No spaces allowed.';
			jQuery('#shipping-form')
				.formValidation('updateOption', tel, 'regexp', 'regexp', re)
				.formValidation('updateMessage', tel, 'regexp', msg)
				.formValidation('revalidateField', tel);
			break;
		default:
			var re = /^\+[1-9][0-9]+$/;
			var msg = 'Full number including country code, starting with +. No spaces or other symbols.';
			jQuery('#shipping-form')
				.formValidation('updateOption', tel, 'regexp', 'regexp', re)
				.formValidation('updateMessage', tel, 'regexp', msg)
				.formValidation('revalidateField', tel);
			break;
	}
}

function validatePostCode(selectedOption)
{
	var zip = 'ship[Zip]';
	var selOpt = selectedOption.val();
	switch(selOpt)
	{
		case "US":
		case "AT":
		case "BG":
		case "CZ":
		case "DK":
		case "FR":
		case "DE":
		case "IE":
		case "IT":
		case "NL":
		case "PL":
		case "PT":
		case "RO":
		case "RU":
		case "SK":
		case "ES":
		case "SE":
		case "CH":
		case "GB":
			jQuery('#shipping-form')
				.formValidation('enableFieldValidators', zip, false, 'regexp')
				// Revalidate field
				.formValidation('revalidateField', zip);
			break;
		case "AU":
			var re = /^[0-9]{4}$/; 
			var msg = 'Invalid zip/postal code for Australia.';
			jQuery('#shipping-form')
				.formValidation('enableFieldValidators', zip, true, 'regexp')
				.formValidation('updateOption', zip, 'regexp', 'regexp', re)
				.formValidation('updateMessage', zip, 'regexp', msg)
				// Revalidate field
				.formValidation('revalidateField', zip);
			break;
		default:
			var re = /^[- a-zA-Z0-9]+$/;
			var msg = 'May only consist of letters, numbers, spaces and dashes.';
			jQuery('#shipping-form')
				.formValidation('enableFieldValidators', zip, true, 'regexp')
				.formValidation('updateOption', zip, 'regexp', 'regexp', re)
				.formValidation('updateMessage', zip, 'regexp', msg)
				// Revalidate field
				.formValidation('revalidateField', zip);
			break;
	}
}




function setEditLink()
{
	jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			edit_basket: "true"
		},
		success:function(response)
		{
			console.log(response);
			window.location = 'https://doualatees.com/shop/checkout/bag';
		}
	});
}


