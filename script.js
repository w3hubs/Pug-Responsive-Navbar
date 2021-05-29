$("nav div").click(function() {
          $("ul").slideToggle();
          

           });
          $(window).resize(function(){
            if($(window).width() > 768){
                 $("ul").removeAttr('style');
            }
          });