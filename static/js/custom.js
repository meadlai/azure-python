(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    });

    $('#downloadBtn').on('click', async () => {
//    const fileName = 'TortoiseAutomate.jar';
//    const fileName = 'settings.xml';
//    const response = wait fetch('/download/' + fileName);
//    if(response.ok) {
//        const blob = await response.blob();
//        const url = URL.createdObjectURL(blob);
//        const a = document.createElement(e);
//        a.href = url;
//        a.download = fileName;
//        a.click();
//        URL.revokeObjectURL(url);
//    }else{
//        alert("error: " + response);
//    }
           $.ajax({
               url: "/download/settings.xml",
               type: "get",
               xhrFields: { responseType : "arrayBuffer"},
               success: function(res){
                  var blob = new Blob([res.data],{"type" : "xml"});
                  const fileName = "TortoiseAutomate.jar";
                  const reader = new FileReader();
                  reader.readAsDataURL(blob);
                  reader.onload = (e) =>{
                    const a = document.createElement("a");
                    a.download = fileName;
                    a.href = e.target.result;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }
               },
               error : function(res){
                console.log(res);
               }
           })

    });

    // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
