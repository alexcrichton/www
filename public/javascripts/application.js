// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
  $('#websites .img').corner('8px');
  $('#index li').hover(function() {
    $('#selector').show()
      .css('top', ($(this).position().top + 10) + 'px')
      .css('left', ($(this).position().left - 15) + 'px');
    var n = 1, k = $(this);
    while (k.prev().length > 0) {
      n += 1;
      k = k.prev();
    }
    $('#websites .img:nth-child(' + n + ')').fadeTo(100, 1).siblings().fadeTo(100, 0.333);
  }).click(function() {
    //var n = 1, k = $(this);
    //while (k.prev().length > 0) {
    //  n += 1;
    //  k = k.prev();
    //}
    //$('#websites .img:nth-child(' + n + ')').animate({height:'150px'}, 'slow', function() {
    //  $(this).animate({width:'500px',left:'0'});
    //}).siblings().fadeOut();
  });
  $('#index').mouseleave(function() {
    $('#websites .img').fadeTo(100, 1);
    $('#selector').hide();
  });
});

