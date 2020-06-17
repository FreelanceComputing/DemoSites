(function($){
    $(window).ready(function() {
        browser_check.init();
    });

    /* ---- who's looking? ----
    :: REQUIRES: modernisr
    */
    browser_check =  {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
            $('body').addClass(browser_check.browser);
            $('body').addClass("browser_v"+browser_check.version);
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
        ]

    };

})(jQuery);

jQuery(document).ready(function(){
	var root = document.documentElement;
	root.className += " js";
	modalWindow();
	searchInterface();
	smoothScroll();
	magentoFilters();
  	mobileSearch();
  	magentoMobilefilters();
  	mobileFooter();
  	shippingActive();
  	productDetail();
  	// accActive();

	jQuery(window).on('load resize', function() {
		stickyProduct();
		cartRecProducts();
	}).resize();

	jQuery(window).on('resize', function() {
		// productMiniBasket();
		productDetail();
		topLinks();
	}).resize();
});

// function accActive() {
// 	if(jQuery('body').hasClass('catalog-category-view')) {
// 		var endOfUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
// 		var buttonText = jQuery('.insight-menu li a').text().toLowerCase();
// 		console.log(endOfUrl);
// 		console.log('text: ' + buttonText);

// 		if(endOfUrl == buttonText) {          
// 				console.log('a match');
// 		}
// 	}
// }
function newArrivals() {
	var newAr = jQuery('.category-new-arrivals').length;
	if (newAr > 0) {
		jQuery('.filter-labels').find('Arrivals').addClass('active');
		jQuery('.filter-labels').find('Shoes').removeClass('active');
	}
}
function topLinks() {
	if(jQuery('.top-link-cart').text().split('(').pop().split(' ')[0] != 'My'){ 
		jQuery('#shop-links').append(jQuery('.top-link-cart').text().split('(').pop().split(' ')[0])
	}

	if (jQuery(window).width() > 768) {
		jQuery('#header .load-links').delay(1750).queue(function (next) {
			jQuery(this).css({ 
				'height':'auto',
				'opacity':'1',
				'-webkit-transform':'translateY(0)', 
				'-moz-transform':'translateY(0)', 
				'-ms-transform':'translateY(0)', 
				'-o-transform':'translateY(0)', 
				'transform':'translateY(0)' 
			});
			next();
		});
	}
	else if (jQuery(window).width() < 768) {
		jQuery('#header .load-links').css({ 
			'height':'',
			'opacity':'',
			'-webkit-transform':'none', 
			'-moz-transform':'none', 
			'-ms-transform':'none', 
			'-o-transform':'none', 
			'transform':'none' 
		});
	}
}

function productDetail() {
	if(jQuery('body').hasClass('catalog-product-view')) {
		
		if (jQuery(window).width() > 1399) {
			var imgHeight = jQuery('#main-prod-image').height();
			
	    	jQuery('.product-wrap .col-md-5').css('height', imgHeight);
		}
		
		jQuery(window).scroll(function() {
			var sideCart = jQuery('div.load-sidecart');

		    if (jQuery(this).scrollTop() > 30) {
		    	sideCart.css({'top' : '-11px'});
		    } else {
		    	sideCart.css({'top' : '20px'});
		    }
		});
	}
}

function searchInterface() {
	jQuery('html.js ul li a.search').click(function(event) {
		event.preventDefault();
		jQuery('.search-bar').toggleClass('open');
		jQuery(this).toggleClass('active');
	});
}

function mobileSearch() {

	jQuery('html.js div#header .mobile-icons .icon').click(function(e) {

		var filter = jQuery(this).attr('id');

		jQuery('div#header .header-wrapper div.' + filter).addClass('open').siblings().removeClass('open');

        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery('div#header .header-wrapper div.' + filter).removeClass('open');

        } else {
            jQuery(this).siblings().removeClass('active'); 
            jQuery(this).addClass('active');
        }
	});

}

function mobileFooter() {

	if (jQuery(window).width() < 769) {
		var allPanels = jQuery('.col-menu > ul#links').hide();
			
		jQuery('.col-menu > .title').click(function() {
			allPanels.slideUp();
			jQuery(this).addClass('active');
			jQuery(this).next('ul#links').slideDown();
			return false;
		});
	}
}

function contactForm() {

	var radioBtn = '.node-webform input[type="radio"]';
	var checkedRadio = '.node-webform input[type="radio"]:checked + label';
	var currentLabel = jQuery('.node-webform input[type="radio"]:checked + label').text();

	jQuery('.node-webform .form-radios').wrap('<div class="radio-wrapper"></div>');
	jQuery('.radio-wrapper').prepend('<label class="current">Please select</label>');

	jQuery('label.current').click(function() {
		jQuery('article.node-webform .form-radios').toggleClass('active');
	});

	jQuery(radioBtn).click(function() {
		jQuery('.node-webform .form-radios').removeClass('active');
			var idVal = jQuery(this).attr("id");
			jQuery('label.current').html(jQuery('.node-webform input[type="radio"]:checked + label').text());
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 0) {
	        $('.node-webform .form-radios').removeClass('active');
	    }
	});
}

function stickyProduct() {

	if(jQuery('body').hasClass('catalog-product-view') && jQuery(window).width() > 768) {

		var headHeight = jQuery('#header').height();
		var colHeight = jQuery('#product_addtocart_form').height();
		var totalHeight = headHeight + colHeight;

		jQuery("#product-shop").affix({
	        offset: { 
	            top: totalHeight
	        }
		});

		var winLeft = jQuery('#wrapper').offset().left;
		//console.log(winLeft);

		jQuery(window).scroll(function() {    
			jQuery('#product-shop').css('right', '0');

			if(jQuery(this).scrollTop() === totalHeight) {
    			if(jQuery(window).width() > 1600) {
					jQuery('.affix, .load-sidecart').css('right', winLeft);
				}
    		}
			else {
				jQuery('.affix, .load-sidecart').css('right' , '0');
			}
		});

	}
}

function smoothScroll() {

	if(jQuery('body').hasClass('catalog-product-view')) {

		jQuery('a[href*=#]').bind('click', function(e) {
		    e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
		    var target = jQuery(this).attr("href"); //Get the target
		    // perform animated scrolling by getting top-position of target-element and set it as scroll target
		    jQuery('html, body').stop().animate({ scrollTop: jQuery(target).offset().top }, 1000, function() {
		        location.hash = target;  //attach the hash (#jumptarget) to the pageurl
		    });
		    return false;
		});
	}
}

function magentoFilters() {

	// if (jQuery(window).width() > 768) {

		/* General filters */
		jQuery('.filter-labels ul .label span').click(function(e){

			var filter = jQuery(this).attr('class');

			if(jQuery('body').hasClass('page-discover')) {

				var panelDiscHeight = jQuery('.filter-tags .form-radios').outerHeight();
				
				if(jQuery(this).hasClass('active')) {
					jQuery('.filter-labels ul .label span').removeClass('active'); 	
					jQuery('.filter-tags').removeClass('open').css('height', '0');
				}
				else {
					jQuery('.filter-labels ul .label span').removeClass('active');
					jQuery(this).addClass('active');
					jQuery('.filter-tags').addClass('open').css('height', panelDiscHeight);
				}
			}

			else {

				var panelHeight = jQuery('.filter-tags div.' + filter).outerHeight();

				if(jQuery(this).hasClass('active')) {
					jQuery('.filter-labels ul .label span').removeClass('active'); 	
					jQuery('.filter-tags').removeClass('open').css('height', '0');
				}
				else {
					jQuery('.filter-labels ul .label span').removeClass('active');
					jQuery(this).addClass('active');
					jQuery('.filter-tags').addClass('open').css('height', panelHeight);
					jQuery('nav.filter-tags div.' + filter).addClass('active').siblings().removeClass('active');
				}
			}
		});

		jQuery('nav.filter-tags a.close-btn').click(function(event){
			
			event.preventDefault();
			jQuery('nav.filter-labels li.label span').removeClass('active');
			jQuery('nav.filter-tags').removeClass('open').css('height', '0');
		});

	// }
}

function magentoMobilefilters() {

 	jQuery('div.mobile-filters > div > span.filter-title').click(function(){  
  
        var filter = jQuery(this).attr('id');

		if(jQuery(this).hasClass('active')) {
			jQuery('div.mobile-filters span.filter-title').removeClass('active');
			jQuery('div.mobile-filters div.options-mobile ul#' + filter).hide();  
		}

		else {
			jQuery('div.mobile-filters span.filter-title').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('.options-mobile > ul > li > span.option-title').removeClass('active');
			jQuery('div.mobile-filters div.options-mobile ul').hide();
			jQuery('div.mobile-filters div.options-mobile ul#' + filter).show();  
		}

    });

	var allPanels = jQuery('div.options-mobile ul li ul');
	var panelTitles = jQuery('.options-mobile > ul > li > span.option-title');

	allPanels.hide();
			
	jQuery('.options-mobile > ul > li > span.option-title').click(function() {
		if(jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery(this).parent().children('ul').slideUp();
		}
		else { 
			panelTitles.removeClass('active');
			jQuery(this).addClass('active');
			allPanels.hide();
			jQuery(this).parent().children('ul').slideDown();
		}
	});
}

function shippingActive() {
	jQuery('body.checkout-onepage-index div.shipping').addClass('active');
}

function modalWindow() {
	jQuery('#sizeGuide').appendTo("body");
}

function cartRecProducts() {
	var relatedCol = jQuery('.cart-totals').find('div');
	if(jQuery('body').hasClass('checkout-cart-index')) {
		if (jQuery(window).width() > 992) {
			if(!relatedCol.hasClass('related-products')) {
			  	// console.log('not-found');
			  	jQuery('.cart-totals').css('margin-left','58.3333%');
			  	jQuery('.cart-totals .account-sub-title').css('clear','left');
			}
		}
		else {
			jQuery('.cart-totals').css('margin-left','0');
			// if(!relatedCol.hasClass('related-products')) {
			// 	jQuery('.cart .cart-totals .grand-total.account-sub-title').css('clear','none');
			// }
		}
	}
}

// function productMiniBasket() {
// 	var winLeft = jQuery('#wrapper').offset().left;
// 	console.log(winLeft);

// 	jQuery('#product-shop').css('right', '0');

// 	// jQuery('load-sidecart').css('right', '30px');
	
// 	if(jQuery('body').hasClass('catalog-product-view') && jQuery(window).width() > 1600) {
// 		jQuery('.affix, .load-sidecart').css('right', winLeft);
// 	} else {
// 		jQuery('.affix, .load-sidecart').css('right' , '0');
// 	}
// }
(function($){
	$(document).ready(function(){
		var newArr = $('.categorypath-new-arrivals-html').length;
		if (newArr > 0) {
			$('.filter-labels').find('.New').addClass('active');
			$('.filter-labels').find('.Shoes').removeClass('active');
		}
	});
})(jQuery);
jQuery('.item-list ul').each(function(){
var count = jQuery(this).children().length;
if (count == 1 || count == 5 || count == 9 || count == 13) {
  for (i = 0; i < 3; i++) { 
     jQuery(this).append('<li class="views-row single-country">&nbsp;</li>');
  }
}
});
(function($){
	// Stockist page grid filler
	$(document).ready(function() {
		$('.view-stockists .item-list ul').each(function() {
			//var count = jQuery(this).children().length;
			var i_length = jQuery(this).children().length;
			if (i_length == 1 || i_length == 5 || i_length == 9 || i_length == 13 || i_length == 17 || i_length == 21 || i_length == 25 || i_length == 29 || i_length == 33 || i_length == 37 || i_length == 41 || i_length == 45) {
			  for (i = 0; i < 3; i++) { 
					$(this).append('<li class="views-row single-country">&nbsp;</li>');
			  }
			} else if (i_length == 2 || i_length == 6 || i_length == 10 || i_length == 14 || i_length == 18 || i_length == 22 || i_length == 26 || i_length == 30 || i_length == 34 || i_length == 38 || i_length == 42 || i_length == 46) {
				for (i = 0; i < 2; i++) { 
					$(this).append('<li class="views-row single-country">&nbsp;</li>');
			  	}
			} else if (i_length == 3 || i_length == 7 || i_length == 11 || i_length == 15 || i_length == 19 || i_length == 23 || i_length == 27 || i_length == 31 || i_length == 35 || i_length == 39 || i_length == 43 || i_length == 47) {
				for (i = 0; i < 1; i++) { 
					$(this).append('<li class="views-row single-country">&nbsp;</li>');
			  	}
			}
//			var i_length = $(this).children().length;
//			//	var case_one = i_length == 2 || i_length == 5 || i_length == 8 || i_length == 11 || i_length == 14 || i_length == 17 || i_length == 20;
//			//	var case_two = i_length == 1 || i_length == 4 || i_length == 7 || i_length == 10 || i_length == 13 || i_length == 16 || i_length == 19 || i_length == 22;
//			if (i_length == 1 || i_length == 5 || i_length == 9 || i_length == 13 || i_length == 17 || i_length == 21 || i_length == 25 || i_length == 29 || i_length == 33 || i_length == 37 || i_length == 41 || i_length == 45) {
//				$(this).children().last().css('width','100%');
//			}
//			if (i_length == 2 || i_length == 6 || i_length == 10 || i_length == 14 || i_length == 18 || i_length == 22 || i_length == 26 || i_length == 30 || i_length == 34 || i_length == 38 || i_length == 42 || i_length == 46) {
//				$(this).children().last().prev().css('width','50%');
//				$(this).children().last().css('width','50%');
//			}
//			if (i_length == 3 || i_length == 7 || i_length == 11 || i_length == 15 || i_length == 19 || i_length == 23 || i_length == 27 || i_length == 31 || i_length == 35 || i_length == 39 || i_length == 43 || i_length == 47) {
//				$(this).children().last().prev().prev().css('width','33.33%');
//				$(this).children().last().prev().css('width','33.33%');
//				$(this).children().last().css('width','33.33%');
//			}
		});
	});
//		$('body.page-stockists .view-stockists .views-exposed-form .form-type-select').click(function(){
//			$(this).children('select').focus();
//		});
	// });
	$(document).ajaxSuccess(function() {
		$('.view-stockists .item-list ul').each(function() {
			//var count = jQuery(this).children().length;
			var i_length = jQuery(this).children().length;
			if (i_length == 1 || i_length == 5 || i_length == 9 || i_length == 13 || i_length == 17 || i_length == 21 || i_length == 25 || i_length == 29 || i_length == 33 || i_length == 37 || i_length == 41 || i_length == 45) {
			  for (i = 0; i < 3; i++) { 
					$(this).append('<li class="views-row single-country">&nbsp;</li>');
			  }
			} else if (i_length == 2 || i_length == 6 || i_length == 10 || i_length == 14 || i_length == 18 || i_length == 22 || i_length == 26 || i_length == 30 || i_length == 34 || i_length == 38 || i_length == 42 || i_length == 46) {
				for (i = 0; i < 2; i++) { 
					$(this).append('<li class="views-row single-country">&nbsp;</li>');
			  	}
			} else if (i_length == 3 || i_length == 7 || i_length == 11 || i_length == 15 || i_length == 19 || i_length == 23 || i_length == 27 || i_length == 31 || i_length == 35 || i_length == 39 || i_length == 43 || i_length == 47) {
				for (i = 0; i < 1; i++) { 
					$(this).append('<li class="views-row single-country">&nbsp;</li>');
			  	}
			}
		});
		
//		if ($('body').hasClass('page-stockists')) {
//			$('.view-stockists .item-list ul').each(function() {
//				var i_length = $(this).children().length;
//				//	var case_one = i_length == 2 || i_length == 5 || i_length == 8 || i_length == 11 || i_length == 14 || i_length == 17 || i_length == 20;
//				//	var case_two = i_length == 1 || i_length == 4 || i_length == 7 || i_length == 10 || i_length == 13 || i_length == 16 || i_length == 19 || i_length == 22;
//				if (i_length == 1 || i_length == 5 || i_length == 9 || i_length == 13 || i_length == 17 || i_length == 21 || i_length == 25 || i_length == 29 || i_length == 33 || i_length == 37 || i_length == 41 || i_length == 45) {
//				$(this).children().last().css('width','100%');
//				}
//				if (i_length == 2 || i_length == 6 || i_length == 10 || i_length == 14 || i_length == 18 || i_length == 22 || i_length == 26 || i_length == 30 || i_length == 34 || i_length == 38 || i_length == 42 || i_length == 46) {
//					$(this).children().last().prev().css('width','50%');
//					$(this).children().last().css('width','50%');
//				}
//				if (i_length == 3 || i_length == 7 || i_length == 11 || i_length == 15 || i_length == 19 || i_length == 23 || i_length == 27 || i_length == 31 || i_length == 35 || i_length == 39 || i_length == 43 || i_length == 47) {
//					$(this).children().last().prev().prev().css('width','33.33%');
//					$(this).children().last().prev().css('width','33.33%');
//					$(this).children().last().css('width','33.33%');
//				}
//			});
//		}
	});
})(jQuery);

(function($){
	$(document).ready(function() {
		setTimeout(function(){
			var textitem = $('.top-link-cart').text();
			var bagCount = textitem.replace(/\D/g,'');
			if (bagCount != '') {
				$('#shop-links').html('<span class="bagcount">' + bagCount + '</span>');
			}
		}, 500);
	});
})(jQuery);

(function($) {
	$(document).ready(function(){
		// Assign IDs
		$('.view-stockists .view-grouping').each(function() {
			var headClass = $(this).children('.view-grouping-header').text();
				headClass = headClass.replace(/\s+/g, '').toLowerCase();
			//console.log(headClass)
			//console.log(headClass2);
			$(this).attr('id',headClass);
		});
		// Move rest of the world to the end
		$('#restoftheworld').insertAfter('#asia');
	});
	$(document).ajaxSuccess(function() {
		$('.view-stockists .view-grouping').each(function() {
			var headClass = $(this).children('.view-grouping-header').text();
				headClass = headClass.replace(/\s+/g, '').toLowerCase();
			//console.log(headClass)
			//console.log(headClass2);
			$(this).attr('id',headClass);
		});
		// Move rest of the world to the end
		$('#restoftheworld').insertAfter('#asia');
	});
})(jQuery);