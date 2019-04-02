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

	// CLICK EVENTS
	// ============================================
	$('.nav-icon').mouseover(function(event) {
		var title = $(this).data('name');
		$(this).html(title).addClass('menu-text').removeClass('material-icons');
		$(this).removeClass('material-icons');
	}).mouseout(function(){
		if ($(this).hasClass('selected')) {
			var title = $(this).data('name');
			$(this).html(title);
		} else {
			var icon = $(this).data('icon');
			$(this).html(icon).removeClass('menu-text').addClass('material-icons');
		};
	});
	
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
		home.addClass('transition');
		home.show();
		about.hide();
		skills.hide();
		port.hide();
		contact.hide();
	});
	
	$('#about').on('click', function () {
		home.hide();
		about.addClass('transition');
		about.show();
		skills.hide();
		port.hide();
		contact.hide();
	});
	
	$('#skills').on('click', function () {
		home.hide();
		about.hide();
		skills.addClass('transition');
		skills.show();
		port.hide();
		contact.hide();
	});
	
	$('#portfolio').on('click', function () {
		home.hide();
		about.hide();
		skills.hide();
		port.addClass('transition');
		port.show();
		contact.hide();
	});
	
	$('#contact').on('click', function () {
		home.hide();
		about.hide();
		skills.hide();
		port.hide();
		contact.addClass('transition');
		contact.show();
	});
	
	// FUNCTIONS
	// ============================================
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

