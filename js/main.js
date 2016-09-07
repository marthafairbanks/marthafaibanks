
$(document).ready(function() {

  $(".rowIntro").addClass("show");

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
	
	$(".aboutMe").click(function() {
		$(".rowIntro").toggleClass("hide show");
		$(".rowAboutMe").toggleClass("hide show");		
	});

	$('.selectedWorksSlider').unslider({ 
		dots: true,
    arrows: true,
    infinite: true,
	});

	function hideShow() {
    	$(".rowRobot").addClass("hide");
    	$(".rowSelectedWorks").addClass("show");
    }

	var waypoint = new Waypoint ({
  		element: document.getElementsByClassName('rowRobot'),
  		handler: function(direction) {
  			if (direction !=='up') {
    			console.log('Scrolled to waypoint 25%?!');
    			$(".robot").addClass("moveRobby");
    			$(".arrow").addClass("hide");
    			$(".worksTitle").addClass("show");
    			setTimeout(hideShow, 10000); 

  			}
  		},
  		offset: '30%', 
	});
});
