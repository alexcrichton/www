var showing = null;

function showMain() {
  if (showing == null)
    return;
  // reset everything after the current menu has faded out
  $('#websites ul, #java ul').fadeOut(function() {
    $('#java').animate({width: '400px',height: '200px', top: '-170px', left: 0, backgroundColor:'white'});
    $('#java h1').animate({top: '-5px', left: '100px', fontSize: '40px'});
    $('#java h1 a').animate({color:'black'});
    $('#websites').animate({width: '400px', height: '200px', top: '-270px', left: '550px', backgroundColor:'white'});
    $('#websites h1').animate({top: '166px', left: '170px', fontSize: '40px'});
    $('#websites h1 a').animate({color:'black'});
    $('#name').animate({top: '110px', left: '275px', width: '400px', height: '250px'});
    $('#name img').animate({width:'320px'});
  });
  showing = null;  
}

function showJava() {
  if (showing == 'java')
    return;
  if (showing != null) {

  } else {

  }
  showing = 'java';
}

function showWebsites() {
  if (showing == 'websites')
    return;
  if (showing != null) {

  } else {
// zoom in and shift left
    $('#name').animate({width:'500px', height:'300px', left:'150px',top:'100px'}).find('img').animate({width:'420px'});
        // increase to large rectangle on left
    $('#java').animate({width: '300px',height:'500px',top:'-520px'});
    $('#java h1').animate({left: '30px', top:'32px', fontSize:'80px'});
    $('#java h1 a').animate({color:'#ddd'});
    // shift right, then have other stuff fade in
    $('#websites').animate({left:'950px', top:'-320px'}, function() {
      $('#java').css('top', '-820px');
      $('#websites').css({width:'650px', left:'300px', top:'-320px', height:'500px', backgroundColor:'#000'});
      $('#websites h1').css({left:'190px',fontSize:'80px',top:'32px'});
      $('#websites h1 a').animate({color:'white'});
      $('#websites ul').fadeIn();
    });
  }
  showing = 'websites';  
}
