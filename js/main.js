"use strict";!function(e){e(window).on("load",function(){if(e(".loader").fadeOut(),e("#preloder").delay(200).fadeOut("slow"),e(".filter__controls li").on("click",function(){e(".filter__controls li").removeClass("active"),e(this).addClass("active")}),e(".filter__gallery").length>0){var t=document.querySelector(".filter__gallery");mixitup(t)}}),e(".set-bg").each(function(){var t=e(this).data("setbg");e(this).css("background-image","url("+t+")")}),e(".search-switch").on("click",function(){e(".search-model").fadeIn(400)}),e(".search-close-switch").on("click",function(){e(".search-model").fadeOut(400,function(){e("#search-input").val("")})}),e(".mobile-menu").slicknav({prependTo:"#mobile-menu-wrap",allowParentLinks:!0}),e(".hero__slider").owlCarousel({loop:!0,margin:0,items:1,dots:!0,nav:!0,navText:["<span class='arrow_carrot-left'></span>","<span class='arrow_carrot-right'></span>"],animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:1200,autoHeight:!1,autoplay:!0,mouseDrag:!1});new Plyr("#player",{controls:["play-large","play","progress","current-time","mute","captions","settings","fullscreen"],seekTime:25});e("select").niceSelect(),e("#scrollToTopButton").click(function(){return e("html, body").animate({scrollTop:0},"slow"),!1})}(jQuery);