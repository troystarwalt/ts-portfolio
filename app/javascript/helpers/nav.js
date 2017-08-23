import { is_touch_device } from '../helpers/check_touch';

if (is_touch_device() == true) {
  let x = document.getElementsByTagName('nav');
  for (const i in x) {
    // Only grab the element
    if (i == 0) {
      x[i].className = 'touch-device';
    }
  }
};

const top_of_window = 0;
const nav_bottom_break_point = 233;

window.onscroll = function () {
  let scroll_position_vertical = window.scrollY;
  if ( scroll_position_vertical > nav_bottom_break_point) {
    scroll_position_vertical = window.scrollY;
    addClass('navbar', 'closed-menu');
  }
  else {
    removeClass('navbar', 'closed-menu');
  }
}

var addClass = (targetedElement, className) => {
  var el = document.getElementById(targetedElement);
  if (el.classList.contains(className)) {
    return
  }
  else {
    el.className += " " + className;
  }
}

var removeClass = (targetedElement, className) => {
  var el = document.getElementById(targetedElement);
  if (el.classList.contains('closed-menu')) {
    console.log('yep itsthere');
    el.classList.remove('closed-menu');
  }
}
