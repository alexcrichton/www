$(function() {
  $('#name > a:first, #java > a:first, #websites > a:first').click(function() {
    $('#container').attr('class', $(this).parent().attr('id'));
    return false;
  });
});