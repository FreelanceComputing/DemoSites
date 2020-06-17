
function loadDialog(){
	var id = jQuery('.productid').attr('id');
	
	jQuery.ajax({
    url: "/shop/Popupcart",
    type: "post",
    data: {productid: id},
    success: function(data){
        jQuery("#dialog").html(data);
    }   
	});

	jQuery("#dialog").dialog(
	       {
	        modal: false
	       }
	);
}

