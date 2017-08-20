var is_touch_device = () => {
  console.log("checking device");
  return 'ontouchstart' in window || navigator.maxTouchPoints
};

export { is_touch_device }
