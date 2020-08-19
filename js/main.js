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
  }, 3000);

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
