var visible = [];

function initMenus() {
  var submenus = document.getElementById('topnav').getElementsByClassName('menu');
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].hide();
    submenus[i].onmouseout = maybeCloseMenu;
    var el = document.getElementById(submenus[i].id.replace(/^sub-/, ""));
    el.onmouseover = showSubmenu;
    el.onmouseout = maybeCloseSubmenu;
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
  if (this.hasClassName('top-menu-item')) {
    element.style.left = this.offsetLeft + "px";
    element.style.top = (this.offsetTop + this.offsetHeight) + "px";
  } else {
    element.style.left = (this.offsetLeft + this.offsetWidth) + "px";
    element.style.top = this.offsetTop + "px";
  }
  element.style.zIndex = 1;
  if (visible[visible.length - 1] != element)
    visible.push(element);
  element.show();
}

function noVisibleSubs() {
  if (document.getElementById(this.id) == null)
    return false
  var els = document.getElementById(this.id).getElementsByClassName('menu');
  for (var i = 0; i < els.length; i++)
    if (els[i].visible())
      return false;
  return true;
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

window.onload = initMenus;
