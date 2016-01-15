

var hide = $('.hide');
var $this = $(this);
$('.menubar').hide();

$(function(){

$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 750);
            return false;
          }
        }});
    hidegototop();
    
    $('.cutenav').hide();

  });

function hidegototop(){
  var mq = window.matchMedia("(max-width: 675px)");

  if(mq.matches){
    $('.backtotop').remove();
    $('.cutenav').remove();
    $('.nav2').show();
  }

  else {
    return false;
  }
};

$('.desc2').hide();

$('.fa-caret-down').click(function(){
  $('.desc2').slideToggle(300)
});

$(document).scroll(function() {
  /* Act on the event */
  showSecnav();

});

function showSecnav(){
  var height = $(document).scrollTop();
  var scrollH =  $(document).height() / 6;
  var cuteNav = $('.cutenav');

  if (height > scrollH){
    cuteNav.slideDown(500);
  }

  else {
    cuteNav.slideUp(400)
  }
};

$('.active').css("width", '20px')
      .addClass('animated bounceInleft');

$('.fa-bars').click(function(){
  hide.hide();
  // $('.menubar').show();
  // $('nav').hide()
})

$('.fa-times').on('click',function(){
  $('nav').show();
  $('.menubar').fadeOut(200);
  hide.show();
});



$('ul a').click(function(e){
  $this.addClass('active').siblings()
   .removeClass('active')
   e.preventDefault();

});


// $(function() {

//     //settings for slider
//     var width = 720;
//     var animationSpeed = 1000;
//     var pause = 3000;
//     var currentSlide = 1;

//     //cache DOM elements
//     var $slider = $('.slider');
//     var $slideContainer = $('.slides', $slider);
//     var $slides = $('.slide', $slider);

//     var interval;

//     function startSlider() {
//         interval = setInterval(function() {
//             $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
//                 if (++currentSlide === $slides.length) {
//                     currentSlide = 1;
//                     $slideContainer.css('margin-left', 0);
//                 }
//             });
//         }, pause);
//     }
//     function pauseSlider() {
//         clearInterval(interval);
//     }

//     $slideContainer
//         .on('mouseenter', pauseSlider)
//         .on('mouseleave', startSlider);

//     startSlider();


// });
