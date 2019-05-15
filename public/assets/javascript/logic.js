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
	$('.title').addClass('animated rubberBand').show();
	$('.tagline').addClass('animated fadeIn').show();
	$('.big-logo').addClass('animated fadeIn').show();
	setTimeout(changeFont, 1400);

	// MOUSE OVER EVENTS

	// Toggle nav text
	$('.nav-icon').mouseover(function (event) {
		var title = $(this).data('name');
		$(this).html(title).addClass('menu-text').removeClass('material-icons');
	}).mouseout(function () {
		if ($(this).hasClass('selected')) {
			title = $(this).data('name');
			$(this).html(title);
		} else {
			var icon = $(this).data('icon');
			$(this).html(icon).removeClass('menu-text').addClass('material-icons');
		};
	});

	// Toggle sidenav text
	$('.nav-name').mouseover(function (event) {
		var title = $(this).data('line');
		$(this).html(title);
	}).mouseout(function () {
		if ($(this).hasClass('selected')) {
			title = $(this).data('line');
			$(this).html(title);
		} else {
			var name = $(this).data('name');
			$(this).html(name);
		};
	});

	// Animate project image
	$('.responsive-img').mouseover(function (event) {
		$(this).addClass('animated jello faster').removeClass('lightSpeedIn slow slower fast faster delay-1s delay-2s').css('opacity', '1');
	}).mouseout(function () {
		$(this).removeClass('jello').css('opacity', '.8');
	});

	// CLICK EVENTS

	// Change nav item text
	$('.nav-icon').on('click', function () {
		;
		$('.nav-icon').removeClass('selected');
		revertNavItems();
		var title = $(this).data('name');
		$(this).addClass('selected').html(title).addClass('menu-text').removeClass('material-icons');
	});

	// Change sidebar item text
	$('.nav-name').on('click', function () {
		;
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
		revertNavItems();
		$('section').hide();
		home.show();
	});

	$('#skillspage a').on('click', function () {
		$('.test').addClass('grey-text').html(`<img src="assets/images/oreo.jpg"><p>This is my doggo, his name is Oreo.</p>`).toggle();
	});

	// Display modal of project
	$(document).on('click', '.responsive-img', function () {
		var title = $(this).data('title');
		var link = $(this).data('link');
		var link2 = $(this).data('code');
		var url = $(this).attr('src');
		var modal = $(this).data('target');
		showModal(title, link, link2, url, modal);
	});

	// Display referenced section
	$(document).on('click', '.nav-icon, .nav-name', showSection);

	// FUNCTIONS
	// ============================================
	function showSection() {
		var linkName = $(this).data('name');
		$('section').addClass('animated fast').hide();

		if (linkName === 'Home') {
			home.addClass('bounceInDown').show();
		};
		if (linkName === 'About') {
			about.addClass('bounceInUp').show();
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

	function revertNavItems() {
		aLink.html(aLink.data('icon')).addClass('material-icons').removeClass('menu-text');
		sLink.html(sLink.data('icon')).addClass('material-icons').removeClass('menu-text');
		pLink.html(pLink.data('icon')).addClass('material-icons').removeClass('menu-text');
		cLink.html(cLink.data('icon')).addClass('material-icons').removeClass('menu-text');
	};

	function showModal(title, link, link2, url, modal) {
		var content = $('<div>').addClass('modal-content center-align');
		var img = $(`<img src="${url}" class="z-depth-4"><br>`);
		var t = $('<h4>').text(title).addClass('fun-font');
		var a = $(`<a href="${link}" target="_blank" style="margin-left: 15px"></a>`).addClass('waves-effect waves-light btn modal-btn');
		a.html('Demo<i class="fas fa-laptop" style="margin-left: 10px"></i>');
		var a2 = $(`<a href="${link2}" target="_blank" style="margin-left: 15px"></a>`).addClass('waves-effect waves-light btn modal-btn');
		a2.html('View Code<i class="fas fa-laptop-code" style="margin-left: 10px"></i>');
		content.append(img, a2, a);
		content.prepend(t);
		$(`#${modal}`).html(content);
	};

	function changeFont() {
		$('.title').addClass('fun-font');
	};

});