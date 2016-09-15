
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

	var selectedWorks = new Waypoint ({
  		element: document.getElementsByClassName('rowRobot'),
  		handler: function(direction) {
  			if (direction !=='up') {
    			$(".robot").addClass("moveRobby");
    			$(".arrowDownIntro").addClass("invisible");
          $(".arrowDownAboutMe").addClass("invisible");
    			$(".worksTitle").addClass("show");
    			setTimeout(hideRobShowWork, 10000); 
  			}
  		},
  		offset: '30%', 
	});

  
  var contact = new Waypoint ({
      element: document.getElementsByClassName('rowContact'),
      handler: function(direction) {
        if (direction !=='up') {
          $(".contactBox").addClass("visible");
          $(".arrowDownSelectedWorks").addClass("invisible");
          setTimeout(function(){
            $('#dash10').addClass('invisible');
            $('#dash11').addClass('invisible');
          }, 1250);

        }
      },
      offset: '30%', 
  });

  var top = new Waypoint ({
      element: document.getElementsByClassName('rowHeader'),
      handler: function(direction) {
        if (direction == 'up') {
          $(".arrowDownIntro").removeClass("invisible");
          $(".arrowDownAboutMe").removeClass("invisible");
          $(".arrowDownSelectedWorks").removeClass("invisible");
          $(".contactBox").removeClass("visible");
          $('#dash10').removeClass('invisible');
          $('#dash11').removeClass('invisible');   

        }
      },
      offset: '-2%', 
  });    

});
