var sessionObtained;

jQuery(document).ready(function(){
	jQuery.when(detailsProvided()).done(function(){ 
		populateSummary();
	});
});


function detailsProvided()
{
	return jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			find_details: "true"
		},
		success:function(response){
			console.log(response);
			if(response == '0')
			{
			    window.location = 'https://doualatees.com/shop/checkout/bag';
			}
			else
			{
				jQuery('#tcheckout-save-btn').click(paymentLink);
			}
		}
	});
}

function paymentLink()
{
	return jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			order_confirm: "true"
		},
		success:function(response){
			console.log(response);
			if(response == '0')
			{
			    window.location = 'https://doualatees.com/shop/checkout/bag';
			}
			else
			{
			    window.location = 'https://doualatees.com/shop/checkout/payment';
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
		}
	});
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
	var editLink = jQuery("<a class='cart-link link' id='edit_link' onclick='setEditLink()' style='cursor:pointer;'>Edit</a>");
	jQuery('#summaryItems').append(editLink);
	var subtotal = "A$" + sessionObtained['defSubTotal'] + " (" + itemPrice[0] + sessionObtained['curSubTotal'] + ")";
	var finalShipping = "A$" + sessionObtained['finalShipping'];
	var grandTotal = "A$" + sessionObtained['total'];
	var row1 = jQuery("<hr/><div class='order-total sml-padding no-padding-top'><p class='no-margin account-sub-title'>Subtotal: <span class='price'>" + subtotal +"</span></p><p class='no-margin account-sub-title'>Shipping: <span class='price'>" + finalShipping + "</span></p></div>");
	var row2 = jQuery("<div class='order-total sml-padding'><p class='no-margin account-sub-title'>Grand Total: <span class='price'>" + grandTotal + "</span></p></div>");
	jQuery('#summaryColumn').append(row1);
	jQuery('#summaryColumn').append(row2);
	
	var addressRow = jQuery("<div class='address-details sml-padding relative'><ul id='summaryAddresses' class='tcheckout-customer-info'></ul><a class='link' id='back_link' onclick='setBackLink()' style='cursor:pointer;'>Back</a></div>");
	jQuery('#summaryColumn').append(addressRow);
	var billingAddr = jQuery("<li><h4 class='supergroteska_reg' ><b>Billing Address</b></h4><div>" +  sessionObtained['bil']['FirstName'] + " " + sessionObtained['bil']['LastName'] + "<br>" + sessionObtained['bil']['Street1'] + ", " + sessionObtained['bil']['Street2'] + "<br>" + sessionObtained['bil']['City'] + ", " +  sessionObtained['bil']['Zip'] + "<br>" + sessionObtained['bil']['Country'] + "<br>T: " + sessionObtained['bil']['Tel'] + "</div></li>"); 
	var shippingAddr = jQuery("<li><h4 class='supergroteska_reg' ><b>Shipping Address</b></h4><div>" +  sessionObtained['ship']['FirstName'] + " " + sessionObtained['ship']['LastName'] + "<br>" + sessionObtained['ship']['Street1'] + ", " + sessionObtained['ship']['Street2'] + "<br>" + sessionObtained['ship']['City'] + ", " +  sessionObtained['ship']['Zip'] + "<br>" + sessionObtained['ship']['Country'] + "<br>T: " + sessionObtained['ship']['Tel'] + "</div></li>");  
	jQuery('#summaryAddresses').append(billingAddr);
	jQuery('#summaryAddresses').append(shippingAddr);
	getShippingMethod(itemPrice[0] );
	//jQuery('#shippingMethod').html("");
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

function getShippingMethod(category)
{
	switch(category)
	{
		case "&euro;":
			jQuery('#shippingMethod').html("Shipping to Europe - <span class='price'>&euro;12.00</span><br>Delivery estimate is 5 business days after shipping confirmation.");
			break;
		case "&pound;":
			jQuery('#shippingMethod').html("Shipping to United Kingdom - <span class='price'>&pound;4.99</span><br>Delivery estimate is 3 business days after shipping confirmation.");
			break;
		case "$":
			jQuery('#shippingMethod').html("Shipping to United States of America - <span class='price'>$15.00</span><br>Delivery estimate is 7 business days after shipping confirmation.");
			break;
		case "XAF":
			jQuery('#shippingMethod').html("No shipping available in Cameroon. Collection on delivery");
			break;
		default:
			jQuery('#shippingMethod').html("Shipping to Australia - <span class='price'>A$10.00</span><br>Delivery estimate is 7 business days after shipping confirmation.");
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

function setBackLink()
{
	jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			edit_billing: "true"
		},
		success:function(response)
		{
			console.log(response);
			window.location = history.back();
		}
	});
}