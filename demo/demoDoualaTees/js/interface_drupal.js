jQuery(document).ready(function(){
	jQuery.noConflict();
	pageFadein();
	journalNews();
	initIsotope();
	storeCarousel();
	storeMap();
	contactForm();
    // categoryFilter();	
    discoverPage();
    journalFilters();
	customMade();

	jQuery(window).on('resize', function() {
		discoverQuote();
		aboutPage();
	}).resize();
});

function customMade() {
	if(jQuery('body').hasClass('node-type-custom-made')) {

		jQuery('.shoe-options .panel-content').css('height', '0');

		jQuery('.shoe-options .col-option').click(function(event) {
			
			var colId = jQuery(this).attr('id');
			var panelHeight = jQuery(this).parent().find('.panel-content div#' + colId).outerHeight() + 1;
			
			if(jQuery(window).width() > 732) {

				if(jQuery(this).hasClass('active')) {
					jQuery('.shoe-options .col-option').removeClass('active'); 	
					jQuery('.shoe-options .panel-content').removeClass('open').css('height', '0');
				}
				else {

					jQuery('.shoe-options .col-option').removeClass('active');
					jQuery(this).addClass('active');

					jQuery('.shoe-options .panel-content').removeClass('open').css('height', '0');
					jQuery(this).parent().find('.panel-content').addClass('open').css('height', panelHeight);
					jQuery(this).parent().find('.panel-content div.col-image').hide();
					jQuery(this).parent().find('.panel-content div#' + colId).show();
				}
			} else {
				event.stopPropagation();
         		return false;
			}

		});
	}
}

function aboutPage() {
	if(jQuery('body').hasClass('node-type-about') || jQuery('body').hasClass('node-type-custom-made')) {
		jQuery('.node-slides .box').each(function() {
			var aboutTextBox = jQuery(this).outerHeight();
			var aboutTextBoxHalf = aboutTextBox/2;

			if(jQuery(this).height() > 700) {
				jQuery(this).parent().css('min-height', aboutTextBox + aboutTextBoxHalf);
			}
			
			jQuery(this).css({'margin-top': -aboutTextBoxHalf});
		});
	}
}

function discoverQuote() {

	var discoverHeight = jQuery('.node-type-discovery .page').outerHeight();
	var discoverHeightShare = jQuery('.node-type-discovery .page').outerHeight() + 38;	

	if (jQuery(window).width() > 768) {
		jQuery('.node-type-discovery .quote').css('height', discoverHeight);
	} else {
		jQuery('.node-type-discovery .quote').css('height', '0');
	}
}

function pageFadein() {

//calling jPreLoader
jQuery('body.front').jpreLoader({
	splashID: "#jSplash",
	loaderVPos: '70%',
	autoClose: true,
	splashFunction: function() {  
		//passing Splash Screen script to jPreLoader
		// jQuery('#wrapper').hide();
		jQuery('#jSplash').children('section').not('.selected').hide();
		jQuery('#jSplash').hide().fadeIn(500);
	}
}, function() {	//callback function
	   jQuery('#wrapper').addClass('visible');
});

}

// function categoryFilter() {
// 	jQuery('.product-filters ul li.label span').click(function(e) {
// 		var filter = jQuery(this).attr('class');
// 	});
// }

function storeCarousel() {
	jQuery('.carousel').carousel({
		interval: 5000 
	});

	// Carousel prev click
	jQuery('a[data-slide="prev"]').click(function() {
		jQuery('#banner-carousel').carousel('prev');
	});
	// Carousel next click
	jQuery('a[data-slide="next"]').click(function() {
		jQuery('#banner-carousel').carousel('next');
	});
}

function storeMap() {

	var storeContent = '.node-store section.content';
	var sectionButton = 'html.js .node-store input.btn';

	jQuery(sectionButton).click(function() {
		jQuery(storeContent).toggleClass('closed-content');
		jQuery('#map-canvas').toggleClass('map-sml');

		if(jQuery(storeContent).hasClass('closed-content')) {
			jQuery('.node-store input.btn').val('Store Details');
		} else { jQuery('.node-store input.btn').val('View on map'); }
	});

	var stockistContent = '.node-stockist div.content';
	var stockistButton = 'html.js .node-stockist div input.btn';

	jQuery(stockistButton).click(function() {

		jQuery(stockistContent).toggleClass('closed-content');
		jQuery('#map-canvas').toggleClass('map-sml');

		if(jQuery(stockistContent).hasClass('closed-content')) {
			jQuery('.node-stockist div input.btn').val('Store Details');
			jQuery(stockistContent).hide();
		} else { 
			jQuery('.node-stockist div input.btn').val('View on map');
			jQuery(stockistContent).show();
		}
	});

}

function contactForm() {

	var radioBtn = '.node-webform input[type="radio"]';
	var checkedRadio = '.node-webform input[type="radio"]:checked + label';
	var currentLabel = jQuery('.node-webform input[type="radio"]:checked + label').text();

	jQuery('.node-webform .form-radios').wrap('<div class="radio-wrapper"></div>');
	jQuery('.radio-wrapper').prepend('<label class="current">Please select</label>');

	jQuery('label.current').click(function() {
		jQuery('.node-webform .form-radios').toggleClass('active');
	});

	jQuery(radioBtn).click(function() {
		jQuery('.node-webform .form-radios').removeClass('active');
			var idVal = jQuery(this).attr("id");
			jQuery('label.current').html(jQuery('.node-webform input[type="radio"]:checked + label').text());
	});

	jQuery(!radioBtn).click(function() {
		jQuery('.node-webform .form-radios').removeClass('active');
	});

}

function journalNews() {

	jQuery('div#journal-container div.item:nth-child(3)').addClass('item-news');
	jQuery('div#journal-container div.item div.news').parent().addClass('item-news-swap');

	div1 = jQuery('body.page-journal div.item-news-swap');
	div2 = jQuery('body.page-journal div.item-news');

	tdiv1 = div1.clone();
	tdiv2 = div2.clone();

	div1.replaceWith(tdiv2);
	div2.replaceWith(tdiv1);
}

function journalFilters() {
	var filterTabs = jQuery('nav.filter-tags ol li');

	if(jQuery('body').hasClass('page-journal')) {	
		jQuery(filterTabs).click(function() {
			jQuery(filterTabs).removeClass('selected');
			jQuery(this).addClass('selected');
		});

		jQuery('nav.filters a.btn-filter').click(function() {
			jQuery(filterTabs).removeClass('selected');
		});
	}
}

function initIsotope() {

	(function (jQuery) {
		var jQuerycontainer = jQuery('#journal-container'),
			colWidth = function () {
				var w = jQuerycontainer.width(), 
					columnNum = 1,
					columnWidth = 0;
				if (w > 1054) {
					columnNum  = 3;
				} else if (w < 1054) {
					columnNum  = 2;
				} else if (w < 480) {
					columnNum  = 1;
				}
				columnWidth = Math.floor(w/columnNum);
				jQuerycontainer.find('.item').each(function() {
				});
				return columnWidth;
			},
			isotope = function () {
				jQuerycontainer.isotope({
					resizable: false,
					itemSelector: '.item',
					animationEngine : 'jquery',
    				layoutMode: 'masonry',
					masonry: {
						columnWidth: colWidth(),
					}
				});
			};
		isotope();
		jQuery(window).smartresize(isotope);
	}(jQuery));

}

function discoverPage() {

	var pageNode = '.node-discovery';
	var pageDrupal = '.node-discovery div.page-drupal';
	var pageMage = '.node-discovery div.page-mage';
	var pageHeight = jQuery('.node-discovery div.page-drupal div.col-sm-12').height();

	jQuery('.node-discovery .link').click(function() {
		if(jQuery(this).hasClass('drupal-link')) {
			jQuery(this).removeClass('open');
			jQuery('.node-discovery .content .mage-link').addClass('open');
			jQuery('.node-discovery .page .section-mage').removeClass('section-closed').addClass('section-open');
			jQuery('.node-discovery .page .section-drupal').removeClass('section-open').addClass('section-closed');
		} else {
			jQuery(this).removeClass('open');
			jQuery('.node-discovery .content .drupal-link').addClass('open');
			jQuery('.node-discovery .page .section-mage').removeClass('section-open').addClass('section-closed');
			jQuery('.node-discovery .page .section-drupal').removeClass('section-closed').addClass('section-open');			
		}
	});
	
}