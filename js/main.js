/**
*	Hamburger menu
*/
function initBurger(){
	$(".jho_hamburger-menu").click(function(){
		$(".jho_closing-menu").toggleClass("open");
		$(".jho_hidden-menu").toggleClass("show");
	});
}
/**
* Contact form
*/
function initContactForm(){
 $(".jho_greyarea").click(function(e){
   if(e.target.tagName.toLowerCase() === "center"){
     $(".jho_greyarea").toggleClass("hidden");
   }
 });
/**
* navigation
*/
 $(".jho_submit-button").click(function(e){
   e.preventDefault();

   var err = "";
   var validName = /^([A-Z][a-z]{1,20}[ ]?)*$/g.test($("#cform_name").val());
   var validEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test($("#cform_email").val());


   if(!(validName && validEmail)){
     $(".jho_statusmessage").text("Name and email invalid");
     return;
   }else if(!validName){
     $(".jho_statusmessage").text("Name invalid");
     return;
   }else if(!validEmail){
     $(".jho_statusmessage").text("Email invalid");
     return;
   }

   if($("#cfom_message").text().length > 25){
     $(".jho_statusmessage").text("Message too short");
     return;
   }


   $(".jho_contact").submit();
   $(".jho_statusmessage").text("Your request has been sent!");
   $(".jho_submit-button").prop("disabled", true);
   $(".jho_contact").bind('ajax:complete', function() {
     $(".jho_statusmessage").text("Your request was successfull!");
     });
 });
}



function updateNavbar(li){
 if(li){
   if( li.hasClass("menu__item--current") ) // alreddy selected
     return;
   $(".menu__item--current").removeClass("menu__item--current");
   li.addClass("menu__item--current");
 }
}
function initNavigation(){
 $('a[href^="#"]').click(function(e){
   e.preventDefault();

   switch($(e.target).text().toLowerCase()){
     case "welcome":
       updateNavbar($(".menu__link:eq(0)").parent());
     break;
     case "about":
       updateNavbar($(".menu__link:eq(1)").parent());
     break;
     case 'blog':
      updateNavbar($(".menu__link:eq(2)").parent());
     break;
     case "contact":
       $(".jho_greyarea").toggleClass("hidden");
       updateNavbar($(".menu__link:eq(3)").parent());
     break;
   }
 });
}

/**
* Initialization
*/
$(document).ready(function(){
	'use strict'

	initBurger();
	initNavigation();
	initContactForm();
});
