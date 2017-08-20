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
    console.log('we have moved ' + scroll_position_vertical + ' from top');
    change_class('nav-container');
  };
}

var change_class = (ct) => {
  var chosen_class = document.getElementsByClassName(ct);
  for (const i in chosen_class) {
    // Only grab the element
    console.log(ct[i]);
    if (i == 0) {
      ct[i].className = 'touch-device';
    }
  }
}
