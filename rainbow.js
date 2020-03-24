function convColorToNums(color) {
  const matches = color.match(rgbRegex);
  return [Number(matches[1]), Number(matches[2]), Number(matches[3])];
}

function getColorValues(element) {
  const styles = getComputedStyle(element);
  return convColorToNums(styles.color);
}

function getNextValues(nums) {
  if (nums[0] === 255) {
    if (nums[1] > 0)
      if (nums[1] < 255) nums[1]++;
      else nums[0]--;
    else if (nums[2] > 0) nums[2]--;
    else nums[1]++;
  }
  else if (nums[1] === 255) {
    if (nums[2] > 0)
      if (nums[2] < 255) nums[2]++;
      else nums[1]--;
    else if (nums[0] > 0) nums[0]--;
    else nums[2]++;
  }
  else if (nums[2] === 255) {
    if (nums[0] > 0)
      if (nums[0] < 255) nums[0]++;
      else nums[2]--;
    else if (nums[1] > 0) nums[1]--;
    else nums[0]++;
  }
}

function convNumsToColor(nums) {
  return "rgb(" + nums[0] + ", " + nums[1] + ", " + nums[2] + ")";
}

const rgbRegex = /rgb?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/;
const walter = document.getElementById("walter");
const vals = getColorValues(walter);

function makeSpectrum() {
    getNextValues(vals);
    walter.style.color = convNumsToColor(vals);
    console.log(walter.style.color);
}

setInterval(makeSpectrum, 10);
