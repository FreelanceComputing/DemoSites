jQuery( document ).ready(function(){
	getHtml();
});

function getHtml(){	
	var linksAr = dynamicLinks();
	// for(key in linksAr){		
		// getDynamicData(key, linksAr[key]);
	// }
}

function dynamicLinks(){
	var links = {
		/*'links' : '/shop/Dynamicblocks/',
		'recent' : '/shop/Dynamicblocks/index/rv',
		'search' : '/shop/Dynamicblocks/index/search/',
		'cart' : '/shop/Dynamicblocks/index/sidecart'*/
	};
	return links;
}

function getDynamicData(key, url){
	var pathArray = window.location.href.split( '/' );
	var protocol = pathArray[0];
	var host = pathArray[2];
	var baseurl = protocol + '//' + host ;
	
	jQuery.ajax({
	  url: baseurl + url,	  
		success: function(data){			
			storeHtml(key, data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
    		console.log("Status: " + textStatus); 
    		console.log("Error: " + errorThrown); 
		},  		
	});
}

function storeHtml(id, html){
	 if(id == 'links'){
	 	jQuery('.load-links').append(html);
	 }else if(id == 'search'){
	 	jQuery('.search-bar').append(html);
	 }else if(id == 'recent'){
	 	jQuery('.recently-viewed').append(html);
	 }else if(id == 'cart'){
	 	jQuery('.load-sidecart').append(html);
	 }else{
	 	// console.log(link + ' not found. Cannot append: ' + html);
	 }
}

