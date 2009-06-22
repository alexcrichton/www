var showing = null;

function showMain() {
  if (showing == null)
    return;
  // reset everything after the current list has faded out
  $('.list:visible').fadeOut('normal', function() {
    $('#java').animate({width: '400px',height: '200px', top: '-170px', left: 0, backgroundColor:'white'});
    $('#java h1').animate({top: '-5px', left: '100px', fontSize: '40px'});
    $('#websites').animate({width: '400px', height: '200px', top: '-270px', left: '550px', backgroundColor:'white'});
    $('#websites h1').animate({top: '166px', left: '170px', fontSize: '40px'});
    $('h1 a').animate({color:'black'});
    $('#name').animate({top: '110px', left: '275px', width: '400px', height: '250px'});
    $('#name img').animate({width:'320px'});
  });
  showing = null;
}

function showJava() {
  if (showing == 'java')
    return;
  if (showing != null) {
    var tmp = 0;
    $('.list:visible, #websites h1').fadeOut(function() {
      if (tmp == 1)
        return;
      tmp = 1;
      $('#websites').css({backgroundColor:'white', left:'950px', width:'300px'}).animate({left:'650px'});
      $('#websites h1').show().css({left: '25px', top:'430px', fontSize:'50px'});
      $('#websites h1 a').css('color', 'black');
      $('#name').animate({left:'300px',top:'82px'});
      $('#java').animate({left:'-300px'}, function(){
        $('#java').css({width:'650px', left:'0', backgroundColor:'#000'});
        $('#java h1').css({left:'190px',fontSize:'80px',top:'392px'});
        $('#java h1 a').animate({color:'white'});
        $('#java .list').fadeIn();
      });
    });
  } else {
    // zoom in and shift left
    $('#name').animate({width:'500px', height:'300px', left:'300px',top:'82px'}).find('img').animate({width:'420px'});
    // increase to large rectangle on left
    $('#websites').animate({width: '300px',height:'500px',top:'-320px', left:'650px'});
    $('#websites h1').animate({left: '25px', top:'430px', fontSize:'50px'});
    // shift right, then have other stuff fade in
    $('#java').animate({left:'-400px', top:'-520px'}, function() {
      $('#java').css({width:'650px', left:'0', top:'-820px', height:'500px', backgroundColor: 'black'});
      $('#java h1').css({left:'190px',fontSize:'80px',top:'392px'});
      $('#java h1 a').animate({color:'white'});
      $('#java .list').fadeIn();
    });
  }
  showing = 'java';
}

function showWebsites() {
  if (showing == 'websites')
    return;
  if (showing != null) {
    var tmp = 0;
    $('.list:visible, #java h1').fadeOut(function() {
      if (tmp == 1)
        return;
      tmp = 1;
      $('#java').css({backgroundColor:'white', left:'-300px', width:'300px'}).animate({left:0});
      $('#java h1').show().css({left: '30px', top:'32px', fontSize:'80px'});
      $('#java h1 a').css('color', 'black');
      $('#name').animate({left:'150px',top:'100px'});
      $('#websites').animate({left:'950px'}, function(){
        $('#websites').css({width:'650px', left:'300px', height:'500px', backgroundColor:'#000'});
        $('#websites h1').css({left:'190px',fontSize:'80px',top:'32px'});
        $('#websites h1 a').animate({color:'white'});
        $('#websites .list').fadeIn();
      });
    });
  } else {
    // zoom in and shift left
    $('#name').animate({width:'500px', height:'300px', left:'150px',top:'100px'}).find('img').animate({width:'420px'});
    // increase to large rectangle on left
    $('#java').animate({width: '300px',height:'500px',top:'-520px'});
    $('#java h1').animate({left: '30px', top:'32px', fontSize:'80px'});
    // shift right, then have other stuff fade in
    $('#websites').animate({left:'950px', top:'-320px'}, function() {
      $('#java').css('top', '-820px');
      $('#websites').css({width:'650px', left:'300px', height:'500px', backgroundColor:'#000'});
      $('#websites h1').css({left:'190px',fontSize:'80px',top:'32px'});
      $('#websites h1 a').css({color:'white'});
      $('#websites .list').fadeIn();
    });
  }
  showing = 'websites';
}
