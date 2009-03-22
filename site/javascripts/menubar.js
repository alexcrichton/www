var visible = [];

function initMenus() {
  var menubars = document.getElementsByClassName('menubar');
  for (var i = 0; i < menubars.length; i++) {
    var menus = menubars[i].getElementsByClassName('menu');
    for (var j = 0; j < menus.length; j++) {
      menus[j].hide();
      menus[j].onmouseout = maybeCloseMenu;
      var el = document.getElementById(menus[j].id.replace(/^sub-/, ""));
      el.onmouseover = showSubmenu;
      el.onmouseout = maybeCloseSubmenu;
      if (!el.hasClassName("top") && !el.hasClassName("sub"))
        el.addClassName("sub")
    }
  }
}

function maybeCloseMenu(e) {
  if (e == null)
    e = window.event;
  for (var i = visible.length - 1; i >= 0; i--) {
    if (!inDiv(e.clientX, e.clientY, visible[i]))
      visible.pop().hide();
    else
      return;
  }
}
function maybeCloseSubmenu(e) {
  if (e == null)
    e = window.event;
  var element = document.getElementById("sub-" + this.id);
  if (!inDiv(e.clientX, e.clientY, element)) {
    visible.splice(visible.indexOf(element), 1);
    element.hide();
  }
}

function showSubmenu(e) {
  if (e == null)
    e = window.event;
  var element = document.getElementById("sub-" + this.id);
  element.show(); // have to show for the offsetParent to be set for some reason...
  element.style.display = "block";
  var l = absLeft(this) - absLeft(element.offsetParent);
  var t = absTop(this) - absTop(element.offsetParent);
  if (this.hasClassName('top')) {
    element.style.left = l + "px";
    element.style.top = (t + this.offsetHeight) + "px";
  } else {
    element.style.left = (l + this.offsetWidth) + "px";
    element.style.top = t + "px";
  }
  element.style.zIndex = 1;
  if (visible[visible.length - 1] != element)
    visible.push(element);
}

function absLeft(el) {
  var x = 0;
  while (el) {
    x += el.offsetLeft;
    el = el.offsetParent;
  }
  return x;
}
function absTop(el) {
  var y = 0;
  while (el) {
    y += el.offsetTop;
    el = el.offsetParent;
  }
  return y;
}

function inDiv(x, y, el) {
  var l = absLeft(el);
  var t = absTop(el);
  return x >= l && x < l + el.offsetWidth && y >= t && y < t + el.offsetHeight;
}

addLoadEvent(initMenus);
