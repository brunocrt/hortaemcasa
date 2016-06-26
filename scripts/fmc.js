/*
  Code by FMC | ideiasfmc.com
  All Rights Reserved.
*/

// var $header_h = $('header').height();
// var $m_header_h = $('.m-header').height();
var $conheca_h = 80;

/* header - nav */
$(document).scroll(function() {
   var x = $(this).scrollTop();
   if(x>200) {
    $('body').addClass('mini-h');
   } else {
    $('body').removeClass('mini-h');
   }
});

// Header with multiple heights
$(function(){
$(window).resize(function(){
});
$(window).resize();
});

$(window).load(function() {
  var x = $(this).scrollTop();
  if(x>200) {
  window.setTimeout(function(){$(document).find(".no-tr").removeClass("no-tr");}, 400);
  } else {
  $(document).find(".no-tr").removeClass("no-tr");
  }
});

$(function(){
$(window).resize(function(){
  var $header_h = $('header').height();
  var elem = $(this);
  if(!$mobile) {
    $('.fullpage').css({height:elem.height() - $header_h - $conheca_h});
    $('.fullheight').css({height:elem.height()});
    $('.halfpage').css({height:elem.height()/2 - $header_h});
    $('.h_75_page').css({height:elem.height() - elem.height()*0.25 - $header_h});
    // $('.has_header').css('height', $header_h);
  } else {
    $('.fullpage').css({height:elem.height() - 60});
    // $('.has_header').css('height', $m_header_h);
  };
  });
$(window).resize();
});

// 
$('a[href*=#]:not([href=#])').on('click touchstart', function(e) {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    if(!$mobile) {
      $('html,body').animate({
        scrollTop: target.offset().top - 70
      }, 700, "swing");
      return false;
    } else {
      $('html,body').animate({
        scrollTop: target.offset().top - 60
      }, 700, "swing");
      return false;
    }
  }
}
e.preventDefault();
});
// 

//
$("a.modal-open").on("click touchstart",function(t){$("html").addClass("modal-active"),$this=$(this),$this_data=$this.data("href"),$(".modal .box").fadeOut(),$("html").find($('.modal .box[data-href="'+$this_data+'"]')).fadeIn(),t.preventDefault()}),$(".modal-close .close-btn").on("click touchstart",function(t){$("html").removeClass("modal-active"),$(".modal .box").fadeOut(),t.preventDefault()});

//
var maxHeight = 0;
$('ELEMENT').each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
$('ELEMENT').height(maxHeight);
//

//
$('.menu-btn').on('click touchstart', function(e){
$('html').toggleClass('menu-active');
$('.menu-btn').toggleClass('close');
  e.preventDefault();
});

$('.map-btn').on('click touchstart', function(map){
$('html').toggleClass('map-active');
$('.map-close').addClass('close');
  map.preventDefault();
});

$('.map-close').on('click touchstart', function(map){
$('html').removeClass('map-active');
$('.map-close').removeClass('close');
  map.preventDefault();
});

// m
var $ios = /iPhone|iPod|iPad/i.test(navigator.userAgent);
if($ios) {
$('html').addClass('ios');
};

var $device_width = $(window).width();
var $mobile = $device_width<768;