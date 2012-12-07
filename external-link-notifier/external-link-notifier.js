/**
 * Plugin Name: External-Link-Notifier
 * Version: 1.0
 * Author: Lightspeed
 * Author URI: http://www.lightspeed.com/
 * License: MIT
 * Copyright: 2001-2012 Lightspeed Financial, Inc.
 */

jQuery(document).ready( function($) {
	// add modal
	var html = '<div id="lsexlwin">';
	html += '<div id="lsexloverlay">&nbsp;</div>';
	html += '<div id="lsexlvoff">';
	html += '<div id="lsexlcont">';
	html += '<div id="lsexlcontinner">';
	html += '<span>You are about to leave <b>' + window.location.hostname + '.</span><br>';
	html += 'You will be automatically redirected to the new address in <span>5</span> seconds.';
	html += '<div id="lsexlbtc">';
	html += '<div id="lsexlbtnc">Cancel</div>  <div id="lsexlbtn">OK</div> <div style="clear:both;"></div>';
	html += '</div></div></div></div></div>';
	var $html = $(html);
	$('body').append($html);
	
	// setup Lsexl
	$("a[href*='http://']:not([href*='"+location.hostname.replace
           ("www.","")+"'])").on("click", function(event){
		event.preventDefault();
		var count = 5;
		
		var $link = $(this).attr('href');
		$(#lsexlcontinner span).text('You are about to leave <b>' + window.location.hostname + '</b> to visit <b>' + $(link) + '</b>.');
		$html.show(170, "linear", function(){
			// add timer
			var counter = $html.find('#lsexlcontinner span');
			var lstimer = setInterval(function(){
				count--;
				counter.html(count.toString());
				if (count === 0) {
					$html.hide();
					window.location = $link;
				}
			}, 1000);
			// add cancel button
			$(this).find('#lsexlbtnc').on("click", function(){
				clearInterval(lstimer);
				count = 5; counter.html('5');
				$(this).off("click");
				$html.find('#lsexlbtnc,#lsexlbtn').off("mouseover");
				$html.find('#lsexlbtnc,#lsexlbtn').off("mouseout");
				$html.find('#lsexlbtnc,#lsexlbtn').removeClass('lsexlmouseover');
				$html.hide();
			});
			// add ok button
			$(this).find('#lsexlbtn').on("click", function(){
				$(this).off("click");
				$html.hide();
				window.location = $link;
			});
			// makeup
			$(this).find('#lsexlbtnc,#lsexlbtn').on("mouseover", function(){
				$(this).addClass('lsexlmouseover');
			});
			$(this).find('#lsexlbtnc,#lsexlbtn').on("mouseout", function(){
				$(this).removeClass('lsexlmouseover');
			});
		});
	});
});