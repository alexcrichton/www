$(document).ready(function() {
  $('#timeline').tabs();
  $('.year').click(function() {
    $('.instructions').slideUp();
    $($(this).attr('href')).siblings().slideUp();
    $($(this).attr('href')).slideDown();
    return false;
  });
  $('.info').children().hide();
  $('.instructions').children().show();
  //  $('.info div:first').show();
});
