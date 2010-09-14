$(function() {
  $('#name > a:first, #java > a:first, #websites > a:first').click(function() {
    $('#container').attr('class', $(this).parent().attr('id'));
    return false;
  });

  $('ul a').hover(function() {
    var img = new Image();
    var fileName = $(this).attr('id');

    $(img).bind('load', function(){
      $('#name').css('content', 'url(/images/' + fileName + '.jpg)');
    });
    img.src = '/images/' + fileName + '.jpg';

  }, function() {
    $('#name').removeAttr('style');
  });
});
