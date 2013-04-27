var StrViz = {};

StrViz.visualize = function(string, positions) {
	var i = 0;
	var letterWidth = 0;
	var boxMaxHeight = 0;
	var boxHtml = '';
	var $container;
	var $text;
	var $boxes;
	var $box;

	// Find empty StrViz container
	$('.StrVizContainer').each(function() {
		if($(this).is(':empty')) {
			$container = $(this);
			return false;
		}
		return true;
	});

	// No empty container -> Append new container to body
	if(!$container) {
		$container = $('<div class="StrVizContainer">').appendTo('body');
	}

	// Add string to container
	$text = $('<span class="StrVizText" />').appendTo($container);
	$text.text(string);

	// Create wrapper for all boxes
	$boxes = $('<div class="StrVizBoxes" />').appendTo($container);

	// Calculate width of a single letter 
	letterWidth = ($text.width()/string.length);

	// Add a box for each point
	for(i=0; i<positions.length; i++) {
		boxHtml = positions[i].position+"<br />\n"+positions[i].text;

		// Add box
		$box = $('<span class="StrVizBox" />').appendTo($boxes);
		$box.html(boxHtml).css({
			'left': (letterWidth*positions[i].position)+'px'
		});

		// Get highest box value
		if($box.height() > boxMaxHeight) boxMaxHeight = $box.height();
	}

	// Set height of container
	$container.height($text.height() + boxMaxHeight);
};