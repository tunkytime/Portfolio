$(document).ready(function(){
	M.AutoInit();
	
    $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
  
  
	$(".nav-wrapper").find("a").click(function(e) {
		e.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top
		});
	});
	
	
	

  });
  
  
  