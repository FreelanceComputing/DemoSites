<?php require_once( 'the-digital-bee/cms.php' ); ?>
<cms:template title='Fourth Row' >
    <cms:editable name='full_name' label='Full Name' desc='Enter the full name here' type='text'/>
    <cms:editable name='role' label='Role' desc='Enter the role or position here' type='text'/>
    <cms:editable name='description' label='Description' desc='Enter the description here' type='text'/>
    <cms:editable name='picture_description' label='Picture Description' desc='Enter a short image description here' type='text'/>
    <cms:editable name='picture' label='Picture' desc='Upload the picture here' crop='1' width='500' height='333' type='image'/>
</cms:template>
<cms:if k_is_page >
<!DOCTYPE html>
<html>
<head>
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


        <div class="w3-col l6 m6 w3-margin-bottom">
            <div class="w3-card">
                <img src="<cms:show picture />" alt="<cms:show picture_description />" style="width:100%">
                <div class="w3-container">
                    <h3><cms:show full_name /></h3>
                    <p class="w3-opacity"><cms:show role /></p>
                    <p><cms:show description /></p>
                </div>
            </div>
        </div>


</body>
</html>
</cms:if>
<?php COUCH::invoke(); ?>