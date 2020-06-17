jQuery(function(){
    var items = [];
	var i;
    function getJsonCatalog(data)
	{
	    items = data["catalog"];
		//console.log(items);
		loadItems();
	}
    jQuery.getJSON('https://doualatees.com/shop/items/catalog.json', getJsonCatalog);
	
	function loadItems(){
		for(i=0; i<items.length; i++)
		{
			var index = 'index'+i;
			var id = items[i]["id"];
			var pic = 'https://doualatees.com/shop/media/catalog/product/' + id + '/' + items[i]["pic"][0];
			var heading = "";
			if(id.indexOf("HOOD") >= 0){heading = "HOODIE";} //indexOf replaces includes which isn't supported in IE
			if(id.indexOf("NSLV") >= 0){heading = "SLEEVELESS";}
			if(id.indexOf("SSLV") >= 0){heading = "T-SHIRT";}
			if(id.indexOf("LSLV") >= 0){heading = "LONG SLEEVE";}
			if(id.indexOf("ACSRY") >= 0){heading = "ACCESSORY";}
			var description = items[i]["desc"];
			var price = items[i]["price"][0];
			//console.log(description);
			//console.log(id);
			//console.log(pic);
			//console.log(heading);
			var firstChild = '<li class="item"  id="' +index+ '"><a class="product-image" id="';
			var secondChild = '" onclick="showProductPage(this.id);" onMouseOver="showBackView(this.id);" onMouseOut="showFrontView(this.id);"><div class="product-image-wrapper"><img src="'
			var thirdChild = '" onError="noBackView(this);"/></div><div class="product-text trans"><div class="product-text-wrapper" ><h2 class="product-name no-margin">'+heading+'</h2><div class="description"><span>'+description+'</span></div><div class="price-box"><span class="regular-price" id="product-price-10978"><span class="price">'+price+'</span></span></div></div></div></a></li>';
			var toAppend = firstChild + id + secondChild +pic+thirdChild;
			jQuery(toAppend).appendTo(".products-grid");
		}
		//console.log(items.length);
		if (location.href.indexOf('#') > -1)
		{
			window.location.href = window.location.href;
		}
	}
}
);

function showProductPage(itemId){
    window.location.href = "https://doualatees.com/shop/items/product-page.html?id=" + itemId;
}

function noBackView(img){
	var itemId = img.parentElement.parentElement.id;
	img.src = 'https://doualatees.com/shop/media/catalog/product/' + itemId + '/' + itemId + '_front_view.jpg';
}

function showBackView(itemId){
	var imgElt = document.getElementById(itemId).children[0].children[0];
	imgElt.src = 'https://doualatees.com/shop/media/catalog/product/' + itemId + '/' + itemId + '_back_view.jpg';
}

function showFrontView(itemId){
    document.getElementById(itemId).children[0].children[0].src = 'https://doualatees.com/shop/media/catalog/product/' + itemId + '/' + itemId + '_front_view.jpg';
}