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
    var forcestore = getParameterByName('forcestore');
    if (forcestore) {
        forcestore = '?forcestore=' + forcestore;
    } else {
        forcestore = '';
    }
	var links = {
		/*'links' : '/shop/Dynamicblocks/'+forcestore,
		'search' : '/shop/Dynamicblocks/index/search/'+forcestore,
		'cart' : '/shop/Dynamicblocks/index/sidecart'+forcestore*/
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
	 	jQuery('.shop-links').append(html);
	 }else if(id == 'search'){
	 	jQuery('.search-bar').append(html);
	 }else if(id == 'cart'){
	 	jQuery('.load-sidecart').append(html);	
	 }else{
	 	console.log(link + ' not found. Cannot append: ' + html);
	 }
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

	