﻿<?php require_once( '../content-managed-back-office/cms.php' ); ?>
<cms:template title='Contact'>
    <cms:editable name='logo' label='Logo' desc='Upload the logo here - 158x53' crop='1' width='158' height='53' type='image'>../img/logo_light.png</cms:editable>
	<cms:editable name='contact_heading' label='Contact heading' desc='Specify the heading here' type='text'>Enquiries</cms:editable>
	<cms:editable name='contact_name' label='Contact name' desc='Specify name here' type='text'>Ted Rainmaker</cms:editable>
	<cms:editable name='contact_phone' label='Contact phone' desc='Specify phone number here' type='text'>07311153545</cms:editable>
	<cms:editable name='contact_email' label='Contact email' desc='Specify email here' type='text'>rainmakerents@gmail.com</cms:editable>
	<cms:editable name='fb_footer' label='Facebook button' desc='Change the link to the Facebook button here' type='text'>http://facebook.com/ted.rainmaker.14/</cms:editable>
	<cms:editable name='ins_footer' label='Instagram button' desc='Change the link to the Instagram button here' type='text'>https://instagram.com/rainmakersents/</cms:editable>
</cms:template>

<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="en-US">
<!--<![endif]-->

<head>
    <base href="<cms:show k_template_link />" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Contact - RainMakers Ents</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3Aregular%2C%2C400%2C700%2C900%7CRaleway%3A800%2C%2C400%2C700%2C900%7CRaleway%3A400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A400%2C700%7CRaleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap" />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='stylesheet' id='elementor-frontend-css' href='../css/frontend.min-2.7.5.css' type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-css' href='../fontawesome-5.13.0/css/all.min.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' id='elementor-post-1225-css' href='../css/post.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css' href='../css/bootstrap.min.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='../css/master.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='../css/make.css' type='text/css' media='all' />

    <script type='text/javascript' src='../js/jquery-3.5.0.min.js'></script>
    <script type='text/javascript' src='../js/ajax.js'></script>
    <script type='text/javascript' src='../js/jquery-1.12.4.js'></script>
</head>

<body>
    <header id="header" class="header header-transparent navbar-fixed ">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-6 align-self-center">
                    <a class="navbar-brand logo" href="<cms:show k_site_link />"> <img src="<cms:show logo/>" alt="RainMakers Ents"> </a>
                </div>
                <div class="col-lg-9">
                    <nav class="navbar navbar-light xs-navbar navbar-expand-lg">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primary-nav" aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation"> 
                            <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span> 
                        </button>
                        <div id="primary-nav" class="collapse navbar-collapse justify-content-end">
                            <ul class="navbar-nav">
                                <li class="current-menu-parent">
                                    <a href="../" class="nav-link">Home</a>
                                </li>
                                <li>
                                    <a href="../gallery/" class="nav-link">Gallery</a>
                                </li>
                                <li>
                                    <a href="../faq/" class="nav-link">FAQ</a>
                                </li>
                                <li>
                                    <a href="../contact/" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div id="page-banner-area" class="page-banner-area" style="background-image:url(../img/banner.jpg);">
        <div class="page-banner-title ">
            <div class="text-center">
                <p class="banner-title"> Contact Us</p>
                <ol class="breadcrumb" data-wow-duration="2s">
                    <li><a href="../">Home</a></li> /
                    <li>Contact</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="elementor elementor-1225">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">
                <section class="enquiries-section">
                    <div class="enquiries-outer-div">
                        <div class="enquiries-div elementor-row">
                            <div class="elementor-widget-wrap">
                                <div class="elementor-element">
                                    <div class="elementor-widget-container">
                                        <div class="single-intro-text single-contact-feature">
                                            <h3 class="ts-title"><cms:show contact_heading/></h3>
                                            <p>
                                                <strong>Name:</strong> <cms:show contact_name/></br> <strong>Phone:</strong> <cms:show contact_phone/></br> <strong>Email:</strong> <cms:show contact_email/></br>
                                            </p> <span class="count-number fas fa-info"> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="elementor-widget-wrap">
                        <div class="elementor-element elementor-element-3981dff elementor-widget-google_maps">
                            <div class="elementor-widget-container">
                                <div class="elementor-custom-embed">
                                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=London&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
                                            aria-label="Uxbridge, London"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="enquiries-section">                            
                    <div class="enquiries-div elementor-row message-div">                                    
                        <div class="elementor-widget-wrap">
                            <div class="elementor-element elementor-element-0508f57 elementor-widget">
                                <div class="elementor-widget-container">
                                    <div class="title-section-area">
                                        <h2 class="section-title"> <span class="sub-title">Send us a </span> MESSAGE</h2> <span class="title-shape"> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='71px' height='11px'> <path fill-rule='evenodd' d='M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z' /></svg> </span>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-ead9de5">
                                <div class="elementor-widget-container">
                                    <div role="form" class="wpcf7" dir="ltr">
                                        <form id="contactForm" method="post" class="wpcf7-form">
                                            <div style="display: none;">
                                                <input type="hidden" name="rat_year" value="" />
                                                <input type="hidden" name="rat_version" value="" />
                                                <input type="hidden" name="rat_locale" value="" />
                                                <input type="hidden" name="rat_month" value="" />
                                            </div>
                                            <div class="sidebar-widgets">
                                                <div class="row form-group">
                                                    <div class="col-lg-6">
                                                        <span style="position:relative;">
                                                            <input id="contactName" name="alias" required pattern="[a-zA-Z\s]{5,}" type="text" value="" size="40" class="form-control" placeholder="Full Name" />
                                                            <span id="displayNameError" style="display:none; color:red">Please enter a valid name</span>
                                                        </span>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <span style="position:relative;">
                                                            <input id="contactNumber" name="number" required pattern="[0][1-9][0-9]{9}" type="tel" value="" size="40" class="form-control" placeholder="Phone" />
                                                            <span id="displayNumberError" style="display:none; color:red">Please enter a valid number</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <div class="col-lg-6">
                                                        <span style="position:relative;">
                                                            <input id="contactEmail" name="email" required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" type="text" value="" size="40" class="form-control" placeholder="Your Email" />
                                                            <span id="displayEmailError" style="display:none; color:red">Please enter a valid email</span>
                                                        </span>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <span style="position:relative;">
                                                            <input id="contactSubject" name="subject" required pattern=".{5,}" type="text" value="" size="40" class="form-control" placeholder="Subject" />
                                                            <span id="displaySubjectError" style="display:none; color:red">Please enter a valid subject</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <p>
                                                    <span style="position:relative;">
                                                        <textarea id="contactMessage" name="message" required cols="40" rows="10" class="form-control message-box" placeholder="Message"></textarea>
                                                        <span id="displayMessageError" style="display:none; color:red">Please enter a valid message</span>
                                                    </span>
                                                </p>
                                                <div class="text-center">
                                                    <input type="submit" value="Contact Us" class="btn" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                            
                </section>
            </div>
        </div>
    </div>
    <!-- Outcome Modal -->
    <div id="displayOutcome" class="w3-modal w3-animate-opacity">
        <div class="w3-modal-content" style="padding:32px">
            <div class="w3-container w3-white">
                <i  class="fas fa-times w3-transparent w3-button w3-xlarge w3-right"></i>
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
    <script type='text/javascript' src='../js/bootstrap.min.js'></script>
    <script type='text/javascript' src='../js/script.js'></script>
</body>

</html>
<?php COUCH::invoke(); ?>