var clicks = 0;
var calories = 0;
function onClickFries() {
  clicks += 1;
  calories += 365;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("calories").innerHTML = calories;
};
function onClickBurger() {
  clicks += 1;
  calories += 375;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("calories").innerHTML = calories;
};
function onClick() {
  clicks += 1;
  calories += 0;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("calories").innerHTML = calories;
};
function onClickSpaghetti() {
  clicks += 1;
  calories += 212;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("calories").innerHTML = calories;
};
function onClickLasagna() {
  clicks += 1;
  calories += 408;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("calories").innerHTML = calories;
};
function onClickPepsi() {
  clicks += 1;
  calories += 225;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("calories").innerHTML = calories;
};
