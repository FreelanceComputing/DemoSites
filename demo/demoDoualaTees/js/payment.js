var sessionObtained;

jQuery(document).ready(function () {
    jQuery.when(initiatePayment()).done(function () { //use .when here
        populateSummary();
        jQuery('#cancelPayment').click(cancelPayment);
    });
});

function initiatePayment() {
    return jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: {
            initiate_payment: "true"
        },
        success: function (response) {
            console.log(response);
            if (response == '0') {
                window.location = 'https://doualatees.com/shop/checkout/bag';
            }
            else {
                implementStripe();//jQuery('#tcheckout-save-btn').click(paymentLink);
            }
        }
    });
}

function implementStripe() {
    Stripe.setPublishableKey('pk_live_eIpbnko7pySN71UpLyA3bNdl');
    jQuery('#payment-form')
	    .formValidation({
	        framework: 'bootstrap',
	        icon: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            name: {
	                selector: '[data-stripe="name"]',
	                validators: {
	                    notEmpty: {
	                        message: 'The full name is required'
	                    }
	                }
	            },
	            ccNumber: {
	                selector: '[data-stripe="number"]',
	                validators: {
	                    notEmpty: {
	                        message: 'The credit card number is required'
	                    },
	                    creditCard: {
	                        message: 'The credit card number is not valid. Make sure there are no spaces'
	                    }
	                }
	            },
	            expMonth: {
	                selector: '[data-stripe="exp-month"]',
	                row: '.col-xs-3',
	                validators: {
	                    notEmpty: {
	                        message: 'The expiry month is required'
	                    },
	                    digits: {
	                        message: 'The expiry month can contain digits only'
	                    },
	                    callback: {
	                        message: 'Expired',
	                        callback: function (value, validator) {
	                            value = parseInt(value, 10);
	                            var year = validator.getFieldElements('expYear').val(),
                                    currentMonth = new Date().getMonth() + 1,
                                    currentYear = new Date().getFullYear();
	                            if (value < 0 || value > 12) {
	                                return false;
	                            }
	                            if (year == '') {
	                                return true;
	                            }
	                            year = parseInt(year, 10);
	                            if (year > currentYear || (year == currentYear && value >= currentMonth)) {
	                                validator.updateStatus('expYear', 'VALID');
	                                return true;
	                            } else {
	                                return false;
	                            }
	                        }
	                    }
	                }
	            },
	            expYear: {
	                selector: '[data-stripe="exp-year"]',
	                row: '.col-xs-3',
	                validators: {
	                    notEmpty: {
	                        message: 'The expiry year is required'
	                    },
	                    digits: {
	                        message: 'The expiry year can contain digits only'
	                    },
	                    callback: {
	                        message: 'Expired',
	                        callback: function (value, validator) {
	                            value = parseInt(value, 10);
	                            var month = validator.getFieldElements('expMonth').val(),
                                    currentMonth = new Date().getMonth() + 1,
                                    currentYear = new Date().getFullYear();
	                            if (value < currentYear || value > currentYear + 100) {
	                                return false;
	                            }
	                            if (month == '') {
	                                return false;
	                            }
	                            month = parseInt(month, 10);
	                            if (value > currentYear || (value == currentYear && month >= currentMonth)) {
	                                validator.updateStatus('expMonth', 'VALID');
	                                return true;
	                            } else {
	                                return false;
	                            }
	                        }
	                    }
	                }
	            },
	            cvvNumber: {
	                selector: '[data-stripe="cvc"]',
	                validators: {
	                    notEmpty: {
	                        message: 'The CVV number is required'
	                    },
	                    cvv: {
	                        message: 'The value is not a valid CVV',
	                        creditCardField: 'ccNumber'
	                    }
	                }
	            }
	        }
	    })
		.on('success.form.fv', function (e) {
		    e.preventDefault();
		    jQuery('#cancelPayment').prop("disabled", true);
		    jQuery('#tcheckout-please-wait').show();
		    var $form = jQuery(e.target);

		    // Reset the token first
		    $form.find('[name="stripeSource"]').val('');
		    $form = addOptionalFields($form);

		    Stripe.card.createToken($form, 1, onToken);
		});
}

function onToken(status, result) {
    console.log(result);
    if (result.error) {
        jQuery('#cancelPayment').prop("disabled", false);
        bootbox.alert(result.error.message);
    }
    else {
        var ownerInfo = {
            name: result.card.name,
            address: {
                line1: result.card.address_line1,
                city: result.card.address_city,
                postal_code: result.card.address_zip,
                country: result.card.address_country,
            },
            email: sessionObtained['bil']['Email']
        };
        // Create card source
        Stripe.source.create({
            type: 'card',
            token: result.id,
            owner: ownerInfo,
        }, onCardSource);

        //displayProcessing();
    }
}

function onCardSource(status, result) {
    console.log(result);
    if (result.error) {
        jQuery('#cancelPayment').prop("disabled", false);
        bootbox.alert(result.error.message);
        return;
    }

    if (result.card.three_d_secure == "not_supported") {
        regularPayment(result);
    }
    else {
        threeDSPayment(result.id);
    }
}

function regularPayment(source) {
    var $form = jQuery('#payment-form');
    $form.find('[name="stripeSource"]').val(source.id);
    var token1 = jQuery("<input type='hidden' name='token1'/>").attr("value", source.client_secret);
    $form.prepend(token1);
    jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: $form.serialize(),
        success: function (data) {
            var jsonData = jQuery.parseJSON(data);
            console.log(jsonData);
            jQuery('#cancelPayment').prop("disabled", false);
            bootbox.alert(jsonData.message, function () {
                if (jsonData.message.indexOf("Unfortunately") == 0) {
                    // Reset the form
                    $form.formValidation('resetForm', true);
                    cancelPayment();
                }
                else {
                    // Reset the form
                    $form.formValidation('resetForm', true);
                    window.location = 'https://doualatees.com';
                }
            });

        }
    });
    //bootbox.alert('Payment was successful.');
}

function threeDSPayment(sourceId) {
    Stripe.source.create({
        type: 'three_d_secure',
        amount: sessionObtained['total'] * 100,
        currency: "aud",
        three_d_secure: { card: sourceId },
        redirect: { return_url: "https://doualatees.com/shop/checkout/payment/processing/" }
    }, on3DSSource);
}

function on3DSSource(status, result) {
    console.log(result);

    if (result.error) {
        jQuery('#cancelPayment').prop("disabled", false);
        bootbox.alert(result.error.message);
        return;
    }

    Stripe.source.poll(result.id, result.client_secret, onChargeable);

    enterPopState(result.redirect.url);
}

function onChargeable(status, source) {
    console.log(source);
    if (source.status == 'chargeable') {
        exitPopState();
        regularPayment(source);
    }
    else if (source.status == 'failed') {
        exitPopState();
        bootbox.alert('3D Secure authentication failed.', function () { cancelPayment(); });
    }
    else if (source.status != 'pending') {
        exitPopState();
        var msg = "Unexpected 3D Secure status: " + source.status;
        //bootbox.alert(msg, function () { cancelPayment(); });
    }
}

function enterPopState(urlLink) {
    jQuery('<iframe>', {
        id: 'threeDFrame',
        src: urlLink,
        width: "100%",
        height: "100%"
    }).appendTo('#iframe-container');
    jQuery('div.load-sidecart').show();
    jQuery('.navbar-default').hide();
    jQuery('#back_link').prop("disabled", true);
    jQuery('#edit_link').prop("disabled", true);
}

function exitPopState() {
    jQuery('#threeDFrame').remove(); //close iframe
    jQuery('div.load-sidecart').hide();
    jQuery('.navbar-default').show();
    jQuery('#back_link').prop("disabled", false);
    jQuery('#edit_link').prop("disabled", false);
}

function addOptionalFields(formObject) {
    var hiddenStreet1 = jQuery("<input type='hidden' data-stripe='address_line1'/>").attr("value", sessionObtained['bil']['Street1']);
    var hiddenStreet2 = jQuery("<input type='hidden' data-stripe='address_line2'/>").attr("value", sessionObtained['bil']['Street2']);
    var hiddenCity = jQuery("<input type='hidden' data-stripe='address_city'/>").attr("value", sessionObtained['bil']['City']);
    var hiddenZip = jQuery("<input type='hidden' data-stripe='address_zip'/>").attr("value", sessionObtained['bil']['Zip']);
    var hiddenCountry = jQuery("<input type='hidden' data-stripe='address_country'/>").attr("value", sessionObtained['bil']['Country']);
    formObject.prepend(hiddenStreet1);
    formObject.prepend(hiddenStreet2);
    formObject.prepend(hiddenCity);
    formObject.prepend(hiddenZip);
    formObject.prepend(hiddenCountry);
    return formObject;
}

function populateSummary() {
    jQuery.when(showSession()).done(function () {
        console.log(sessionObtained);
        populateItems();
    });
}

function showSession() {
    return jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: {
            show_session: "true"
        },
        success: function (response) {
            //console.log(response);
            sessionObtained = jQuery.parseJSON(response);
        }
    });
}

function populateItems() {
    var bagItems = sessionObtained['uId'].length;
    var itemPrice;
    for (var i = 0; i < bagItems; i++) {
        var uniqueId = sessionObtained['uId'][i];
        var imagePath = sessionObtained['img'][i];
        var title = sessionObtained['title'][i];
        var desc = sessionObtained['desc'][i];
        var size = sessionObtained['size'][i];
        var quantity = sessionObtained['qty'][i];
        itemPrice = getItemPrice(sessionObtained['price'][i]);
        var price = itemPrice[0] + itemPrice[1];

        var outerRow = jQuery("<div id='" + uniqueId + "'class='product col-md-12 col clearfix'></div>");
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
    var editLink = jQuery("<a class='cart-link link' id='edit_link' onclick='setEditLink()' style='cursor:pointer;'>Edit</a>");
    jQuery('#summaryItems').append(editLink);
    var subtotal = "A$" + sessionObtained['defSubTotal'] + " (" + itemPrice[0] + sessionObtained['curSubTotal'] + ")";
    var finalShipping = "A$" + sessionObtained['finalShipping'];
    var grandTotal = "A$" + sessionObtained['total'];
    var row1 = jQuery("<hr/><div class='order-total sml-padding no-padding-top'><p class='no-margin account-sub-title'>Subtotal: <span class='price'>" + subtotal + "</span></p><p class='no-margin account-sub-title'>Shipping: <span class='price'>" + finalShipping + "</span></p></div>");
    var row2 = jQuery("<div class='order-total sml-padding'><p class='no-margin account-sub-title'>Grand Total: <span class='price'>" + grandTotal + "</span></p></div>");
    jQuery('#summaryColumn').append(row1);
    jQuery('#summaryColumn').append(row2);

    var addressRow = jQuery("<div class='address-details sml-padding relative'><ul id='summaryAddresses' class='tcheckout-customer-info'></ul><a class='link' id='back_link' onclick='setBackLink()' style='cursor:pointer;'>Back</a></div>");
    jQuery('#summaryColumn').append(addressRow);
    var billingAddr = jQuery("<li><h4 class='supergroteska_reg' ><b>Billing Address</b></h4><div>" + sessionObtained['bil']['FirstName'] + " " + sessionObtained['bil']['LastName'] + "<br>" + sessionObtained['bil']['Street1'] + ", " + sessionObtained['bil']['Street2'] + "<br>" + sessionObtained['bil']['City'] + ", " + sessionObtained['bil']['Zip'] + "<br>" + sessionObtained['bil']['Country'] + "<br>T: " + sessionObtained['bil']['Tel'] + "</div></li>");
    var shippingAddr = jQuery("<li><h4 class='supergroteska_reg' ><b>Shipping Address</b></h4><div>" + sessionObtained['ship']['FirstName'] + " " + sessionObtained['ship']['LastName'] + "<br>" + sessionObtained['ship']['Street1'] + ", " + sessionObtained['ship']['Street2'] + "<br>" + sessionObtained['ship']['City'] + ", " + sessionObtained['ship']['Zip'] + "<br>" + sessionObtained['ship']['Country'] + "<br>T: " + sessionObtained['ship']['Tel'] + "</div></li>");
    jQuery('#summaryAddresses').append(billingAddr);
    jQuery('#summaryAddresses').append(shippingAddr);

    // load email template here
    var templateObj = {};
    templateObj['load_template'] = true;
    var summaryClone = jQuery('#summaryItems').clone();
    var removedEditLink = summaryClone[0];
    removedEditLink.removeChild(removedEditLink.childNodes[2]);
    templateObj['summaryItems'] = removedEditLink.outerHTML;
    templateObj['row1'] = "";
    row1.each(
        function (index, element) {
            templateObj['row1'] = templateObj['row1'] + element['outerHTML'];
        });
    templateObj['row2'] = row2.prop('outerHTML');
    templateObj['addressRow'] = jQuery('#summaryAddresses').prop('outerHTML');
    loadTemplate(templateObj);
}

function loadTemplate(replacements) {
    //console.log(replacements);
    jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: replacements,
        success: function (response) { console.log(response); }
    });
}

function getItemPrice(price) {
    var priceArray = price.split(' ');
    var value_ = priceArray[0];
    var currency = priceArray[1];
    switch (currency) {
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
    return [currency, value_];
}

function setEditLink() {
    jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: {
            edit_basket: "true"
        },
        success: function (response) {
            console.log(response);
            window.location = 'https://doualatees.com/shop/checkout/bag';
        }
    });
}

function setBackLink() {
    jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: {
            edit_review: "true"
        },
        success: function (response) {
            console.log(response);
            window.location = history.back();
        }
    });
}

function cancelPayment() {
    bootbox.confirm({
        message: "Cancel payment and return to home page?",
        buttons: {
            cancel: {
                label: 'No'
            },
            confirm: {
                label: 'Yes'
            }
        },
        callback: function (result) {
            if (result) {
                proceedToCancel();
            }
            jQuery('#cancelPayment').prop("disabled", false);
            jQuery('#tcheckout-please-wait').hide();
        }
    });

}

function proceedToCancel() {
    jQuery.ajax({
        cache: 'false',
        type: 'post',
        url: 'https://doualatees.com/shop/items/shop_items.php',
        data: {
            cancel_payment: "true"
        },
        success: function (response) {
            console.log(response);
            window.location = 'https://doualatees.com';
        }
    });
}
