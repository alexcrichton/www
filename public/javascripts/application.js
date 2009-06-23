var showing = null;

function show_name() {
  if (showing == null)
    return;
  // reset everything after the current list has faded out
  $('.list:visible').fadeOut('normal', function() {
    $('#java').animate({width: '400px',height: '200px', top: '-170px', left: 0, backgroundColor:'white'});
    $('#java h1').animate({top: '-7px', left: '100px', fontSize: '40px'});
    $('#websites').animate({width: '400px', height: '200px', top: '-270px', left: '550px', backgroundColor:'white'});
    $('#websites h1').animate({top: '167px', left: '170px', fontSize: '40px'});
    $('h1 span').animate({color:'black'});
    $('#name').animate({top: '110px', left: '275px', width: '400px', height: '250px'});
    $('#name img').animate({width:'320px'});
  });
  unwrap('name');
  wrap('websites');
  wrap('java');
  showing = null;
}

function show_java() {
  if (showing == 'java')
    return;
  var callback = function() {
    $('#java').css({width:'650px', left:'0', top:'-820px', height:'500px', backgroundColor: 'black'});
    $('#java h1').css({left:'190px',fontSize:'80px',top:'391px'}).find('span').animate({color:'white'});
    $('#java .list').fadeIn();
  };
  if (showing != null) {
    var tmp = 0;
    $('.list:visible, #websites h1').fadeOut(function() {
      if (tmp == 1)
        return;
      tmp = 1;
      $('#websites').css({backgroundColor:'white', left:'950px', width:'300px'}).animate({left:'650px'});
      $('#websites h1').show().css({left: '25px', top:'430px', fontSize:'50px'});
      $('#websites h1 span').css('color', 'black');
      $('#name').animate({left:'300px',top:'82px'});
      $('#java').animate({left:'-300px'}, callback);
    });
    wrap('websites');
  } else {
    // zoom in and shift left
    $('#name').animate({width:'500px', height:'300px', left:'300px',top:'82px'}).find('img').animate({width:'420px'});
    // increase to large rectangle on left
    $('#websites').animate({width: '300px',height:'500px',top:'-320px', left:'650px'});
    $('#websites h1').animate({left: '25px', top:'430px', fontSize:'50px'});
    // shift right, then have other stuff fade in
    $('#java').animate({left:'-400px', top:'-520px'}, callback);
    wrap('name');
  }
  unwrap(showing = 'java');
}

function show_websites() {
  if (showing == 'websites')
    return;
  var callback = function() {
    $('#websites').css({width:'650px', left:'300px', height:'500px', backgroundColor:'#000'});
    $('#websites h1').css({left:'190px',fontSize:'80px',top:'32px'}).find('span').animate({color:'white'});
    $('#websites .list').fadeIn();
  };
  if (showing != null) {
    var tmp = 0;
    $('.list:visible, #java h1').fadeOut(function() {
      if (tmp == 1)
        return;
      tmp = 1;
      $('#java').css({backgroundColor:'white', left:'-300px', width:'300px'}).animate({left:0});
      $('#java h1').show().css({left: '30px', top:'32px', fontSize:'80px'});
      $('#java h1 span').css('color', 'black');
      $('#name').animate({left:'150px',top:'100px'});
      $('#websites').animate({left:'950px'}, callback);
    });
    wrap('java');
  } else {
    // zoom in and shift left
    $('#name').animate({width:'500px', height:'300px', left:'150px',top:'100px'}).find('img').animate({width:'420px'});
    // increase to large rectangle on left
    $('#java').animate({width: '300px',height:'500px',top:'-520px'});
    $('#java h1').animate({left: '30px', top:'32px', fontSize:'80px'});
    // shift right, then have other stuff fade in
    $('#websites').animate({left:'950px', top:'-320px'}, function() {
      $('#java').css('top', '-820px');
      callback();
    });
    wrap('name');
  }
  unwrap(showing = 'websites');
}

function unwrap(thing) {
  var selector = wrapper(thing);
  $(selector).parents('a').replaceWith($(selector));
}

function wrap(thing) {
  var selector = wrapper(thing);
  if ($(selector).parents('a').length > 0)
    return;
  $(selector).wrap($('<a href="#"></a>').attr('onclick', 'show_' + thing + '();$(this).blur();return false;'));
}

function wrapper(thing) {
  if (thing == 'websites')
    return '#websites h1 span';
  else if (thing == 'name')
    return '#name img.first';
  else if (thing == 'java')
    return '#java h1 span';
  return null;
}
