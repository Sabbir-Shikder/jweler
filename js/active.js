

// owl-carousel 
$('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:false,
      },
      500: {
        items: 2,
        navbar:false,
      },
      1199: {
        items: 3,
        nav:false,
      },
      1300: {
        items: 4,
        nav: false,
      },
      1301: {
        items: 5,
        nav: false,
      },
      }
})

// nice scroll 
$("body").niceScroll({
    cursorwidth: "10px",
});
  


// go top button 
$(".go_top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  $(".go_top").hide();

  $(window).scroll(function () {
    var ourwindow = $(this).scrollTop();
    if (ourwindow < 500) {
      $(".go_top").fadeOut();
    } else {
      $(".go_top").fadeIn();
    }
  });


  // smooth scrolling 
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
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



  // sticky navbar 

  $(window).scroll(function(){
    var navFixed = $(window).scrollTop();
    if(navFixed > 200){
      $(".main_nav").removeClass("py-30").addClass("fixed-top nav-border animated fadeInDown faster");
    }else{
      $(".main_nav").removeClass("fixed-top nav-border animated fadeInDown faster py-15");
    }
  });