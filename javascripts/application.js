$(function() {
  $('#name > a:first, #java > a:first, #websites > a:first').click(function() {
    $('#container').attr('class', $(this).parent().attr('id'));
    return false;
  });
  
  $('ul a').hover(function() {
    $('#name').css('content', 'url(/images/' + $(this).attr('id') + '.jpg)');
  }, function() {
    $('#name').removeAttr('style');
  });
});