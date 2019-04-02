$(document).ready(function () {
    M.AutoInit();
	
	// SETUP VARIABLES
	// ============================================
	var home = $('#homepage');
	var about = $('#aboutpage');
	var skills = $('#skillspage');
	var port = $('#portpage');
	var contact = $('#contactpage');

	// MAIN PROCESS
	// ============================================
	home.fadeIn(3000);
	
	$('.nav-icon').mouseover(function(event) {
		var title = $(this).data('name');
		$(this).html(title).addClass('menu-text').removeClass('material-icons');
	}).mouseout(function(){
		if ($(this).hasClass('selected')) {
			var title = $(this).data('name');
			$(this).html(title);
		} else {
			var icon = $(this).data('icon');
			$(this).html(icon).removeClass('menu-text').addClass('material-icons');
		};
	});

	// CLICK EVENTS
	// ============================================
	$('.nav-icon').on('click', function() {;
		$('.nav-icon').removeClass('selected');
		$('#about').html($('#about').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('#skills').html($('#skills').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('#portfolio').html($('#portfolio').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('#contact').html($('#contact').data('icon')).addClass('material-icons').removeClass('menu-text');
		var title = $(this).data('name');
		$(this).addClass('selected').html(title).addClass('menu-text').removeClass('material-icons');
	});
	
	$('#home').on('click', function () {
		$('.nav-icon').removeClass('selected');
		$('#about').html($('#about').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('#skills').html($('#skills').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('#portfolio').html($('#portfolio').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('#contact').html($('#contact').data('icon')).addClass('material-icons').removeClass('menu-text');
		$('section').hide();
		home.addClass('transition').show();
	});	
	
	$(document).on('click', 'nav a', showSection);

	// FUNCTIONS
	// ============================================
	function showSection () {
		var linkName = $(this).data('name');
		$('section').hide();
		if (linkName === 'Home') {
			home.addClass('transition').show();
		};
		if (linkName === 'About') {
			about.addClass('transition').show();
		};
		if (linkName === 'Skills') {
			skills.addClass('transition').show();
		};
		if (linkName === 'Portfolio') {
			port.addClass('transition').show();
		};
		if (linkName === 'Contact') {
			contact.addClass('transition').show();
		};
	};
	
	function createImageCard (name) {
		var cardDiv = $(`<div class="card preview-card"></div>`);
		var cardImg = $(`<img src="">`);
		var imgDiv = $(`<div class="card-image"></div>`).html(cardImg);
		var cardTitle = $(`<span class="card-title">${name}</span>`);
		var cardContent = $(`<div class="card-content">Content</div>`);
		cardDiv.append(imgDiv, cardTitle, cardContent);
		cardDiv.css('width', '20rem');
		return cardDiv;
	};
});

