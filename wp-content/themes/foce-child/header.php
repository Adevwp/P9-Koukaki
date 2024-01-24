<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
        <nav id="site-navigation" class="main-navigation">

            <div class="site-title">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            </div>

            <div class="burger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="fullscreen-menu">
                <ul>
                    <li><a href="#story">Histoire</a></li>
                    <li><a href="#characters">Personnages</a></li>
                    <li><a href="#place">Lieu</a></li>
                    <li><a href="#studio">Studio Koukaki</a></li>
                </ul>
                <p>STUDIO KOUKAKI</p>
            </div>

            <img class= "menu-sunflower" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/sunflower.png'; ?> "alt="Tournesol">
            <img class= "menu-hibiscus" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Hibiscus.png'; ?> "alt="Fleur d'hisbicus">
            <img class= "menu-flower" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/flower.png'; ?> " alt="Fleur orange">
            <img class= "menu-orchid" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orchid.png'; ?> "alt="Orchidée">
            <img class= "menu-random" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/random_flower.png'; ?> "alt="Fleur violette">
            <img class= "menu-jaakuna" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu-jaakuna.png'; ?> "alt="Le chat Jaakuna">
            <img class= "menu-kawaneko" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu-kawaneko.png'; ?> "alt="Le chat Kawaneko">
            <img class= "menu-onejiiro" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu-onejiiro.png'; ?> "alt="Le chat Onejiiro">

		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
