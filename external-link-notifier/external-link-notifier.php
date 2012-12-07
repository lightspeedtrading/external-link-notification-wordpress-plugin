<?php
/**
* Plugin Name: External-Link-Notifier
* Description: Creates confirmation modal windows for external links.
* Version: 1.0
* Author: Lightspeed
* Author URI: http://www.lightspeed.com/
* License: MIT
* Copyright: 2001-2012 Lightspeed Financial, Inc.
**/
class ExternalLinkNotifier
{
    public function activate()
	{
		// activation code
	}

	public function enqueueInit()
	{
		wp_enqueue_script('jquery');
		wp_enqueue_script('lsexl', WP_CONTENT_URL . '/plugins/external-link-notifier/external-link-notifier.js', array('jquery'), '1.0.0', true);
		wp_enqueue_style('external-link-notifier', WP_CONTENT_URL . '/plugins/external-link-notifier/external-link-notifier.css');
	}
}

// instance
$externallinknotifier = new ExternalLinkNotifier();

// hooks
register_activation_hook(__file__, array($externallinknotifier, 'activate'));

// actions
add_action('wp_enqueue_scripts', array($externallinknotifier, 'enqueueInit'));
?>
