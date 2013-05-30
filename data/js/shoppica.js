jQuery( function($) {

  // Hover effect for the header menu
  $("#categories > ul > li").not("#menu_home").hover(
    function() {
      $(this).find("a:first").stop().animate({
          color: '#ffffff',
          backgroundColor: $("#secondary_color").val()
        },300
      );
    }
    ,
    function() {
      $(this).find("a:first").stop().animate({
          color: $("#secondary_color").val(),
          backgroundColor: '#ffffff'
        },300
      );
    }
  );

  if (!$.browser.msie || parseInt($.browser.version, 10) > 8) {
      var onMouseOutOpacity = 1;
      $('div.s_grid_view > div.s_item').css('opacity', onMouseOutOpacity)
        .hover(
          function () {
            $(this).prevAll().stop().fadeTo('slow', 0.60);
            $(this).nextAll().stop().fadeTo('slow', 0.60);
          },
          function () {
            $(this).prevAll().stop().fadeTo('slow', onMouseOutOpacity);
            $(this).nextAll().stop().fadeTo('slow', onMouseOutOpacity);
          }
      );
  }

  // Hover effect for the shoppica cart
  $("#cart_menu").hover(
    function() {
      $(this).find(".s_grand_total").stop().animate({
          color: '#ffffff',
          backgroundColor: $("#main_color").val()
        },300
      );
    }
    ,
    function() {
      $(this).find(".s_grand_total").stop().animate({
          color: $("#main_color").val(),
          backgroundColor: '#ffffff'
        },300
      );
    }
  );

  // Animation for the languages and currency dropdown
  $('.s_switcher').hover(function() {
    $(this).find('.s_options').stop(true, true).slideDown('fast');
  },function() {
    $(this).find('.s_options').stop(true, true).slideUp('fast');
  });

  //
  $(".s_server_msg").live("click", function() {
    $(this).fadeOut(200, function(){
      $(this).remove();
    });
  });

  var search_visibility = 0;
  // Animation for the search button
  $("#show_search").bind("click", function(){
    if (search_visibility == 0) {
      $("#search_bar").fadeIn();
      search_visibility = 1;
    } else {
      $("#search_bar").fadeOut();
      search_visibility = 0;
    }
  });


});
