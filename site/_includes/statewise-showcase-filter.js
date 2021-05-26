
$(function() {
  // $('#partnerTab a').on('click', function (event) {
  //   event.preventDefault();
  //   var current_filter = $(this).attr('data-filter');
  //   $('.logo_content').each(function(i, obj) {
  //     var my_filter = $(obj).attr('data-filter');
  //     if (current_filter === my_filter || current_filter === "all") {
  //       $(obj).addClass('d-block').removeClass('d-none');
  //     } else {
  //       $(obj).addClass('d-none').removeClass('d-block');
  //     }
  //   });
  //
  //   $('#partnerTab .nav-link').each(function(i, obj) {
  //     var my_filter = $(obj).attr('data-filter');
  //     if (current_filter === my_filter) {
  //       $(obj).addClass('active');
  //     } else {
  //       $(obj).removeClass('active');
  //     }
  //   });
  // });

  $('#showcaseCarousel').on('slide.bs.carousel', function (ev) {
    $('#statewiseTab .nav-link').removeClass('active');
    $('#statewiseTab .nav-link').eq(ev.to).addClass('active');
  });

  $('#statewiseTab .nav-link').on('click', function(ev) {
    ev.preventDefault();
    var clickIndex = $(this).attr('data-index') - 1;
    $('#showcaseCarousel').carousel(clickIndex);
  });
});
