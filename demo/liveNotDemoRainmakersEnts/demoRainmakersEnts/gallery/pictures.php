<?php require_once( '../content-managed-back-office/cms.php' ); ?>
<cms:template title='Pictures' clonable='1'>
    <cms:editable name='gallery_img' label='Gallery image' desc='Upload the image here - 960x640' type='image'/>
    <cms:editable name='gallery_img_desc' label='Gallery image description' desc='Enter a short image description here' type='text'/>
</cms:template>
<cms:if k_is_page >

<!DOCTYPE html>
<html>
<head>
    <base href="<cms:show k_site_link />" />
    <meta charset="utf-8" />
    <title><cms:show k_page_title /> - Picture</title>
</head>
<body>

</body>
</html>
</cms:if>
<?php COUCH::invoke(); ?>