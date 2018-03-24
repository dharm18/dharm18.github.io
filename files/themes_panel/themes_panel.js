$(window).load(function() {
	jQuery('#themes_panel').animate({opacity:1},400); 
});

$.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


jQuery(function(){

	
	
	/* Show or hide themes panel
	----------------------------------------------------------*/
	themes_panel_width = jQuery('#themes_menu').outerWidth();
	
	jQuery('#themes_panel').css('left', 0);
	jQuery('#themes_panel').animate({left: -themes_panel_width}, 400);
	
	jQuery('#toggle_button').click(function() {

		var themes_panel = jQuery(this).parent();
		themes_panel.animate({
		  left: parseInt(themes_panel.css('left'),10) == 0 ? -themes_panel_width : 0
		}, 400);
		
		return false;
	});
	
	

	/* If cookie exists, apply classes from cookie
	----------------------------------------------------------*/
	if ($.cookie('layout_style') != null)	{
		$.cookie('layout_style',$.cookie('layout_style'),{ expires: 0, path: '/'});
		var current = $.cookie('layout_style');
			
		if(current == 'color-block') {
		$('body .parallax').each(function(){
			parallaxContainer=$(this);
			parallaxContent = parallaxContainer.find('.parallax-content');  
			parallaxContent.removeClass('parallax-content').addClass('color-block-content');
			parallaxContainer.removeClass('parallax').addClass('color-block');			
		});
		} else {
		$('body .color-block').each(function(){
			parallaxContainer=$(this);
			parallaxContent = parallaxContainer.find('.color-block-content');  
			parallaxContent.removeClass('color-block-content').addClass('parallax-content');
			parallaxContainer.removeClass('color-block').addClass('parallax');			
		});
		}
		
	
    }

	/* If cookie exists, apply classes from cookie
	----------------------------------------------------------*/
	if ($.cookie('layout_color') != null)	{
		$.cookie('layout_color',$.cookie('layout_color'),{ expires: 0, path: '/'});
        jQuery('#layout_color').attr('href', 'css/' + $.cookie('layout_color') + '.css');			

   }
   
	/* If cookie exists, apply classes from cookie
	----------------------------------------------------------*/
	if ($.cookie('menu_style') != null)	{
		$.cookie('menu_style',$.cookie('menu_style'),{ expires: 0, path: '/'});
		var current = $.cookie('menu_style');
			
		if(current == 'large') {
		   $('body .main-menu, .logo').removeClass('small').addClass('large');
		} else {
           $('body .main-menu, .logo').removeClass('large').addClass('small');
		}
		
	
    }   

	/* If cookie exists, apply classes from cookie
	----------------------------------------------------------*/	
	if ($.cookie('menu_color') != null)	{
		$.cookie('menu_color',$.cookie('menu_color'),{ expires: 0, path: '/'});
		var current_color = $.cookie('menu_color');
			
		if(current_color == 'dark') {
		   $('.page-wrap nav').removeClass('light').addClass('dark');
		} else {
           $('.page-wrap nav').removeClass('dark').addClass('light');
		}	
}

	/* If cookie exists, apply classes from cookie
	----------------------------------------------------------*/
	if ($.cookie('skin') != null)	{
		$.cookie('skin',$.cookie('skin'),{ expires: 0, path: '/'});
		jQuery('#primary_color_scheme').attr('href', 'css/colors/' + $.cookie('skin') + '.css');	
    }












	/* Change Theme Layout Style(Boxed or full Width) on click and set cookie
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.theme.cookie_layout_style li a').click(function(){
		var c_layout_style = jQuery(this).attr('title');		
		$.cookie('layout_style', c_layout_style, { expires: 0, path: '/'});			
		if(c_layout_style == 'color-block') {
		$('body .parallax').each(function(){
			parallaxContainer=$(this);
			parallaxContent = parallaxContainer.find('.parallax-content');  
			parallaxContent.removeClass('parallax-content').addClass('color-block-content');
			parallaxContainer.removeClass('parallax').addClass('color-block');			
		});
		} else {
		$('body .color-block').each(function(){
			parallaxContainer=$(this);
			parallaxContent = parallaxContainer.find('.color-block-content');  
			parallaxContent.removeClass('color-block-content').addClass('parallax-content');
			parallaxContainer.removeClass('color-block').addClass('parallax');			
		});
		}				
	  	return false;
    });	
	
	


	/* Change Theme Layout Color(Default, Dark and Light) on click and set cookie
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.theme.cookie_layout_color li a').click(function(){
		var c_layout_color = jQuery(this).attr('title');		
		$.cookie('layout_color', c_layout_color, { expires: 0, path: '/'});		
		jQuery('#layout_color').attr('href', 'css/' + c_layout_color + '.css');				
	  	return false;
    });	
	

	/* Change Theme Layout Style(Boxed or full Width) on click and set cookie
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.theme.cookie_menu_style li a').click(function(){
		var c_menu_style = jQuery(this).attr('title');		
		$.cookie('menu_style', c_menu_style, { expires: 0, path: '/'});			
		if(c_menu_style == 'large') {
		   $('body .main-menu, .logo').removeClass('small').addClass('large');
		} else {
           $('body .main-menu, .logo').removeClass('large').addClass('small');
		}				
	  	return false;
    });

	
	/* Change Theme Colors on click and set cookie
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.theme.cookie_colors li a').click(function(){
		var c_skin = jQuery(this).attr('title');		
		$.cookie('skin', c_skin, { expires: 0, path: '/'});		
		jQuery('#primary_color_scheme').attr('href', 'css/colors/' + c_skin + '.css');				
	  	return false;
    });	

	
	/* Change theme colors on click and set cookie
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.theme.cookie_menu_color li a').click(function(){
		var c_menu_color = jQuery(this).attr('title');		
		$.cookie('menu_color', c_menu_color, { expires: 0, path: '/'});		
		if(c_menu_color == 'dark') {
		   $('.main-menu-wrapper nav').removeClass('light').addClass('dark');
		} if(c_menu_color == 'light') {
           $('.main-menu-wrapper nav').removeClass('dark').addClass('light');
		}			
	  	return false;
    });	
	
	

	
	

	/* Reset to Default
	----------------------------------------------------------*/
	jQuery('.reset').click(function(){
		$.cookie('layout_style', null, { expires: 0, path: '/'});
		$.cookie('layout_color', null, { expires: 0, path: '/'});
		$.cookie('skin', null, { expires: 0, path: '/'});
		$.cookie('pattern', null, { expires: 0, path: '/'});						
		location.reload();
	});
	
});