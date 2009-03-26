var visible = [];

function initMenus() {
  $('.menubar ul').hide();
  $('.menubar li').hover(showSubmenu, function() {
    $(this).find('ul:first').slideUp('fast');
  });
}


function showSubmenu() {
  var element = $(this).find('ul:first')
  var item = $(this);
  if (element.length == 0)
    return;
  element.slideDown('fast'); // have to show for the offsetParent to be set for some reason...
  var l = item.offset().left - element.offsetParent().offset().left;
  var t = item.offset().top - element.offsetParent().offset().top;
  if (item.hasClass('top')) {
    element.css('left', l + 'px');
    element.css('top', (t + item.height()) + 'px');
  } else {
    element.css('left', (l + item.width()) + 'px');
    element.css('top', t + 'px');
  }
}


$(document).ready(initMenus);
