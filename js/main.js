
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

	function hideRobShowWork() {
    	$(".rowRobot").addClass("hide");
    	$(".rowSelectedWorks").addClass("show");
    } 

	var waypoint = new Waypoint ({
  		element: document.getElementsByClassName('rowRobot'),
  		handler: function(direction) {
  			if (direction !=='up') {
    			$(".robot").addClass("moveRobby");
    			$(".arrow").addClass("invisible");
    			$(".worksTitle").addClass("show");
    			setTimeout(hideRobShowWork, 10000); 
  			}
  		},
  		offset: '30%', 
	});

  
  var waypoint2 = new Waypoint ({
      element: document.getElementsByClassName('rowContact'),
      handler: function(direction) {
        if (direction !=='up') {
          $(".contactBox").addClass("appear"); 
          setTimeout(function(){
            jQuery('#dash10').addClass('invisible');
            jQuery('#dash11').addClass('invisible');
          }, 2500)

        }
      },
      offset: '30%', 
  });  

});
