<?php require_once( 'content-managed-back-office/cms.php' ); ?>
<cms:template title='Main Page'>
    <cms:editable name='logo' label='Logo' desc='Upload the logo here - 158x53' crop='1' width='158' height='53' type='image'>img/logo_light.png</cms:editable>
	<cms:editable name='about_heading' label='About heading' desc='Enter the about heading here' type='text'>About</cms:editable>
	<cms:editable name='about_subheading' label='About subheading' desc='Enter the about subheading here' type='text'> RAINMAKERS ENTS</cms:editable>
	<cms:editable name='about_desc' label='About description' desc='Enter the about description here' type='text'>RainMakers Entertainment is a family run company that specialises in event management. We cater for our customers' needs by promoting and organising events for a multitude of nationalities. We bring artists from Africa to perform at various events as well as organise stand alone shows for artists in the UK.</cms:editable>
	<cms:editable name='section_1_heading' label='Section 1 heading' desc='Enter the section 1 heading here' type='text'>Networking</cms:editable>
	<cms:editable name='section_1_desc' label='Section 1 description' desc='Enter the section 1 description here' type='text'>We as a company reach out to many artists and performers of different music genres within the UK and abroad and we negotiate event deals. </cms:editable>
	<cms:editable name='section_2_heading' label='Section 2 heading' desc='Enter the section 2 heading here' type='text'>Partners</cms:editable>
	<cms:editable name='section_2_desc' label='Section 2 description' desc='Enter the section 2 description here' type='text'>Occasionally we partner with other event promoters around the UK. There is also room for investors and sponsors who are interested in working with us.</cms:editable>
	<cms:editable name='section_3_heading' label='Section 3 heading' desc='Enter the section 3 heading here' type='text'>Diversity</cms:editable>
	<cms:editable name='section_3_desc' label='Section 3 description' desc='Enter the section 3 description here' type='text'>We are quite diversed in our taste and look to set a stage where we can showcase individual talents of the community like dress makers, artists, painters, and even bakers.</cms:editable>
	<cms:editable name='section_4_heading' label='Section 4 heading' desc='Enter the section 4 heading here' type='text'>Feedback</cms:editable>
	<cms:editable name='section_4_desc' label='Section 4 description' desc='Enter the section 4 description here' type='text'>We have received lots of positive feedback from our customers as well as the artists we have engaged with. This has encouraged us to work harder to bring more entertainment.</cms:editable>
	<cms:editable name='latest_evt_img' label='Latest event image' desc='Upload the latest event image here - 960x720' crop='1' width='960' height='720' type='image'>img/latest_event.jpg</cms:editable>
	<cms:editable name='latest_evt_desc' label='Latest event image description' desc='Enter a short description for the latest event image here'type='text'>Our most recent event flyer</cms:editable>
	<cms:editable name='latest_evt_link' label='Latest event link' desc='Change the link to the latest event here' type='text'>event/3/</cms:editable>
	<cms:editable name='fb_footer' label='Facebook button' desc='Change the link to the Facebook button here' type='text'>http://facebook.com/ted.rainmaker.14/</cms:editable>
	<cms:editable name='ins_footer' label='Instagram button' desc='Change the link to the Instagram button here' type='text'>https://instagram.com/rainmakersents/</cms:editable>
	<cms:editable name='hide_event_schedule' label='Hide event schedule' desc='Leave blank or enter "none"' type='text'/>
</cms:template>

<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="en-US">
<!--<![endif]-->

<head>
    <base href="<cms:show k_site_link />" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>RainMakers Ents</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3Aregular%2C%2C400%2C700%2C900%7CRaleway%3A800%2C%2C400%2C700%2C900%7CRaleway%3A400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A400%2C700%7CRaleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap" />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='stylesheet' id='elementor-frontend-css' href='css/frontend.min-2.7.5.css' type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-css' href='fontawesome-5.13.0/css/all.min.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' id='elementor-post-1225-css' href='css/post.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css' href='css/bootstrap.min.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='css/master.css' type='text/css' media='all' />
    <link data-minify="1" rel='stylesheet' href='css/make.css' type='text/css' media='all' />

    <script type='text/javascript' src='js/jquery-1.12.4.js'></script>
</head>

<body class="home page-template page-template-template page-template-homepage-template page-template-templatehomepage-template-php page page-id-10 sidebar-active elementor-default elementor-page elementor-page-10">
    <header id="header" class="header header-transparent navbar-fixed ">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-6 align-self-center">
                    <a class="navbar-brand logo" href="<cms:show k_site_link />"> <img src="<cms:show logo/>" alt="RainMakers Ents"> </a>
                </div>
                <div class="col-lg-9">
                    <nav class="navbar navbar-light xs-navbar navbar-expand-lg">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primary-nav" aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span> </button>
                        <div id="primary-nav" class="collapse navbar-collapse justify-content-end">
                            <ul id="main-menu" class="navbar-nav main-menu">
                                <li id="menu-item-12" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-12">
                                    <a href="/" class="nav-link">Home</a>
                                </li>
                                <li id="menu-item-996" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-996">
                                    <a href="gallery/" class="nav-link">Gallery</a>
                                </li>
                                <li id="menu-item-1291" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1291">
                                    <a href="faq/" class="nav-link">FAQ</a>
                                </li>
                                <li id="menu-item-1312" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1312">
                                    <a href="contact/" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div data-elementor-id="10" class="elementor elementor-10" data-elementor-settings="[]">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">
                <section class="elementor-element elementor-element-74b4374 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="74b4374" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-background-overlay"></div>
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div style="width: inherit;text-align: center;" class="elementor-element elementor-element-d8ef783 elementor-column elementor-top-column" data-id="d8ef783" data-element_type="column">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-cba9f61 elementor-invisible elementor-widget elementor-widget-heading" data-id="cba9f61" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:350}"
                                             data-widget_type="heading.default">
                                            <div class="elementor-widget-container">
                                                <h1></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="elementor-element elementor-element-c701876 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="c701876" data-element_type="section"
                         data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-41e946f elementor-invisible elementor-column elementor-col-50 elementor-top-column" data-id="41e946f" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;,&quot;animation_delay&quot;:350}">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-2b28455 elementor-widget" data-id="2b28455">
                                            <div class="elementor-widget-container">
                                                <div class="title-section-area">
                                                    <h2 class="section-title"> <span class="sub-title"><cms:show about_heading /></span><cms:show about_subheading /></h2> <span class="title-shape"> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='71px' height='11px'> <path fill-rule='evenodd' d='M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z' /></svg> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-bcadc1a elementor-widget elementor-widget-text-editor" data-id="bcadc1a" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-text-editor elementor-clearfix">
                                                    <p><cms:show about_desc /></p>
                                                    <p></p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-9f69302 elementor-invisible elementor-column elementor-col-50 elementor-top-column" data-id="9f69302" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;,&quot;animation_delay&quot;:400}">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <section class="elementor-element elementor-element-2013f71 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section" data-id="2013f71" data-element_type="section">
                                            <div class="elementor-container elementor-column-gap-default">
                                                <div class="elementor-row">
                                                    <div class="elementor-element elementor-element-b25ce21 elementor-column elementor-col-50 elementor-inner-column" data-id="b25ce21" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-fd85a8d elementor-widget" data-id="fd85a8d">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="single-intro-text mb-70">
                                                                            <i class="fas fa-project-diagram"></i>
                                                                            <h3 class="ts-title"><cms:show section_1_heading/></h3>
                                                                            <p><cms:show section_1_desc/> <span style="color:white">artists, painters, and even bakers</span></p> <span class="count-number">1</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-aa40d3c elementor-widget" data-id="aa40d3c">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="single-intro-text mb-70">
                                                                            <i class="far fa-handshake"></i>
                                                                            <h3 class="ts-title"><cms:show section_2_heading/></h3>
                                                                            <p><cms:show section_2_desc/></p> <span class="count-number">2</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-91fa378 elementor-column elementor-col-50 elementor-inner-column" data-id="91fa378" data-element_type="column">
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-9348095 elementor-widget" data-id="9348095">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="single-intro-text mb-70">
                                                                            <i class="fas fa-user-friends"></i>
                                                                            <h3 class="ts-title"><cms:show section_3_heading/></h3>
                                                                            <p><cms:show section_3_desc/></p> <span class="count-number">3</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-92fd812 elementor-widget" data-id="92fd812">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="single-intro-text mb-70">
                                                                            <i class="fas fa-glass-cheers"></i>
                                                                            <h3 class="ts-title"><cms:show section_4_heading/></h3>
                                                                            <p><cms:show section_4_desc/></p> <span class="count-number">4</span>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="elementor-element elementor-element-98c2f34 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="98c2f34" data-element_type="section"
                         data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-background-overlay"></div>
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-339f754 elementor-column elementor-col-100 elementor-top-column" data-id="339f754" data-element_type="column">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-e7c3329 elementor-invisible elementor-widget" data-id="e7c3329" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:350}">
                                            <div class="elementor-widget-container">
                                                <div class="title-section-area">
                                                    <h2 class="section-title"> <span class="sub-title">Our Latest</span> E V E N T</h2> <span class="title-shape"> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='71px' height='11px'> <path fill-rule='evenodd' d='M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z' /></svg> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <section class="elementor-element elementor-element-8117a13 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible elementor-section elementor-inner-section"
                                                 data-id="8117a13" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;slideInUp&quot;,&quot;animation_delay&quot;:450}">
                                            <div class="elementor-container elementor-column-gap-default">
                                                <div class="elementor-row">
                                                    <div class="elementor-element elementor-element-cc981eb elementor-column elementor-col-100 elementor-inner-column" data-id="cc981eb" data-element_type="column">
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-3c583e9 elementor-widget" data-id="3c583e9" data-element_type="widget">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="ts-speaker" style="--speaker-color: #25CD44">
                                                                            <div class="speaker-img">
                                                                                <img width="960" height="720" src="<cms:show latest_evt_img/>" class="img-fluid" alt="<cms:show latest_evt_desc/>" srcset="img/latest_event.jpg 960w, img/latest_event-150x150.jpg 150w, img/latest_event-300x300.jpg 300w"
                                                                                     sizes="(max-width: 960px) 100vw, 720px" />
                                                                                <a href="<cms:show latest_evt_link/>" class="view-speaker">
                                                                                    <i class="fas fa-plus"></i>
                                                                                </a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="schedule-background elementor-element elementor-element-cd2b7bf elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="cd2b7bf" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-a120daa elementor-column elementor-col-100 elementor-top-column" data-id="a120daa" data-element_type="column">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap" style="display:<cms:show hide_event_schedule/>;">
                                        <div class="elementor-element elementor-element-e7c3329 elementor-invisible elementor-widget" data-id="e7c3329" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:350}">
                                            <div class="elementor-widget-container">
                                                <div class="title-section-area">
                                                    <h2 class="section-title"> <span class="sub-title">Our Event</span>SCHEDULE</h2> <span class="title-shape"> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='71px' height='11px'> <path fill-rule='evenodd' d='M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z' /></svg> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-a0c8512 elementor-widget" data-id="a0c8512" data-element_type="widget">
                                            <div class="elementor-widget-container">
                                                <section class="ts-schedule">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="tab-content schedule-tabs">
                                                                    <div role="tabpanel" class="tab-pane active" id="date1">
                                                                        
																		<cms:pages masterpage='events.php'>
                                                                            <div class="schedule-listing">
                                                                                <div class="schedule-slot-time"> <span><cms:show event_day/></span> <span><cms:show event_date/></span> <span><cms:show event_time/></span></div>
                                                                                <div class="schedule-slot-info">
                                                                                    <a href="<cms:show k_page_link/>"> <img class="schedule-slot-speakers" src="<cms:show event_thumb/>" alt="<cms:show event_thumb_desc/>"/> </a>
                                                                                    <div class="schedule-slot-info-content">
                                                                                        <p class="schedule-speaker speaker-1"> <cms:show event_town/></p>
                                                                                        <a href="<cms:show k_page_link/>"><h3 class="schedule-slot-title"> <cms:show event_title/></h3></a>
                                                                                        <p>
                                                                                        <p><cms:show event_summary/></p>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
																		</cms:pages>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
    <script type='text/javascript' src='js/bootstrap.min.js'></script>
    <script type='text/javascript' src='js/script.js'></script>
    <script type='text/javascript' src='js/frontend-modules.min-2.7.5.js'></script>
    <script type='text/javascript' src='js/lib/waypoints/waypoints.min-4.0.2.js'></script>
    <script type='text/javascript'>
        var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "version": "2.7.5", "urls": { "assets": "localhost:\/\/wp-content\/plugins\/elementor\/assets\/" }, "settings": { "page": [], "general": { "elementor_global_image_lightbox": "yes", "elementor_enable_lightbox_in_editor": "yes" } }, "post": { "id": 1225, "title": "Contact", "excerpt": "" } };
    </script>
    <script type='text/javascript' src='js/frontend.min-2.7.5.js'></script>
</body>

</html>
<?php COUCH::invoke(); ?>