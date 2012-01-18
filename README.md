# Mustache for jQuery

# Setup

for using it, include the following dependencies :

* mustache.js from (https://github.com/janl/mustache.js)
* jquery

> Create a template in templates/hello.html

    <h1>hello {{name}}!</h1>


> in your javascript file, initialize the path

    $.mustachePath = "templates/"
	
	
> try it

    $("body").mustache("hello",{name:"mustache"}).hide().fadeIn();
	
	or
	
	$.mustache("hello",{name:"mustache"}).hide().appendTo($("body")).fadeIn();
