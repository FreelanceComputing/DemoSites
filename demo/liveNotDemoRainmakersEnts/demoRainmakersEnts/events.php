﻿<?php require_once( 'content-managed-back-office/cms.php' ); ?>
<cms:template title='Events' clonable='1'>
    <cms:editable name='logo' label='Logo' desc='Upload the logo here - 158x53' crop='1' width='158' height='53' type='image'>../../img/logo_light.png</cms:editable>
    <cms:editable name='event_day' label='Event day' desc='Enter the day of the week here' type='text'/>
    <cms:editable name='event_date' label='Event date' desc='Enter the date here - dd/mm/yyyy' type='text'/>
    <cms:editable name='event_time' label='Event time' desc='Enter the time here - 00:00 - 00:00' type='text'/>
    <cms:editable name='event_thumb' label='Event thumbnail' desc='Upload the thumbnail here - 200x200' crop='1' width='200' height='200' type='image'/>
    <cms:editable name='event_thumb_desc' label='Event thumbnail description' desc='Enter a short thumbnail description here' type='text'/>
    <cms:editable name='event_town' label='Event town' desc='Enter the town here' type='text'/>
    <cms:editable name='event_title' label='Event title' desc='Enter the title here' type='text'/>
    <cms:editable name='event_summary' label='Event summary' desc='Enter the summary here' type='text'/>
	<cms:editable name='event_location' label='Event location' desc='Enter the address location here' type='text'/>
    <cms:editable name='event_img' label='Event image' desc='Upload the image here - 676x960' type='image'/>
    <cms:editable name='event_img_desc' label='Event image description' desc='Enter a short image description here' type='text'/>
    <cms:editable name='disc_price_heading' label='Discounted price heading' desc='Enter the price heading here' type='text'/>
    <cms:editable name='disc_price_val' label='Discounted price value' desc='Enter the price here' type='text'/>
    <cms:editable name='disc_price_desc' label='Discounted price description' desc='Enter the price description here' type='text'/>
    <cms:editable name='full_price_heading' label='Full price heading' desc='Enter the price heading here' type='text'/>
    <cms:editable name='full_price_val' label='Full price value' desc='Enter the price here' type='text'/>
    <cms:editable name='full_price_desc' label='Full price description' desc='Enter the price description here' type='text'/>
	<cms:editable name='fb_footer' label='Facebook button' desc='Change the link to the Facebook button here' type='text'>http://facebook.com/ted.rainmaker.14/</cms:editable>
	<cms:editable name='ins_footer' label='Instagram button' desc='Change the link to the Instagram button here' type='text'>https://instagram.com/rainmakersents/</cms:editable>
</cms:template>
<cms:if k_is_page >
<!DOCTYPE html>
<html>
<head>
    <base href="<cms:show k_site_link />" />
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><cms:show k_page_title /> - Event</title>

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3Aregular%2C%2C400%2C700%2C900%7CRaleway%3A800%2C%2C400%2C700%2C900%7CRaleway%3A400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A400%2C700&display=swap" />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='stylesheet' id='bootstrap-css' href='../../css/bootstrap.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-css' href='../../fontawesome-5.13.0/css/all.min.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='../../css/master.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='../../css/make.css' type='text/css' media='all' />

    <script type='text/javascript' src='../../js/jquery-3.5.0.min.js'></script>
    <script type='text/javascript' src='../../js/ajax.js'></script>
    <script type='text/javascript' src='../../js/jquery-1.12.4.js'></script>
</head>
<body>
    <header class="header header-transparent navbar-fixed ">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-6 align-self-center">
                    <a class="navbar-brand logo" href="<cms:show k_site_link />"> <img src="<cms:show logo />" alt="RainMakers Ents"> </a>
                </div>
                <div class="col-lg-9">
                    <nav class="navbar navbar-light xs-navbar navbar-expand-lg">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primary-nav" aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation"> 
                            <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span> 
                        </button>
                        <div id="primary-nav" class="collapse navbar-collapse justify-content-end">
                            <ul class="navbar-nav main-menu">
                                <li class="current-menu-parent">
                                    <a href="<cms:show k_site_link />" class="nav-link">Home</a>
                                </li>
                                <li>
                                    <a href="<cms:show k_site_link />gallery/" class="nav-link">Gallery</a>
                                </li>
                                <li>
                                    <a href="<cms:show k_site_link />faq/" class="nav-link">FAQ</a>
                                </li>
                                <li>
                                    <a href="<cms:show k_site_link />contact/" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div class="page-banner-area" style="background-image:url(../../img/banner.jpg);">
        <div class="page-banner-title ">
            <div class="text-center">
                <p class="banner-title"> Event Details</p>
                <ol class="breadcrumb" data-wow-duration="2s">
                    <li><a href="../../">Home</a></li> /
                    <li>Event</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="main-container" role="main">
        <div class="container">
            <article class="post-details ts-speaker">
                <div class="entry-content clearfix ts-single-speaker">
                    <div class="row" style="background:#f7f7f7;">
                        <div class="col-md-4">
                            <div class="speaker-content" clearfix>
                                <div class="speaker-exhibs_photo"> <img src="<cms:show event_img/>" alt="<cms:show event_img_desc/>" /></div>
                                <h2 id="eventName" class="ts-title"><cms:show event_title/></h2>
                                <div id="eventTown" class="speaker-designation"> <cms:show event_town/></div>
                                <div id="eventDate" class="post-meta">
                                    <span>
                                        <i class="far fa-calendar"></i>
                                        <cms:show event_date/>
                                    </span>
                                    <span>
                                        <i class="far fa-clock"></i>
                                        <cms:show event_time/>
                                    </span>
                                </div>
                                <div class="post-meta clearfix">
                                    <span>
                                        <i class="fas fa-map-marker-alt"></i>
                                        <cms:show event_location/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8" style="padding:30px;">
                            <div class="row" style="padding-bottom:25px;">
                                <div class="pricing-item " style="padding-bottom:10px;">
                                    <img class="pricing-dot " src="../../img/dot.png" alt="EARLY BIRD">
                                    <div class="ts-pricing-box">
                                        <div class="ts-pricing-header">
                                            <h2 class="ts-pricing-name"> <cms:show disc_price_heading/></h2>
                                            <h3 class="ts-pricing-price"> <span class="currency">£</span><cms:show disc_price_val/></h3>
                                        </div>
                                        <div class="ts-pricing-progress">
                                            <p class="amount-progres-text"></p>
                                            <div class="ts-progress">
                                                <div class="ts-progress-inner" style="width: 100%"></div>
                                            </div>
                                        </div>
                                        <p class="vate-text" style="font-size:12px;"><cms:show disc_price_desc/></p>
                                    </div> <img class="pricing-dot1 " src="../../img/dot.png" alt="EARLY BIRD">
                                </div>
                                <div class="pricing-item " style="padding-bottom:10px;">
                                    <img class="pricing-dot " src="../../img/dot.png" alt="REGULAR">
                                    <div class="ts-pricing-box">
                                        <div class="ts-pricing-header">
                                            <h2 class="ts-pricing-name"> <cms:show full_price_heading/></h2>
                                            <h3 class="ts-pricing-price"> <span class="currency">£</span><cms:show full_price_val/></h3>
                                        </div>
                                        <div class="ts-pricing-progress">
                                            <p class="amount-progres-text"></p>
                                            <div class="ts-progress">
                                                <div class="ts-progress-inner" style="width: 100%"></div>
                                            </div>
                                        </div>
                                        <p class="vate-text" style="font-size:12px;"><cms:show full_price_desc/></p>
                                    </div> <img class="pricing-dot1 " src="../../img/dot.png" alt="REGULAR">
                                </div>
                            </div>
                            <div class="row" style="padding: 15px 15px 0 15px;border: 1px dashed #e5e5e5;border-left: none;">
                                <div data-id="ead9de5" data-element_type="widget" data-widget_type="shortcode.default">
                                    <div class="elementor-widget-container">
                                        <div role="form" class="wpcf7" dir="ltr">
                                            <form id="interestForm" method="post" class="wpcf7-form">
                                                <div style="display: none;">
                                                    <input type="hidden" name="rat_year" value="" />
                                                    <input type="hidden" name="rat_version" value="" />
                                                    <input type="hidden" name="rat_locale" value="" />
                                                    <input type="hidden" name="rat_month" value="" />
                                                </div>
                                                <div class="sidebar-widgets">
                                                    <div class="row form-group">
                                                        <div class="col-lg-4">
                                                            <span style="position:relative;">
                                                                <input id="contactName" name="alias" required pattern="[a-zA-Z\s]{5,}" type="text" value="" size="40" class="form-control" placeholder="Full Name" />
                                                                <span id="displayNameError" style="display:none; color:red">Please enter a valid name</span>
                                                            </span>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <span style="position:relative;">
                                                                <input id="contactNumber" name="number" required pattern="[0][1-9][0-9]{9}" type="tel" value="" size="40" class="form-control" placeholder="Phone" />
                                                                <span id="displayNumberError" style="display:none; color:red">Please enter a valid number</span>
                                                            </span>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <span style="position:relative;">
                                                                <input id="contactEmail" name="email" required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" type="text" value="" size="40" class="form-control" placeholder="Email" />
                                                                <span id="displayEmailError" style="display:none; color:red">Please enter a valid email</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="text-center">
                                                        <input type="submit" value="Register Interest" class="btn" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <footer class="entry-footer clearfix"></footer>
        </div>
    </div>
    <!-- Outcome Modal -->
    <div id="displayOutcome" class="w3-modal w3-animate-opacity">
        <div class="w3-modal-content" style="padding:32px">
            <div class="w3-container w3-white">
                <i class="fas fa-times w3-transparent w3-button w3-xlarge w3-right"></i>
                <h2 class="w3-wide"></h2>
                <h1></h1>
                <h1 style="background-color:#00c1c1; line-height:0.5; margin-bottom: 20px !important">&nbsp;</h1>
                <p style="text-align: center;"></p>
                <h1 style="text-align: center;"></h1>
            </div>
        </div>
    </div>
    <footer class="ts-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ts-footer-social text-center mb-30">
                        <ul>
                            <li class="ts-facebook">
                                <a href="<cms:show fb_footer/>" target="_blank"> <i class="fab fa-facebook-f"></i> <span>Facebook</span> </a>
                            </li>
                            <li class="ts-instagram">
                                <a href="<cms:show ins_footer/>" target="_blank"> <i class="fab fa-instagram"></i> <span>Instagram</span> </a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright-text text-center">
                        <p> &copy; <span id="theYear">2019</span> RainMakers Ents. All rights reserved</p>
                    </div>
                    <div class="BackTo">
                        <a href="#" class="fa fa-angle-up" aria-hidden="true"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script type='text/javascript' src='../../js/bootstrap.min.js'></script>
    <script type='text/javascript' src='../../js/script.js'></script>
</body>
</html>
</cms:if>
<?php COUCH::invoke(); ?>