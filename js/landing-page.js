// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

imgElements = document.getElementsByClassName('trump-img')

for (var i = 0; i < imgElements.length; i++) {
   imgElements[i].innerHTML = '<img src="https://trumps.lol/' + Math.floor(Math.random() * 30) + '.gif"></img>';
}

bgElements = document.getElementsByClassName('trump-bg')

for (var i = 0; i < bgElements.length; i++) {
   bgElements[i].style.background = 'url(https://trumps.lol/' + Math.floor(Math.random() * 30) + '.gif) no-repeat center center';
   bgElements[i].style['background-size'] = 'cover';
}
