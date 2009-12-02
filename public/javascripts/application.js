var smallAjax = '<img src="/images/ajax-small.gif" alt="Loading..." class="loading"/>';
var bigAjax = '<img src="/images/ajax-big.gif" alt="Loading..." class="loading"/>';

$(function() {
  $("input[type=text], textarea").focus(function(src) {
    if ($(this).val() == $(this).attr('title'))
      $(this).removeClass("defaultTextActive").val("");
  }).blur(function() {
    if ($(this).val() == "")
      $(this).addClass("defaultTextActive").val($(this).attr('title'));
  }).change(function() {
    if ($(this).val() != $(this).attr('title'))
      $(this).removeClass('defaultTextActive');
  });
});

function error() {
  $('img.loading').remove();
  alert('Server Error... Please try later');
}
