//This Java script file was created by Hasan

//Navigation***
var nav = document.getElementsByClassName("nav")[0];
var toggleBtn = document.getElementsByClassName("navIcon")[0];
var bar1 = document.getElementsByClassName("bars")[0];
var bar2 = document.getElementsByClassName("bars")[1];
var bar3 = document.getElementsByClassName("bars")[2];

toggleBtn.addEventListener("click",() => {
			nav.classList.toggle("active");
			bar2.classList.toggle("removeBar");
			bar1.classList.toggle("barRotate1");
      bar3.classList.toggle("barRotate2");
});
		
//Slider***	
var slideIndex= 0;
showSlides();

function showSlides() {				
var i;
var slides = document.getElementsByClassName("mySlides");

for(i = 0; i < slides.length; i++){

slides[i].style.display = "none";
}
slideIndex++;

if(slideIndex > slides.length){

slideIndex=1
}

slides[slideIndex-1].style.display = "block";

setTimeout(showSlides, 2500);
};

//*******jQuery******	
$(document).ready(function(){

//slick slider***
$('.slickS').slick({
				infinite: true,
				arrows: false,
				dots: true,
				autoplay: true
});

var progressArea = $('.progressCon').offset().top;
    
//scroll function***
$(window).scroll(function(){
 
 //progress skills***
 if($(window).scrollTop() >= progressArea - 300){
 				
 	 $('.progressPer').each(function(){
        var $this = $(this);
        var perValue = $this.attr('pervalue');
        $this.css("width",perValue+'%');
        $({countVal: 0}).animate({countVal: perValue},{
          duration: 2800,
          step: function(){
            $this.attr('per', Math.floor(this.countVal) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.countVal) + '%');
          }
        });
      });
   };
   
   $('.chart').easyPieChart({
      size: 160,
      barColor: "#109dff",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "rgba(1,2,1,0.1)",
      lineCap: "circle",
      animate: 6000,
    });
    
});
  //Smoth***scroll***
  //all a tag or navbar
  $("a").on('click', function(event){
  				if(this.hash !== ""){
  								event.preventDefault();
  								var hash = this.hash;
  								$('html, body').animate({
  												scrollTop: $(hash).offset().top
                        }, 800, function(){
                        		window.location.hash = hash;
  						     });
  			   }
  });
  
  
  
  
});
