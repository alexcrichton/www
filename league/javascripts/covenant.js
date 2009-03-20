var k;
function showArticle(id) {
  var divs = document.getElementsByClassName("article");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id.toString() == id.toString()) {
      divs[i].style.visibility = "visible";
      divs[i].style.display = "";
    }
    else {
      divs[i].style.visibility = "hidden";
      divs[i].style.display = "none";
    }
  }
}

function parseURL(){
  showArticle(location.hash.substr(1));
}
