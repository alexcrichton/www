var maxnum = 18;
var src = new Array(maxnum);
src[0] = 'world2-1920orig.gif';
//src[1] = 'world2-1920-1.gif';
//src[2] = 'world2-1920-2.gif';
src[1] = 'world2-1920-3.gif';
src[2] = 'world2-1921.gif';
src[3] = 'world2-1922.gif';
//src[6] = 'world2-1923-1.gif';
src[4] = 'world2-1923-2.gif';
src[5] = 'world2-1924.gif';
src[6] = 'world2-1925.gif';
//src[10] = 'world2-1926-1.gif';
src[7] = 'world2-1926-2.gif';
src[8] = 'world2-1931.gif';
//src[13] = 'world2-1932-1.gif';
src[9] = 'world2-1932-2.gif';
//src[15] = 'world2-1933-1.gif';
src[10] = 'world2-1933-2.gif';
//src[17] = 'world2-1934-1.gif';
//src[18] = 'world2-1934-2.gif';
src[11] = 'world2-1934-3.gif';
src[12] = 'world2-1935.gif';
//src[21] = 'world2-1936-1.gif';
//src[22] = 'world2-1936-2.gif';
src[13] = 'world2-1936-3.gif';
//src[24] = 'world2-1937-1.gif';
//src[25] = 'world2-1937-2.gif';
src[14] = 'world2-1937-3.gif';
//src[27] = 'world2-1938-1.gif';
//src[28] = 'world2-1938-2.gif';
src[15] = 'world2-1938-3.gif';
//src[30] = 'world2-1939-1.gif';
//src[31] = 'world2-1939-2.gif';
//src[32] = 'world2-1939-3.gif';
//src[33] = 'world2-1939-4.gif';
src[16] = 'world2-1939-5.gif';
src[17] = 'world2-1940.gif';
src[18] = 'world2-1942.gif';

var exp = new Array(maxnum);
exp[0] = 'y1920j';
exp[1] = 'y1920';
exp[2] = 'y1921';
exp[3] = 'y1922';
exp[4] = 'y1923';
exp[5] = 'y1924';
exp[6] = 'y1925';
exp[7] = 'y1926';
exp[8] = 'y1931';
exp[9] = 'y1932';
exp[10] = 'y1933';
exp[11] = 'y1934';
exp[12] = 'y1935';
exp[13] = 'y1936';
exp[14] = 'y1937';
exp[15] = 'y1938';
exp[16] = 'y1939';
exp[17] = 'y1940';
exp[18] = 'y1942';

$(document).ready(function() {
  $('#slider').slider({
    slide: function(event, ui) {
      handle(ui.value);
    },
    max: maxnum
  });
  $('#explanation').children().hide();
  $('#explanation div:first').show();
});

function handle(value) {
  $('#worldmap').attr('src', 'images/' + src[value]);
  $('#explanation').children().hide();
  var id = null;
  for (var i = value; i >= 0 && id == null; i--) id = exp[i];
  $('#explanation').find('#' + id).show();
}
