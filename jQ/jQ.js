$(document).ready(function(){

		var block_all = $("#block_all");
		var block_web = $("#block_web");
		var block_graphic = $("#block_graphic");
		var block_flat = $("#block_flat");
		block_web.addClass("displaynone");
		block_graphic.addClass("displaynone");
		block_flat.addClass("displaynone");
		block_all.removeClass("displaynone");
		$('#all').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#flat').css('background-color', '');

	$("#all").click(function(){
		var block_all = $("#block_all");
		var block_web = $("#block_web");
		var block_graphic = $("#block_graphic");
		var block_flat = $("#block_flat");
		block_web.addClass("displaynone");
		block_graphic.addClass("displaynone");
		block_flat.addClass("displaynone");
		block_all.removeClass("displaynone");
		$('#all').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#flat').css('background-color', '');
	});

	$("#web").click(function(){
		var block_all = $("#block_all");
		var block_web = $("#block_web");
		var block_graphic = $("#block_graphic");
		var block_flat = $("#block_flat");
		block_all.addClass("displaynone");
		block_graphic.addClass("displaynone");
		block_flat.addClass("displaynone");
		block_web.removeClass("displaynone");
		$('#web').css('background-color', '#16a086');
		$('#all').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#flat').css('background-color', '');
	});

	$("#graphic").click(function(){
		var block_all = $("#block_all");
		var block_web = $("#block_web");
		var block_graphic = $("#block_graphic");
		var block_flat = $("#block_flat");
		block_web.addClass("displaynone");
		block_all.addClass("displaynone");
		block_flat.addClass("displaynone");
		block_graphic.removeClass("displaynone");
		$('#graphic').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#all').css('background-color', '');
		$('#flat').css('background-color', '');
	});

	$("#flat").click(function(){
		var block_all = $("#block_all");
		var block_web = $("#block_web");
		var block_graphic = $("#block_graphic");
		var block_flat = $("#block_flat");
		block_web.addClass("displaynone");
		block_graphic.addClass("displaynone");
		block_all.addClass("displaynone");
		block_flat.removeClass("displaynone");
		$('#flat').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#all').css('background-color', '');
	});

	/*кнопка на верх*/
	$(function(){
		$('.href-arrow').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.container-block-1').offset().top }, 1000);
		  e.preventDefault();
		});

		$('#home').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.container-header').offset().top }, 1000);
		  e.preventDefault();
		});

		$('#portfolio').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.container-block-1').offset().top }, 1000);
		  e.preventDefault();
		});

		$('#about').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.container-block-2').offset().top }, 1000);
		  e.preventDefault();
		});

		$('#contact').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.container-block-3').offset().top }, 1000);
		  e.preventDefault();
		});

		$('.image-block').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.container-header').offset().top }, 1000);
		  e.preventDefault();
		});
	});

	$("#img-burger").click(function(){
		var rowheader = $(".wrapper-burger");
		rowheader.removeClass("hidden");
	});

	$("#exit").click(function(){
		var rowheader = $(".wrapper-burger");
		rowheader.addClass("hidden");
	});

	$("#home").click(function(){
		var rowheader = $(".wrapper-burger");
		rowheader.addClass("hidden");
	});

	$("#portfolio").click(function(){
		var rowheader = $(".wrapper-burger");
		rowheader.addClass("hidden");
	});

	$("#about").click(function(){
		var rowheader = $(".wrapper-burger");
		rowheader.addClass("hidden");
	});

	$("#contact").click(function(){
		var rowheader = $(".wrapper-burger");
		rowheader.addClass("hidden");
	});

		$(function(){
			$('#home1').on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $('.container-header').offset().top }, 1000);
			  e.preventDefault();
			});

			$('#portfolio1').on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $('.container-block-1').offset().top }, 1000);
			  e.preventDefault();
			});

			$('#about1').on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $('.container-block-2').offset().top }, 1000);
			  e.preventDefault();
			});

			$('#contact1').on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $('.container-block-3').offset().top }, 1000);
			  e.preventDefault();
		});
	});

	/*фиксированная шапка*/

	/*var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.cbp-af-header' ),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'cbp-af-header-shrink' );
        }
        else {
            classie.remove( header, 'cbp-af-header-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();*/

	/*block-1*/


	 /*input*/

	 $('#border-input1').click(function(){
	 	var input2 = $("#border-input2");
	 	var input1 = $("#border-input1");
	 	var text = $("#textarea");
	 	input1.css('border-color', '#1bbc9b');
	 	input2.css('border-color', '#bec3c7');
	 	text.css('border-color', '#bec3c7');
	 });

	 $('html').click(function html(){
	 	
	 });

	 $('#border-input2').click(function(){
	 	var input2 = $("#border-input2");
	 	var input1 = $("#border-input1");
	 	var text = $("#textarea");
	 	input2.css('border-color', '#1bbc9b');
	 	input1.css('border-color', '#bec3c7');
	 	text.css('border-color', '#bec3c7');
	 });

	 $('#textarea').click(function(){
	 	var input2 = $("#border-input2");
	 	var input1 = $("#border-input1");
	 	var text = $("#textarea");
	 	text.css('border-color', '#1bbc9b');
	 	input2.css('border-color', '#bec3c7');
	 	input1.css('border-color', '#bec3c7');
	 });

	 /*проверка*/

	 /*$('#submit').click(function(){
	 	var input2 = $("#border-input2");
	 	var text = $("#textarea");
	 	if(input2 == true){

	 	}
	 	else {
            input2.css('required', '');
        }
	 });*/

	 /*$(function frmotpr(){
        var field = new Array("name_f", "contact_f", "mssg_f");
        $(".form").submit(function() {
            var error=0;
            $(".form").find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('notvalid');
                            error=1;    
                        }
                        else{
                            $(this).removeClass('notvalid');
                        }
                    }                       
                }               
           })
            if(error==0){
            return true;
            }else{ var err_text = "";
            if(error==1)  err_text="Не все обязательные поля заполнены!";
            $("#messenger").html(err_text); 
            $("#messenger").fadeIn("slow"); 
            return false;
            }
        })
    });*/

    /*fixed header*/

    $(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		$('.block-header-1').addClass("sticky");
		}
		else{
		$('.block-header-1').removeClass("sticky");
		}
	});

	 /*SLIDER*/

	var fotorama_media1 = $(".fotorama-media1");
	var fotorama_media2 = $(".fotorama-media2");
	var fotorama_media3 = $(".fotorama-media3");
	var fotorama_media4 = $(".fotorama-media4");
	fotorama_media1.removeClass("displaynone");
	fotorama_media2.addClass("displaynone");
	fotorama_media3.addClass("displaynone");
	fotorama_media4.addClass("displaynone");
	$('#all').css('background-color', '#16a086');
	$('#web').css('background-color', '');
	$('#graphic').css('background-color', '');
	$('#flat').css('background-color', '');

	$("#all").click(function(){
		var fotorama_media1 = $(".fotorama-media1");
		var fotorama_media2 = $(".fotorama-media2");
		var fotorama_media3 = $(".fotorama-media3");
		var fotorama_media4 = $(".fotorama-media4");
		fotorama_media1.removeClass("displaynone");
		fotorama_media2.addClass("displaynone");
		fotorama_media3.addClass("displaynone");
		fotorama_media4.addClass("displaynone");
		$('#all').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#flat').css('background-color', '');
	});

	$("#web").click(function(){
		var fotorama_media1 = $(".fotorama-media1");
		var fotorama_media2 = $(".fotorama-media2");
		var fotorama_media3 = $(".fotorama-media3");
		var fotorama_media4 = $(".fotorama-media4");
		fotorama_media1.addClass("displaynone");
		fotorama_media2.removeClass("displaynone");
		fotorama_media3.addClass("displaynone");
		fotorama_media4.addClass("displaynone");
		$('#web').css('background-color', '#16a086');
		$('#all').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#flat').css('background-color', '');
	});

	$("#graphic").click(function(){
		var fotorama_media1 = $(".fotorama-media1");
		var fotorama_media2 = $(".fotorama-media2");
		var fotorama_media3 = $(".fotorama-media3");
		var fotorama_media4 = $(".fotorama-media4");
		fotorama_media1.addClass("displaynone");
		fotorama_media2.addClass("displaynone");
		fotorama_media3.removeClass("displaynone");
		fotorama_media4.addClass("displaynone");
		$('#graphic').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#all').css('background-color', '');
		$('#flat').css('background-color', '');
	});

	$("#flat").click(function(){
		var fotorama_media1 = $(".fotorama-media1");
		var fotorama_media2 = $(".fotorama-media2");
		var fotorama_media3 = $(".fotorama-media3");
		var fotorama_media4 = $(".fotorama-media4");
		fotorama_media1.addClass("displaynone");
		fotorama_media2.addClass("displaynone");
		fotorama_media3.addClass("displaynone");
		fotorama_media4.removeClass("displaynone");
		$('#flat').css('background-color', '#16a086');
		$('#web').css('background-color', '');
		$('#graphic').css('background-color', '');
		$('#all').css('background-color', '');
	});

});
