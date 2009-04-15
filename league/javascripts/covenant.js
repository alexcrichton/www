function parseURL(){
  var k = location.hash.substr(1);
  if(k == null || k == "")
    return;
  $('.article').hide();
  $('#' + k).show();
}
