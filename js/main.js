
$(document).ready(function() {

  checkSize();
  $(window).resize(checkSize);
  $(window).resize(checkSize2);

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
    			setTimeout(hideRobShowWork, 7500); 
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
          if ($(".contactBox").css("font-size") !== "15px" ){
            setTimeout(function(){
              $('#dash10').addClass('invisible');
              $('#dash11').addClass('invisible');
            }, 1250);
          } 

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
  //mobile menu
  $(".burger").click(function() {
    $(".burgerDrop").toggleClass("hide show");
  });

  //mobile selectedWorks
  $(".descLink").click(function() {
    $(".description").toggleClass("hide show");  
  });
  $('.mobileWorksSlider').unslider({ 
    dots: true,
    arrows: true,
    infinite: true,
  });
      
  //mobile contact
  function checkSize(){
    if ($(".contactBox").css("font-size") == "15px") {
      $('#dash10').removeClass('invisible');
      $('#dash11').removeClass('invisible');
    }
  }  
  function checkSize2() {
    if ($(".contactBox").css("font-size") != "15px") {
      $('#dash10').addClass('invisible');
      $('#dash11').addClass('invisible');
    }
  }          

});
