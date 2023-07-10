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
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <ul>
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                </ul>
                <img class="modal-close-btn" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/close-burger.png' ?>" alt="close modal">
                <div class="modal">
                    <div class="modal-content">
                        <div class="modal-nav" >
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/burgerm-logo.png' ?>" alt="logo">
                            </a>
                            <ul>
                                <li><a href="#story">Histoire</a></li>
                                <li><a href="#characters">Personnages</a></li>
                                <li><a href="#place">Lieu</a></li>
                                <li><a href="#studio">Studio Koukaki</a></li>
                            </ul>
                        </div>
                        <img class="modal-flower-1" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orchid.png' ?>" alt="orchid">
                        <img class="modal-cat-1" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/blue-cat.png' ?>" alt="blue cat">
                        <img class="modal-flower-2" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Sunflower.png' ?>" alt="Sunflower">
                        <img class="modal-flower-3" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/stars-flower.png' ?>" alt="flower">
                        <img class="modal-flower-4" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/small-p-flower.png' ?>" alt="small flower">
                        <img class="modal-cat-2" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/gray-cat.png' ?>" alt="gray-cat">
                        <img class="modal-cat-3" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/yellow-cat.png' ?>" alt="yellow cat">
                        <img class="modal-flower-5" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/hibiscus-footer.png' ?>" alt="hibiscus">
                    </div>
                </div>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->