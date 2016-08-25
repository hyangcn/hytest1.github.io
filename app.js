var main = function() {
    $(".dropdown-toggle").click(function() {
        $(".dropdown-menu").toggle();
        
        });
    
    $(".arrow-next").click(function(){
        var currentSlide = $(".active-slide");
		var nextSlide = currentSlide.next();
		$(currentSlide).fadeOut();
		$(nextSlide).fadeIn();
		
        });
    
    }
    
$(document).ready(main);