var productDeets = {};
var id;
var pays;
var prix;
var dispo;
var conv;
var cartBtn;
var taille;
var livraison;

function urlParam(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null){
		return null;
	}
	else{
		return results[1]||0;
	}
}

function getJsonCatalog(data){
	var items = data["catalog"];
	for(var i=0; i<items.length; i++){
		if(items[i]["id"] == id){
			productDeets = items[i];
			console.log(productDeets); //don't remove this
			break;
		}
	}
}

jQuery(document).ready(function(){

    id = urlParam('id');
    jQuery.when(jQuery.getJSON('https://doualatees.com/shop/items/catalog.json', getJsonCatalog)).done(function () //productDetails()
	{
		console.log(productDeets);
		var mainImg = document.getElementById("main-prod-image");
		mainImg.src = "https://doualatees.com/shop/media/catalog/" + productDeets['pic'][0];
		var devant = document.getElementById("devant");
		devant.src = "https://doualatees.com/shop/media/catalog/" + productDeets['pic'][0];
		var derriere = document.getElementById("derriere");
		if(productDeets['pic'][1]){
		    derriere.src = "https://doualatees.com/shop/media/catalog/" + productDeets['pic'][1];
		}
		else{
		    derriere.src = "https://doualatees.com/shop/media/catalog/no_back_view.jpg";
		}
		var individu = document.getElementById("individu");
		individu.innerText = productDeets['desc'];
		prix = document.getElementById("prix");
		prix.innerText = productDeets['price'][0];
		dispo = document.getElementById("dispo");
		conv = document.getElementById("conv");
		cartBtn = document.getElementById("cartBtn");
		//cartBtn.disabled = "disabled";
		//conv.style.visibility = 'hidden';
		var titre = document.getElementById("titre");
		if(id.indexOf("HOOD") >= 0){titre.innerText = "HOODIE";}
		if(id.indexOf("NSLV") >= 0){titre.innerText = "SLEEVELESS";}
		if(id.indexOf("SSLV") >= 0){titre.innerText = "T-SHIRT";}
		if(id.indexOf("LSLV") >= 0){titre.innerText = "LONG SLEEVE";}
		if(id.indexOf("ACSRY") >= 0){titre.innerText = "ACCESSORY";}
		jQuery("#taille").val("Size");
		jQuery("#attribute136").val("Ship To");
		jQuery('#cartBtn').prop("disabled",true);
		jQuery("#taille").prop("disabled",true);
		//jQuery("#attribute136").prop("disabled",true);
	})
});



jQuery(document).on('change', 'select', function(){
	var selected = jQuery(this).val();
	switch(selected){
		case 'S':
		case 'M':
		case 'L':
		case 'XL':
		    taille = selected;
			if(pays){
				cartBtn.removeAttribute('disabled');
			}
			break;
		case 'Size':
		    taille = null;
			cartBtn.setAttribute('disabled', 'disabled');
			break;
		case 'Ship To':
			conv.style.visibility = 'hidden';
			pays = null;
			livraison = null;
			prix.innerText = productDeets['price'][0];
			dispo.innerText = "Select location to view stock.";
			document.getElementById("taille").setAttribute('disabled', 'disabled');
			cartBtn.setAttribute('disabled', 'disabled');
			break;
		case 'Europe':
			conv.style.visibility = 'visible';
			pays = 'EUR';
			prix.innerText = productDeets['price'][1];
			if (productDeets[pays]['stock'] == 'yes'){
				dispo.innerText = "In stock";
				document.getElementById("taille").removeAttribute('disabled');
				if(taille){
					cartBtn.removeAttribute('disabled');
				}
				livraison = productDeets[pays]['shipping'];
			}
			else{
				dispo.innerText = "Out of stock";
				document.getElementById("taille").setAttribute('disabled', 'disabled');
			}
			break;
		case 'Great Britain':
			conv.style.visibility = 'visible';
			pays = 'UK';
			prix.innerText = productDeets['price'][2];
			if (productDeets[pays]['stock'] == 'yes'){
				dispo.innerText = "In stock";
				document.getElementById("taille").removeAttribute('disabled');
				if(taille){
					cartBtn.removeAttribute('disabled');
				}
				livraison = productDeets[pays]['shipping'];
			}
			else{
				dispo.innerText = "Out of stock";
				document.getElementById("taille").setAttribute('disabled', 'disabled');
			}
			break;
		case 'United States of America':
			conv.style.visibility = 'visible';
			pays = 'USA';
			prix.innerText = productDeets['price'][3];
			if (productDeets[pays]['stock'] == 'yes'){
				dispo.innerText = "In stock";
				document.getElementById("taille").removeAttribute('disabled');
				if(taille){
					cartBtn.removeAttribute('disabled');
				}
				livraison = productDeets[pays]['shipping'];
			}
			else{
				dispo.innerText = "Out of stock";
				document.getElementById("taille").setAttribute('disabled', 'disabled');
			}
			break;
		/*case 'Cameroon':
			conv.style.visibility = 'visible';
			pays = 'CMR';
			prix.innerText = productDeets['price'][4];
			if (productDeets[pays]['stock'] == 'yes'){
				dispo.innerText = "In stock";
				document.getElementById("taille").removeAttribute('disabled');
				if(taille){
					cartBtn.removeAttribute('disabled');
				}
				livraison = productDeets[pays]['shipping'];
			}
			else{
				dispo.innerText = "Out of stock";
				document.getElementById("taille").setAttribute('disabled', 'disabled');
			}
			break;*/
		default:
			conv.style.visibility = 'hidden';
			pays = 'AUS';
			prix.innerText = productDeets['price'][0];
			if (productDeets[pays]['stock'] == 'yes'){
				dispo.innerText = "In stock";
				document.getElementById("taille").removeAttribute('disabled');
				if(taille){
					cartBtn.removeAttribute('disabled');
				}
				livraison = productDeets[pays]['shipping'];
			}
			else{
				dispo.innerText = "Out of stock";
				document.getElementById("taille").setAttribute('disabled', 'disabled');
			}
	}
});

function updateSideCart(dataObj, tote){
	var firstChild = '<li id="popDesc" class="clearfix odd"> <img src="';
	var secondChild = '"> <span class="name font-sml">';
	var thirdChild = '</span>'; 
	var fourthChild = '<p class="subtotal"> Size: ';
	var fifthChild = '<span class="price">'; 
	var sixthChild = '</span>  </p></li>';
	var toReplace = firstChild + dataObj.item_img + secondChild + dataObj.item_title + thirdChild +  dataObj.item_desc+ fourthChild + dataObj.item_size + fifthChild + dataObj.item_price  + sixthChild;
	jQuery('li#popDesc').replaceWith(toReplace);
	jQuery('p#popTotal').text('Your bag contains ' + tote + ' item(s)');
	jQuery('div.wrapper-sidecart').show();
	jQuery('#cartBtn').prop("disabled",true);
	jQuery("#taille").prop("disabled",true);
	jQuery("#attribute136").prop("disabled",true);
}

function updateSessionBag(dataObj){
	jQuery.ajax({
		cache: 'false',
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data: dataObj,
		success:function(response){
			console.log(response);
			document.getElementById("bagCounter").innerText = "My Bag (" + response + ")";
			updateSideCart(dataObj, response);
		}
	});
}

function addToBag(){
	var dataObj = {};
	dataObj["add_item"] = "true";
	dataObj["item_id"] = id;
	dataObj["item_title"] = document.getElementById("titre").innerText;
	dataObj["item_desc"] = document.getElementById("individu").innerText;
	dataObj["item_size"] = taille;
	dataObj["item_price"] = prix.innerText;
	dataObj["item_img"] = "https://doualatees.com/shop/media/catalog/thumbnails/" + productDeets['pic'][0]; 
	dataObj["item_link"] = window.location.href;
	dataObj["item_uId"] = id +"-"+ prix.innerText.split(' ')[1] +"-"+ taille; 
	dataObj["item_default"] = productDeets['price'][0];
	dataObj["item_postage"] = livraison;
	updateSessionBag(dataObj);	
}

function closePopUpBag(){
	jQuery('div.load-sidecart').hide();
	window.location.reload(true);
	return false;
}


jQuery(function(){
	jQuery('#cartBtn').click(addToBag);
	jQuery('#cartBtn').mouseup(function(){jQuery(this).blur();});
	jQuery('#popClose').click(closePopUpBag);
});

