<html>
<head>
	<meta http-equiv=X-UA-Compatible content="IE=edge">
	<meta content="initial-scale=1, width=device-width" name=viewport>

	<?php wp_head(); ?>
</head>
<body>
<?php
if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();

        echo '<article id="post-' . get_the_ID() . '">';

        if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
            the_post_thumbnail();
        }

        the_title( '<h3>', '</h3>' );
        the_content();

        echo '</article>';
    }
}
wp_footer();
?>
</body>
</html>