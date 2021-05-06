<?php require_once( 'the-digital-bee/cms.php' ); ?>
<cms:template title='Main Page' />
<!DOCTYPE html>
<html>
<head>
    <base href = "<cms:show k_site_link />" />
    <title>Hidden No More Cameroon</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/w3.css">
    <link rel="stylesheet" href="css/raleway.css">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/functions.js"></script>
</head>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" class="w3-bar-item w3-button w3-wide">HOME</a>
    <!-- Right-sided navbar links -->
    <div class="w3-right w3-hide-small">
      <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
      <a href="#members" class="w3-bar-item w3-button"><i class="fa fa-user"></i> MEMBERS</a>
      <a href="#gallery" class="w3-bar-item w3-button"><i class="fa fa-th"></i> GALLERY</a>
      <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
    </div>
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>

<!-- Sidebar on small screens when clicking the menu icon -->
<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT</a>
  <a href="#members" onclick="w3_close()" class="w3-bar-item w3-button">MEMBERS</a>
  <a href="#gallery" onclick="w3_close()" class="w3-bar-item w3-button">GALLERY</a>
  <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
</nav>

<!-- Header with full-height image -->
<header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
  <div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:24px 48px">
    <a href="<cms:editable name='fb_header' label='Facebook Button - Header' desc='Change the link to the social media button here' type='text'>https://www.facebook.com/Hidden-No-More-Cameroon-HNM237-211181522975178/</cms:editable>"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
    <a href="<cms:editable name='ins_header' label='Instagram Button - Header' desc='Change the link to the social media button here' type='text'>https://www.instagram.com/hnm_237/</cms:editable>"><i class="fa fa-instagram w3-hover-opacity"></i></a>
  </div>
</header>

<!-- About Section -->
<div class="w3-container w3-light-grey" style="padding:128px 16px" id="about">
  <h3 class="w3-center">ABOUT US</h3>
  <p class="w3-center w3-large"><cms:editable name='about' label='ABOUT US' desc='Change the ABOUT US text here' type='text'>Our mission statement is to bridge a forecasted gap in the professional and gender vacuum of the girls/women in STEM by 2035 to provide them a competitive advantage in the job market.</cms:editable></p>
  <div class="w3-row-padding w3-center" style="margin-top:64px">
    <div class="w3-third">
      <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Empower</p>
      <p><cms:editable name='empower' label='Empower' desc='Change the Empower text here' type='text'>Carry out activities to encourage primary school girls to take STEM courses at College and University.</cms:editable></p>
    </div>
    <div class="w3-third">
      <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Grow</p>
      <p><cms:editable name='grow' label='Grow' desc='Change the Grow text here' type='text'>Create a pool of role models and a network of mentors and promote STEM girl mentoring in Colleges and Universities.</cms:editable>
      </p>
    </div>
    <div class="w3-third">
      <i class="fa fa-graduation-cap w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Celebrate</p>
      <p><cms:editable name='celebrate' label='Celebrate' desc='Change the Celebrate text here' type='text'>Celebrate the achievements of Cameroonian STEM women and girls.</cms:editable>
      </p>
    </div>
  </div>
</div>

<!-- Promo Section - "We know design" -->
<div class="w3-container" style="padding:128px 16px">
  <div class="w3-row-padding">
    <div class="w3-col m6">
        <h3>Scholarship Scheme.</h3>
        <p>Hidden No More Cameroon is providing a fully-funded scholarship scheme that encourages primary school girls to take on STEM subjects at an earlier age and prior to secondary school. <a href="#contact">Contact us</a> to find out how to become a sponsor, mentor or volunteer.
        </p>
      <p><a href="<cms:editable name='application' label='Apply Now' desc='Add a link to the application form here' type='text'>#</cms:editable>" class="w3-button w3-black"><i class="fa fa-edit"> </i>Apply Now</a></p>
    </div>
    <div class="w3-col m6">
      <img class="w3-image w3-round-large" src="img/mission.jpg" alt="Buildings" width="700" height="394">
    </div>
  </div>
</div>

<!-- Team Section -->
<div class="w3-container w3-light-grey" style="padding:128px 16px" id="members">
    <h3 class="w3-center">OUR MEMBERS</h3>
    <p class="w3-center w3-large">Here are our active members</p>
    <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
	    <cms:pages masterpage='firstRow.php'>
			<div class="w3-col l6 m6 w3-margin-bottom">
				<div class="w3-card">
					<img src="<cms:show picture />" alt="<cms:show picture_description />" style="width:100%">
					<div class="w3-container">
						<h3><cms:show full_name /></h3>
						<p class="w3-opacity"><cms:show role /></p>
						<p><cms:show description /></p>
						<!--<p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>-->
					</div>
				</div>
			</div>
		</cms:pages>
    </div>

    <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
	    <cms:pages masterpage='secondRow.php'>
			<div class="w3-col l3 m6 w3-margin-bottom">
				<div class="w3-card">
					<img src="<cms:show picture />" alt="<cms:show picture_description />" style="width:100%">
					<div class="w3-container">
						<h3><cms:show full_name /></h3>
						<p class="w3-opacity"><cms:show role /></p>
						<p><cms:show description /></p>
					</div>
				</div>
			</div>
        </cms:pages>
    </div>
    <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
        <cms:pages masterpage='thirdRow.php'>
			<div class="w3-col l3 m6 w3-margin-bottom">
				<div class="w3-card">
					<img src="<cms:show picture />" alt="<cms:show picture_description />" style="width:100%">
					<div class="w3-container">
						<h3><cms:show full_name /></h3>
						<p class="w3-opacity"><cms:show role /></p>
						<p><cms:show description /></p>
					</div>
				</div>
			</div>
        </cms:pages>
    </div>
    <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
        <cms:pages masterpage='fourthRow.php'>
			<div class="w3-col l3 m6 w3-margin-bottom">
				<div class="w3-card">
					<img src="<cms:show picture />" alt="<cms:show picture_description />" style="width:100%">
					<div class="w3-container">
						<h3><cms:show full_name /></h3>
						<p class="w3-opacity"><cms:show role /></p>
						<p><cms:show description /></p>
					</div>
				</div>
			</div>
        </cms:pages>
    </div>
</div>

<!-- Promo Section "Statistics" -->
<div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
  <div class="w3-third">
    <span class="w3-xxlarge"><cms:editable name='sponsors' label='Sponsors' desc='Update the number of sponsors here' type='text'>1</cms:editable>+</span>
    <br>Sponsors
  </div>
  <div class="w3-third">
    <span class="w3-xxlarge"><cms:editable name='stem_activities' label='STEM Activities' desc='Update the number of STEM activities here' type='text'>2</cms:editable>+</span>
    <br>STEM Activities
  </div>
  <div class="w3-third">
    <span class="w3-xxlarge"><cms:editable name='mentors' label='Mentors' desc='Update the number of mentors here' type='text'>1</cms:editable>+</span>
    <br>Mentors
  </div>
</div>

<!-- Work Section -->
<div class="w3-container" style="padding:128px 16px" id="gallery">
  <h3 class="w3-center">GALLERY</h3>
  <p class="w3-center w3-large">Pictures from recent activities</p>

  <div class="w3-row-padding" style="margin-top:64px">
    <div class="w3-col l3 m6">
      <img src="img/gallery/1.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
    <div class="w3-col l3 m6">
      <img src="img/gallery/2.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
    <div class="w3-col l3 m6">
      <img src="img/gallery/3.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
    <div class="w3-col l3 m6">
      <img src="img/gallery/4.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
  </div>

  <div class="w3-row-padding w3-section">
    <div class="w3-col l3 m6">
      <img src="img/gallery/5.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
    <div class="w3-col l3 m6">
      <img src="img/gallery/6.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
    <div class="w3-col l3 m6">
      <img src="img/gallery/7.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
    <div class="w3-col l3 m6">
      <img src="img/gallery/8.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Edéa en Fête">
    </div>
  </div>
</div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>

<!-- Skills Section -->
<div class="w3-container w3-light-grey w3-padding-64">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>Our Targets.</h3>
      <p><br></p>
      <p><cms:editable name='target_1' label='Target 1' desc='Update the target text here' type='text'>Carry out at least two activities each year.</cms:editable><br>
      <cms:editable name='target_2' label='Target 2' desc='Update the target text here' type='text'>Mentor up to ten girls each year.</cms:editable><br>
      <cms:editable name='target_3' label='Target 3' desc='Update the target text here' type='text'>Sponsor at least ten girls each year.</cms:editable></p>
    </div>
    <div class="w3-col m6">
      <p class="w3-wide"><i class="fa fa-camera w3-margin-right"></i>Activities Carried Out</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:<cms:editable name='target_1_style' label='Activities Carried Out' desc='Update the percentage of activities carried out here' type='text'>100</cms:editable>%"><cms:editable name='target_1_value' label='Confirm Activities Carried Out' desc='Confirm the updated percentage of activities carried out here' type='text'>100</cms:editable>%</div>
      </div>
      <p class="w3-wide"><i class="fa fa-desktop w3-margin-right"></i>Girls Mentored</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:<cms:editable name='target_2_style' label='Girls Mentored' desc='Update the percentage of girls mentored here' type='text'>1</cms:editable>%"><cms:editable name='target_2_value' label='Confirm Girls Mentored' desc='Confirm the updated percentage of girls mentored here' type='text'>1</cms:editable>%</div>
      </div>
      <p class="w3-wide"><i class="fa fa-cog w3-margin-right"></i>Girls Sponsored</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:<cms:editable name='target_3_style' label='Girls Sponsored' desc='Update the percentage of girls sponsored here' type='text'>1</cms:editable>%"><cms:editable name='target_3_value' label='Confirm Girls Sponsored' desc='Confirm the updated percentage of girls sponsored here' type='text'>1</cms:editable>%</div>
      </div>
    </div>
  </div>
</div>


<!-- Contact Section -->
<div class="w3-container w3-dark-grey" style="padding:128px 16px" id="contact">
  <h3 class="w3-center">CONTACT</h3>
  <p class="w3-center w3-large">Contact us via the following:</p>
  <div class="w3-row-padding" style="margin-top:64px">
      <div class="w3-half">
          <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Edea, Cameroon</p>
          <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> <cms:editable name='phone' label='Phone' desc='Update phone number here' type='text'>(00 237) - 699829546</cms:editable></p>
          <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> <cms:editable name='email' label='Email' desc='Update email address here' type='text'>hiddennomorecameroon@gmail.com</cms:editable></p>
          <p><i class="fa fa-facebook-official fa-fw w3-xxlarge w3-margin-right"></i><a href="<cms:editable name='fb_contact' label='Facebook Button - Contact' desc='Change the link to the social media button here' type='text'>https://www.facebook.com/Hidden-No-More-Cameroon-HNM237-211181522975178/</cms:editable>">Facebook</a></p>
          <p><i class="fa fa-instagram fa-fw w3-xxlarge w3-margin-right"></i><a href="<cms:editable name='ins_contact' label='Instagram Button - Contact' desc='Change the link to the social media button here' type='text'>https://www.instagram.com/hnm_237/</cms:editable>">Instagram</a></p>
      <br>
      <form action="#" target="_blank">
          <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"></p>
          <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"></p>
          <p><input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"></p>
          <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"></p>
          <p>
              <button class="w3-button w3-black" type="submit">
                  <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
          </p>
          </form>
      </div>
    <div class="w3-half">
      <!-- Add Google Maps -->
      <!-- <div id="googleMap" class="w3-greyscale-max" style="width:100%;height:510px;"></div> -->
	  <div class="mapouter"><div class="gmap_canvas"><iframe  id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19492.170633783302!2d10.124685369125018!3d3.7950725659265885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10618ee0f2cee5d7%3A0xf49b1d7ac35e8489!2sEdea%2C+Cameroon!5e0!3m2!1sen!2suk!4v1534026298877" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="display: block;width: 100%;height: 550px;"></iframe><a href="#"></a></div><style>.mapouter{text-align:right;max-height:100%;max-width:100%;}.gmap_canvas {overflow:hidden;background:none!important;max-height:100%;max-width:100%;}</style></div>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-64">
  <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div class="w3-xlarge w3-section" style="margin-bottom: 80px!important;">
    <a href="<cms:editable name='fb_footer' label='Facebook Button - Footer' desc='Change the link to the social media button here' type='text'>https://www.facebook.com/Hidden-No-More-Cameroon-HNM237-211181522975178/</cms:editable>"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
    <a href="<cms:editable name='ins_footer' label='Instagram Button - Footer' desc='Change the link to the social media button here' type='text'>https://www.instagram.com/hnm_237/</cms:editable>"><i class="fa fa-instagram w3-hover-opacity"></i></a>
  </div>
  <p> <a href="#" title="FreelanceComputing" target="_blank" class="w3-hover-text-green"></a></p>
</footer>

</body>
</html>
<?php COUCH::invoke(); ?>