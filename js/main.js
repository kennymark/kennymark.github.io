$(document).ready(function() {
  sideNavStuff();
  typeJs();
  menuForMobile();
  scrollStuff();
  // ajaxStuff()z
  grabButton();
});

function sideNavStuff() {
  $(".sideNav li a").click(function(e) {
    $("a").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
    console.log(e);
  });

  if (window.innerWidth < 800) {
    $(".sideNav li a").click(function() {
      $(".sideNav ul").fadeOut(250);
    });
  }
}
/*
function hoverStuff() {
   var cols = $('.col')
   cols.map(function(a){
     $(this).on('mouseenter', function(){
       $(this).find('.description').addClass('animated bounceInDown').css('display', 'flex');

     })
     $(this).on('mouseleave', function(){
       $(this).find('.description').fadeOut(300);
     })
   })

}*/
v;
function typeJs() {
  setTimeout(function() {
    Typed.new(".intro", {
      strings: ["design", "code", "build"],
      typeSpeed: 150,
      startDelay: 150,
      contentType: "html"
    });
  }, 1000);
}

function scrollStuff() {
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to

        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        // Does a scroll target exist?

        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            700,
            function() {
              // Callback after animation
              // Must change focus!
            }
          );
        }
      }
    });
}

function menuForMobile() {
  $(".sideNav p").click(function() {
    $(".sideNav ul").fadeToggle(350);
  });

  $(".sideNav li a").click(function() {
    $(".sideNav ul").removeClass("active");
  });
}

/*function ajaxStuff(){
  $('.btn').on('click', function(e){
    e.preventDefault();
    console.log(e)
    $.get('/../projects.html').then(function(data){
        $(document).children().remove()
        $(document).children().load(data)
        console.log(data)
    })
    .catch(function(e){
      console.log(e + "Hi")
    })
  });
}*/
function grabButton() {
  $(".back").click(function(e) {
    var location = $(this)
      .parent()
      .attr("href");

    e.preventDefault();
    console.log(location);
    $.get(location).then(function(data) {
      $(document)[0] = data;
    });
  });
}
