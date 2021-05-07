﻿<?php require_once( '../content-managed-back-office/cms.php' ); ?>
<cms:template title='Faq'>
    <cms:editable name='logo' label='Logo' desc='Upload the logo here - 158x53' crop='1' width='158' height='53' type='image'>../img/logo_light.png</cms:editable>
	<cms:editable name='questions' label='Question details' desc='Specify frequently asked questions here' toolbar='basic' type='richtext'>For the event FAQs, we would answer questions for each event individually as all the usual info is always displayed on flyers and posts as well. We will also update our website and create posts with all this information on our social media pages.<br><br>For sponsorships and partnerships, please contact us via the email provided on the contact page and we will aim to respond within 48hours of reading your email.</cms:editable>
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
    <title>Faq - RainMakers Ents</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3Aregular%2C%2C400%2C700%2C900%7CRaleway%3A800%2C%2C400%2C700%2C900%7CRaleway%3A400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A400%2C700%7CRaleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap" />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='stylesheet' id='elementor-frontend-css' href='../css/frontend.min-2.7.5.css' type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-css' href='../fontawesome-5.13.0/css/all.min.css' type='text/css' media='all' />
    <link data-minify="1" rel="stylesheet" id="elementor-global-css" href="../css/global.css" type="text/css" media="all">
    <link data-minify="1" rel='stylesheet' id='elementor-post-1072-css' href='../css/post.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css' href='../css/bootstrap.min.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='../css/master.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='../css/make.css' type='text/css' media='all' />

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
                <p class="banner-title"> FAQ</p>
                <ol class="breadcrumb" data-wow-duration="2s">
                    <li><a href="../">Home</a></li> /
                    <li>FAQ</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="elementor elementor-bc-flex-widget">
        <section class="elementor-element elementor-element-8a70b93 elementor-section-boxed elementor-section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-row">
                    <div class="elementor-column elementor-col-100">
                        <div class="elementor-column-wrap elementor-element-populated">
                            <div class="elementor-widget-wrap">
                                <div class="elementor-element elementor-element-01c7074">
                                    <div class="elementor-widget-container">
                                        <div class="title-section-area">
                                            <h2 class="section-title"> <span class="sub-title"></span>Questions</h2> <span class="title-shape"> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='71px' height='11px'> <path fill-rule='evenodd' d='M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z' /></svg> </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-1b0aa88 elementor-widget-accordion" data-element_type="widget" data-widget_type="accordion.default">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-accordion" role="tablist">
                                            <div class="elementor-accordion-item">
                                                <div class="elementor-tab-title elementor-active">                                                    
                                                </div>
                                                <div class="elementor-tab-content elementor-clearfix elementor-active" role="tabpanel" aria-labelledby="elementor-tab-title-2831" style="display:block;">
                                                    <cms:show questions/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <footer class="ts-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ts-footer-social text-center mb-30">
                        <ul>
                            <li class="ts-facebook">
                                <a href="http://facebook.com/ted.rainmaker.14/" target="_blank"> <i class="fab fa-facebook-f"></i> <span>Facebook</span> </a>
                            </li>
                            <li class="ts-instagram">
                                <a href="https://instagram.com/rainmakersents/" target="_blank"> <i class="fab fa-instagram"></i> <span>Instagram</span> </a>
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