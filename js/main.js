$(document).ready(function() {

  // video section slider

  var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

  function cycleItems() {
    var item = $('.container div').eq(currentIndex);
    items.hide();
    item.css('display','inline-block');
  }

  var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  }, 5000);

  $('.next').click(function() {
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  });

  $('.prev').click(function() {
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  });


  // Find all YouTube videos
  // Expand that selector for Vimeo and whatever else
  var $allVideos = $("iframe[src^='https://']"),

  // The element that is fluid width
  $fluidEl = $("body");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    $(this)
    .data('aspectRatio', this.height / this.width)
    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

  });

  // When the window is resized
  $(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {
      var $el = $(this);
      $el
      .width(newWidth*0.6)
      .height(newWidth * $el.data('aspectRatio'));
    });

    // Kick off one resize to fix all videos on page load
  }).resize();

});

$(document).ready(function() {

  // testemonial section slider

  var currentIndexTestemonial = 0,
  itemsTestemonial = $('.container-testemonial div'),
  itemAmtTestemonial = itemsTestemonial.length;

  function cycleItems() {
    var itemTestemonial = $('.container-testemonial div').eq(currentIndexTestemonial);
    itemsTestemonial.hide();
    itemTestemonial.css('display','inline-block');
  }

  var autoSlideTestemonial = setInterval(function() {
    currentIndexTestemonial += 1;
    if (currentIndexTestemonial > itemAmtTestemonial - 1) {
      currentIndexTestemonial = 0;
    }
    cycleItems();
  }, 5000);

  $('.next-testemonial').click(function() {
    clearInterval(autoSlideTestemonial);
    currentIndexTestemonial += 1;
    if (currentIndexTestemonial > itemAmtTestemonial - 1) {
      currentIndexTestemonial = 0;
    }
    cycleItems();
  });

  $('.prev-testemonial').click(function() {
    clearInterval(autoSlideTestemonial);
    currentIndexTestemonial -= 1;
    if (currentIndexTestemonial < 0) {
      currentIndexTestemonial = itemAmtTestemonial - 1;
    }
    cycleItems();
  });

});
