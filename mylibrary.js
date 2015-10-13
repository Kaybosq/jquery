$(document).ready(function(){

				  	$(function(){
				      alert("Thats nacho cheese.");
				   	});

				 	 $( ".one" ).click(function() {
				 		 $( this ).slideUp();
					 });

				  $( ".two" ).click(function() {
  					$( "#twice" ).fadeOut( "slow", function() {
    					// Animation complete.
					 });
				  });

				  $( ".three" ).click(function() {
 					 $( "#tres" ).slideToggle( "slow", function() {
   						// Animation complete.
					 });
				  });

				  $( ".four" ).click(function() {
  					$( this ).fadeTo( "slow", 0.45 );
				  });



});