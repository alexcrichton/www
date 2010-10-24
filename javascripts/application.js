jQuery(function($) {
  $('#name > a:first, #java > a:first, #websites > a:first').click(function(e) {
    $('#container').attr('class', $(this).parent().attr('id'));
    e.preventDefault();
    return false;
  });
});
