jQuery(document).ready(function(){
	jQuery.ajax({
		type: 'post',
		url: 'https://doualatees.com/shop/items/shop_items.php',
		data:{
			total_cart_items: "true"
		},
		success:function(response){
			console.log(response);
			var respArr = response.split(',');
			//console.log(respArr);
			document.getElementById("bagCounter").innerText = 'My Bag (' + respArr[0] + ')';
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
	jQuery("#facebook").attr('style', 'max-height:100%;max-width:100%;');
});