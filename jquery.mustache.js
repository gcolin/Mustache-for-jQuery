/**
 * by Gael COLIN
 * license BSD 2
 **/

(function($){
	
	var templates = {};
	
	$.mustachePath = "js/";
	
	$.setMustacheTemplate = function(template,value){
		templates[template] = value;
	};
	
	$.getMustacheTemplate = function(path){
		if(!templates[path]){
			$.ajax({
				async : false,
				dataType : "text",
				url : $.mustachePath + path.replace(".","/") + ".html",
				success : function(data){
					templates[path] = data;
				}
			});
		}
		return templates[path];
	};
	
	$.fn.mustache = function(template, view, partials, send_fun){
		return $.mustache(template, view, partials, send_fun).appendTo(this);
	};
	
	$.mustache = function(template, view, partials, send_fun){
		return $(Mustache.to_html($.getMustacheTemplate(template),view, partials, send_fun));
	};
	
})(jQuery);