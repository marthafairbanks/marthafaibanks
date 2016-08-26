
// var waypoint = new Waypoint ({
//   element: document.getElementsByClassName('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!');
//   }
// });





$(document).ready(function() {
    $(".rowIntro").addClass("show");

	
	$(".aboutMe").click(function() {
		$(".rowIntro").toggleClass("hide show");
		$(".rowAboutMe").toggleClass("hide show");		
	});
});
