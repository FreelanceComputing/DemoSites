var bagItems;


jQuery(document).ready(function(evt){
		
	jQuery("#facebook").attr('style', 'max-height:100%;max-width:100%;');
	jQuery.when(countBagItems()).done(function()
	{
		//displaySession();
		if(bagItems == '0')
		{
			bagIsEmpty();
		}
		else
		{
			jQuery('#shoBa').html('Shopping bag');
			populateTableTopBorder();
			populateTableSkeleton();
			for(var i=0; i<bagItems; i++)
			{
				showCartItem(i);
			}
			displayTotals(); 
			subTotal();
			bottomButtons();
		}
	});
	
});

function countBagItems()
{
	return jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			total_cart_items: "true"
		},
		success:function(response){
			var respArr = response.split(',');
			bagItems = respArr[0];
			console.log(bagItems);
			document.getElementById("bagCounter").innerText = "My Bag (" + bagItems + ")";
			if(respArr.length > 1)
			{
				jQuery('#checkout').removeAttr('href');
			}
			else
			{
			    jQuery('#checkout').attr("href", 'https://doualatees.com/shop/checkout/shipping');
			}
		}
	});
}

function bagIsEmpty()
{
	jQuery('#shoBa').html('Your shopping bag is empty');
}

function populateTableTopBorder()
{
	jQuery('#tableTopBorder').addClass("relative triple-border" );
}

function populateTableSkeleton()
{
	jQuery('#tableSkeleton').addClass("no-padding-top clearfix clear" );
	var unorderedList = jQuery("<ul id='tableItems' class='cart-product-list display-table full-width no-margin'></ul>");
	var fieldset = jQuery("<fieldset></fieldset>");
	fieldset.append(unorderedList);
	var input_ = jQuery("<input name='' type='hidden' value=''/>");
	var form_ = jQuery("<form id='shoppingBagForm' action='' method='post'></form>");
	form_.append(input_);
	form_.append(fieldset);
	jQuery('#tableSkeleton').append(form_);
}

function showCartItem(ind)
{
	var dataObj = {};
	dataObj["show_cart_item"] = "true";
	dataObj["ind"] = ind;
	return jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data: dataObj,
		success:function(response){
			//console.log(response);
			populateForm(response);
		}
	});
}

function populateForm(shoBagItm)
{	// loop through each bag item
    console.log(shoBagItm);
    var shoBagItmArr = shoBagItm.split(',');
	var productId = shoBagItmArr[0]; 
	var uniqueId = shoBagItmArr[8]; 
	var productRow = jQuery("<li id='" + uniqueId + "' class='product-list-item relative'></li>");
	jQuery('#tableItems').append(productRow);
	var thumbnailClass = jQuery("<div id='pdtThumb-" + uniqueId + "' class='thumbnail display-table-cell col col-xs-4 valign-top'></div>");
	jQuery('#' + uniqueId).append(thumbnailClass);
	var productLink = shoBagItmArr[6]; 
	var productImage = shoBagItmArr[5]; 
	var productTitle = shoBagItmArr[1]; 
	
	var href = jQuery("<a id='pdtLink-" + uniqueId + "' href='" + productLink + "' title='" + productTitle +"' class='product-image'></a>");
	jQuery('#pdtThumb-' + uniqueId).append(href);
	var img = jQuery("<div class='image float-left'><img id='pdtImg' class='float-left' src='" + productImage +"' width='132' height='115' alt='" + productTitle +"' /></div>");
	jQuery('#pdtLink-' + uniqueId).append(img);
	var title = jQuery("<h2 id='pdtTitle' class='product-name supergroteska_reg float-left'>"+ productTitle +"</h2>");
	jQuery('#pdtLink-' + uniqueId).append(title);
	var productDescription = shoBagItmArr[2]; 
	var descriptionClass = jQuery("<div class='details display-table-cell col col-xs-3 valign-top'><td> <p id='pdtDesc'>"+ productDescription +"</p> </td></div>");
	jQuery('#' + uniqueId).append(descriptionClass);
	var productSize = shoBagItmArr[3] ;
	var sizeClass = jQuery("<div id='pdtSize' class='size col col-xs-2 display-table-cell valign-top'><p>Size: " +productSize+ "</p></div>");
	jQuery('#' + uniqueId).append(sizeClass);
	var productPrice = getItemPrice(shoBagItmArr[4]);
	var priceClass = jQuery("<div class='cart-price display-table-cell col col-xs-1 display-table-cell valign-top double-border-left'><span id='pdtPrice' class='price'>" +productPrice+ "</span></div>");
	jQuery('#' + uniqueId).append(priceClass);
	var subTotalClass = jQuery("<div id='subTot-" + uniqueId + "' class='remove display-table-cell col col-xs-2 display-table-cell valign-top double-border-left'></div>");
	jQuery('#' + uniqueId).append(subTotalClass);
	
	var productQuantity = shoBagItmArr[7]; 
	var productQuantityId = "pdtQty-" + uniqueId;
	var quantityClass= jQuery("<div id='pdQty-" + uniqueId + "' class='quantity'><input id='" +productQuantityId+ "' name='' value='" +productQuantity+ "' title='Qty' class='form-control' maxlength='2' disabled/></div>");
	jQuery('#subTot-' + uniqueId).append(quantityClass);	
	var updateQuantityClass = jQuery("<div id='updt-" + uniqueId + "' class='increments form-group'></div>");
	jQuery('#pdQty-' + uniqueId).append(updateQuantityClass);
	var increaseButton = jQuery("<div id='increaseBtn-" + uniqueId + "' class='btn-qty inc btn-brora white button'>+</div>");
	var reduceButton = jQuery("<div id='reduceBtn-" + uniqueId + "' class='btn-qty dec btn-brora white button'>-</div>");
	var deleteButton = jQuery("<a id='deleteBtn-" + uniqueId + "' title='Remove item' class='btn-remove btn-remove2'></a>");
	jQuery('#updt-' + uniqueId).append(increaseButton);
	jQuery('#updt-' + uniqueId).append(reduceButton);
	jQuery('#updt-' + uniqueId).append(deleteButton);
	var dataObj = {};
	dataObj["item_uId"] = uniqueId;
	dataObj["qtyId"] = productQuantityId;
	jQuery('#increaseBtn-' + uniqueId).click(dataObj, increaseItemQty);
	jQuery('#reduceBtn-' + uniqueId).click(dataObj, reduceItemQty);
	jQuery('#deleteBtn-' + uniqueId).click(dataObj, deleteItem);
}

function displayTotals()
{
  var subTotes = jQuery("<div id='subTotes' class='cart-totals full-width clearfix'></div>");
  jQuery('#tableSkeleton').append(subTotes);
  var bagTotal = jQuery("<div class='total sub-total col col-md-2 col-xs-6 display-table-cell valign-top border-left border-bottom border-green account-sub-title'>Bag Total</div>");
  jQuery('#subTotes').append(bagTotal);
  var bagTotalVal = jQuery("<div class='total sub-total cart-price col col-md-1 col-xs-6 display-table-cell valign-top border-left border-bottom border-green double-border-left'><span id='bagTotalVal' class='price'>&pound;0.00</span></div>");
  jQuery('#subTotes').append(bagTotalVal);
  var nbsp = jQuery("<div class='sub-total blank col col-md-2 display-table-cell align-center valign-top border-left border-bottom border-green remove double-border-left' style=' padding: 0px;'><p></p><p id='currencyWarning' style='visibility:hidden; letter-spacing: 0px; font-size: 12px; color: #ff0000;'>Please ensure all items have matching currencies in order to view total and proceed to checkout.</p></div>");
  jQuery('#subTotes').append(nbsp);
  
  var charged = jQuery("<div class='total sub-total col col-md-2 col-xs-6 display-table-cell valign-top border-left border-bottom border-green account-sub-title'>Charged to card</div>");
  jQuery('#subTotes').append(charged);
  var chargedVal = jQuery("<div class='total sub-total cart-price col col-md-1 col-xs-6 display-table-cell valign-top border-left border-bottom border-green double-border-left'><span id='chargedVal' class='price'>A$0.00</span></div><div class='sub-total blank col col-md-2 hidden-xs hidden-sm display-table-cell align-center valign-top border-left border-bottom border-green remove double-border-left'>&nbsp;</div>");
  jQuery('#subTotes').append(chargedVal);
  
}

function subTotal()
{   //sub total and currency conversions
  
  jQuery.ajax({
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data: {"calculate_total": "true"},
		success:function(response)
		{ 
		  console.log(response);		  
		  var totalArr = response.split(',');
		  //console.log(totalArr.length);
		  jQuery('#bagTotalVal').html(getItemPrice(totalArr[0]));
          //jQuery('#shippingVal').html("A$" + totalArr[2]);
          jQuery('#chargedVal').html("A$" + totalArr[1]);
		  if(totalArr.length == 4)
		  {
			jQuery('#currencyWarning').css('visibility', 'visible');
			jQuery('#payBtn').prop("disabled",true);
			jQuery('#checkout').removeAttr('href');
		  }
		  else
		  {
			jQuery('#currencyWarning').css('visibility', 'hidden');
			jQuery('#payBtn').prop("disabled",false);
			jQuery('#checkout').attr("href", 'https://doualatees.com/shop/checkout/shipping');
		  }
		}
	});
  
}

function bottomButtons()
{   //pay or continue shopping
	var bottomClass = jQuery("<div class='col-md-12 buttons clear'><div id='btmClass' class='lrg-padding clearfix'></div></div>");
	jQuery('#tableSkeleton').append(bottomClass);
	var payClass = jQuery("<div id='payClass' class='col-md-6 align-right methods-checkout'></div>");
	jQuery('#btmClass').append(payClass);
	var payList = jQuery("<ul class='checkout-types'><li id='payList'></li></ul>");
	jQuery('#payClass').append(payList);
	var payBtn = jQuery("<button id='payBtn' type='button' title='Checkout' class='button btn-proceed-checkout btn-checkout' onclick=''><span><span>Checkout</span></span></button>");
	jQuery('#payList').append(payBtn);
	jQuery('#payBtn').click(checkoutLink);
	var continueClass = jQuery("<div class='col-md-6 align-left continue-shop'><p><a class='link' href='https://doualatees.com/shop'>Continue shopping</a></p></div>");
	jQuery('#btmClass').append(continueClass);
	
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
	return currency + value_;
}

function increaseItemQty(event)
{   // disable button until after ajax has returned
	var uniqueId = event.data.item_uId;	
	jQuery('#increaseBtn-' + uniqueId).off('click');
	jQuery.when(increase(event) ).done(function()
	{
		jQuery('#increaseBtn-' + uniqueId).click(event.data, increaseItemQty);
		subTotal();
	});
}	

function increase(event)
{
  var qtyId = event.data.qtyId;
  var dataObj = {};
  dataObj["increase_item_qty"] = "true";
  dataObj["item_uId"] = event.data.item_uId;
  return jQuery.ajax({
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data: dataObj,
		success:function(response)
		{ 
		  //console.log(response);
		  if(response.indexOf("<") > -1)
		  {
		      window.location = 'https://doualatees.com/shop/checkout/bag';
		  }
		  else
		  {
			jQuery('#' + qtyId).attr('value', response);
		  }
		}
	});
}

function reduceItemQty(event)
{   // disable button until after ajax has returned
  var uniqueId = event.data.item_uId;	
  jQuery('#reduceBtn-' + uniqueId).off('click');
  jQuery.when(reduce(event) ).done(function()
  {
	jQuery('#reduceBtn-' + uniqueId).click(event.data, reduceItemQty);
	subTotal();
  });
}

function reduce(event)
{
  var qtyId = event.data.qtyId;
  var dataObj = {};
  dataObj["reduce_item_qty"] = "true";
  dataObj["item_uId"] = event.data.item_uId;
  var newQty;
  return jQuery.ajax({
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data: dataObj,
		success:function(response)
		{ 
		  if(response.indexOf("<") > -1)
		  {
		      window.location = 'https://doualatees.com/shop/checkout/bag';
		  }
		  else
		  {
			newQty = response;
		    jQuery('#' + qtyId).attr('value', newQty);
            if(newQty == '0')
		    {
			  deleteItem(event);
		    }
		  }
		}
	});
}

function deleteItem(event)
{
	var uniqueId = event.data.item_uId;
	var dataObj = {};
	dataObj["delete_item"] = "true";
	dataObj["item_uId"] = event.data.item_uId;
	jQuery.ajax({
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data: dataObj,
		success:function(response)
		{ 
		  console.log(response);
		  if(response.indexOf("<") > -1)
		  {
		      window.location = 'https://doualatees.com/shop/checkout/bag';
		  }
		  else if(response == '0')
		  {
			bagIsEmpty();
			jQuery('#tableTopBorder').removeClass("relative triple-border");
			jQuery('#tableSkeleton').removeClass("no-padding-top clearfix clear");
			jQuery('#tableSkeleton').empty();
			window.location = 'https://doualatees.com/shop/checkout/bag';
		  }
		  else
		  {
		    jQuery('#' + uniqueId).remove();
		    subTotal();
		    window.location = 'https://doualatees.com/shop/checkout/bag';
		  }
		}
	});
}

function checkoutLink()
{
    window.location = 'https://doualatees.com/shop/checkout/shipping';
}