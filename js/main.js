$(document).ready(function() {

// image gallery
  $(function() {
    $(".img-w").each(function() {
      $(this).wrap("<div class='img-c'></div>")
      let imgSrc = $(this).find("img").attr("src");
       $(this).css('background-image', 'url(' + imgSrc + ')');
    })


    $(".img-c").click(function() {
      let w = $(this).outerWidth()
      let h = $(this).outerHeight()
      let x = $(this).offset().left
      let y = $(this).offset().top


      $(".active").not($(this)).remove()
      let copy = $(this).clone();
      copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
      $(".active").css('top', y - 8);
      $(".active").css('left', x - 8);

        setTimeout(function() {
      copy.addClass("positioned")
    }, 0)

    })

  })

  $(document).on("click", ".img-c.active", function() {
    let copy = $(this)
    copy.removeClass("positioned active").addClass("postactive")
    setTimeout(function() {
      copy.remove();
    }, 500)
  })

// video section

$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function()
 {

 var WindowWidth = $(window).width();
 var SlideCount = $('#slides li').length;
 var SlidesWidth = SlideCount * WindowWidth;

  $.global.item = 0;
   $.global.total = SlideCount;

 $('.slide').css('width',WindowWidth+'px');
 $('#slides').css('width',SlidesWidth+'px');

  $("#slides li:nth-child(1)").addClass('alive');

 $('#left').click(function() { Slide('back'); });
 $('#right').click(function() { Slide('forward'); });

 });

function Slide(direction)
 {

   if (direction == 'back') { var $target = $.global.item - 1; }
   if (direction == 'forward') { var $target = $.global.item + 1; }

   if ($target == -1) { DoIt($.global.total-1); }
   else if ($target == $.global.total) { DoIt(0); }
   else { DoIt($target); }


 }

function DoIt(target)
 {

   var $windowwidth = $(window).width();
 var $margin = $windowwidth * target;
   var $actualtarget = target+1;

   $("#slides li:nth-child("+$actualtarget+")").addClass('alive');

   $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');

   $.global.item = target;

 $('#count').html($.global.item+1);

 }


});
