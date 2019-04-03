$(document).ready(function () {
    M.AutoInit();
	
	// SETUP VARIABLES
	// ============================================
	var home = $('#homepage');
	var about = $('#aboutpage');
	var skills = $('#skillspage');
	var port = $('#portpage');
	var contact = $('#contactpage');
	
	var hLink = $('#home');
	var aLink = $('#about');
	var sLink = $('#skills');
	var pLink = $('#portfolio');
	var cLink = $('#contact');
	
	// MAIN PROCESS
	// ============================================	
	home.addClass('animated rollIn fast').show();
	$('.tagline').addClass('animated rubberBand').show();
	setTimeout(changeFont, 1400);
	
	// MOUSE OVER EVENTS
	$('.nav-icon').mouseover(function(event) {
		var title = $(this).data('name');
		$(this).html(title).addClass('menu-text').removeClass('material-icons');
	}).mouseout(function(){
		if ($(this).hasClass('selected')) {
			title = $(this).data('name');
			$(this).html(title);
		} else {
			var icon = $(this).data('icon');
			$(this).html(icon).removeClass('menu-text').addClass('material-icons');
		};
	});
	
	$('.nav-name').mouseover(function(event) {
		var title = $(this).data('line');
		$(this).html(title);
	}).mouseout(function(){
		if ($(this).hasClass('selected')) {
			title = $(this).data('line');
			$(this).html(title);
		} else {
			var name = $(this).data('name');
			$(this).html(name);
		};
	});
	
	$('.responsive-img').mouseover(function(event) {
		$(this).addClass('jello').removeClass('lightSpeedIn slow slower fast faster delay-1s delay-2s');
	}).mouseout(function(){
		$(this).removeClass('jello');
	});

	// CLICK EVENTS
	$('.nav-icon').on('click', function() {;
		$('.nav-icon').removeClass('selected');
		hideNavItems();
		var title = $(this).data('name');
		$(this).addClass('selected').html(title).addClass('menu-text').removeClass('material-icons');
	});
	
	$('.nav-name').on('click', function() {;
		$('.nav-name').removeClass('selected');
		$('#about-side').html($('#about-side').data('name'));
		$('#skills-side').html($('#skills-side').data('name'));
		$('#port-side').html($('#port-side').data('name'));
		$('#contact-side').html($('#contact-side').data('name'));
		var title = $(this).data('line');
		$(this).addClass('selected').html(title);
	});
	
	$('#home').on('click', function () {
		$('.nav-icon').removeClass('selected');
		hideNavItems();
		$('section').hide();
		home.show();
	});	
	
	$(document).on('click', '.responsive-img', function () {
		var link = $(this).data('link');
		var url = $(this).attr('src');
		var modal = $(this).data('target');
		showModal(link, url, modal);
	});
	
	$(document).on('click', '.nav-icon, .nav-name', showSection);

	// FUNCTIONS
	// ============================================
	function showSection () {
		var linkName = $(this).data('name');
		$('section').addClass('animated fast').hide();
		
		if (linkName === 'Home') {
			home.addClass('bounceInDown').show();
		};
		if (linkName === 'About') {
			about.addClass('bounceInDown').show();
		};
		if (linkName === 'Skills') {
			skills.addClass('bounceInDown').show();
		};
		if (linkName === 'Portfolio') {
			port.addClass('bounceInDown').show();
		};
		if (linkName === 'Contact') {
			contact.addClass('bounceInDown').show();
		};
	};
	
	function hideNavItems () {
		aLink.html(aLink.data('icon')).addClass('material-icons').removeClass('menu-text');
		sLink.html(sLink.data('icon')).addClass('material-icons').removeClass('menu-text');
		pLink.html(pLink.data('icon')).addClass('material-icons').removeClass('menu-text');
		cLink.html(cLink.data('icon')).addClass('material-icons').removeClass('menu-text');
	};
	
	function showModal (link, url, modal) {	
		var content = $('<div>').addClass('modal-content center-align');
		var img = $(`<img src="${url}">`).addClass('z-depth-3');
		var p = $('<p>').text('sample text');
		var a = $(`<a href="${link}" target="_blank"></a>`).addClass('waves-effect waves-light btn');
		a.html('<i class="material-icons right">open_in_new</i>View');
		content.append(img, p, a);
		 $(`#${modal}`).html(content);
	};
	
	function changeFont () {
		$('.tagline').addClass('fun-font');
	};
});

