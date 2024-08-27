// Roll Dice
function roll() {

  document.querySelectorAll(".dice")[0].style.backgroundColor="rgb(255, 255, 255)";
  document.querySelectorAll(".dice")[1].style.backgroundColor="rgb(255, 255, 255)";

  document.querySelector(".firstTopLeft").classList.remove("hidden");
  document.querySelector(".firstMiddleLeft").classList.remove("hidden");
  document.querySelector(".firstBottomLeft").classList.remove("hidden");
  document.querySelector(".firstMiddle").classList.add("hidden");
  document.querySelector(".firstTopRight").classList.remove("hidden");
  document.querySelector(".firstMiddleRight").classList.remove("hidden");
  document.querySelector(".firstBottomRight").classList.remove("hidden");

  document.querySelector(".secondTopLeft").classList.remove("hidden");
  document.querySelector(".secondMiddleLeft").classList.remove("hidden");
  document.querySelector(".secondBottomLeft").classList.remove("hidden");
  document.querySelector(".secondMiddle").classList.add("hidden");
  document.querySelector(".secondTopRight").classList.remove("hidden");
  document.querySelector(".secondMiddleRight").classList.remove("hidden");
  document.querySelector(".secondBottomRight").classList.remove("hidden");

  var number = randomNumber();
  var numberTwo = randomNumberTwo();
  if (number === 1) {
    one();
  } else if (number === 2) {
    two();
  } else if (number === 3) {
    three();
  } else if (number === 4) {
    four();
  } else if (number === 5) {
    five();
  } else {
    six();
  }

  function randomNumber() {
    var x = Math.random();
    x = x * 6;
    x = Math.ceil(x);
    return x;
  }

  function one() {
    document.querySelector(".firstTopLeft").classList.add("hidden");
    document.querySelector(".firstMiddleLeft").classList.add("hidden");
    document.querySelector(".firstBottomLeft").classList.add("hidden");
    document.querySelector(".firstMiddle").classList.remove("hidden");
    document.querySelector(".firstTopRight").classList.add("hidden");
    document.querySelector(".firstMiddleRight").classList.add("hidden");
    document.querySelector(".firstBottomRight").classList.add("hidden");
  }
  function two() {
    document.querySelector(".firstMiddleLeft").classList.add("hidden");
    document.querySelector(".firstBottomLeft").classList.add("hidden");
    document.querySelector(".firstTopRight").classList.add("hidden");
    document.querySelector(".firstMiddleRight").classList.add("hidden");
  }
  function three() {
    document.querySelector(".firstMiddleLeft").classList.add("hidden");
    document.querySelector(".firstBottomLeft").classList.add("hidden");
    document.querySelector(".firstMiddle").classList.remove("hidden");
    document.querySelector(".firstTopRight").classList.add("hidden");
    document.querySelector(".firstMiddleRight").classList.add("hidden");
  }
  function four() {
    document.querySelector(".firstMiddleLeft").classList.add("hidden");
    document.querySelector(".firstMiddleRight").classList.add("hidden");
  }
  function five() {
    document.querySelector(".firstMiddleLeft").classList.add("hidden");
    document.querySelector(".firstMiddleRight").classList.add("hidden");
    document.querySelector(".firstMiddle").classList.remove("hidden");
  }
  function six() {}

  // -----------------------------------------------

  if (numberTwo === 1) {
    oneCpy();
  } else if (numberTwo === 2) {
    twoCpy();
  } else if (numberTwo === 3) {
    threeCpy();
  } else if (numberTwo === 4) {
    fourCpy();
  } else if (numberTwo === 5) {
    fiveCpy();
  } else {
    sixCpy();
  }

  function randomNumberTwo() {
    var y = Math.random();
    y = y * 6;
    y = Math.ceil(y);
    return y;
  }

  function oneCpy() {
    document.querySelector(".secondTopLeft").classList.add("hidden");
    document.querySelector(".secondMiddleLeft").classList.add("hidden");
    document.querySelector(".secondBottomLeft").classList.add("hidden");
    document.querySelector(".secondMiddle").classList.remove("hidden");
    document.querySelector(".secondTopRight").classList.add("hidden");
    document.querySelector(".secondMiddleRight").classList.add("hidden");
    document.querySelector(".secondBottomRight").classList.add("hidden");
  }
  function twoCpy() {
    document.querySelector(".secondMiddleLeft").classList.add("hidden");
    document.querySelector(".secondBottomLeft").classList.add("hidden");
    document.querySelector(".secondTopRight").classList.add("hidden");
    document.querySelector(".secondMiddleRight").classList.add("hidden");
  }
  function threeCpy() {
    document.querySelector(".secondMiddleLeft").classList.add("hidden");
    document.querySelector(".secondBottomLeft").classList.add("hidden");
    document.querySelector(".secondMiddle").classList.remove("hidden");
    document.querySelector(".secondTopRight").classList.add("hidden");
    document.querySelector(".secondMiddleRight").classList.add("hidden");
  }
  function fourCpy() {
    document.querySelector(".secondMiddleLeft").classList.add("hidden");
    document.querySelector(".secondMiddleRight").classList.add("hidden");
  }
  function fiveCpy() {
    document.querySelector(".secondMiddleLeft").classList.add("hidden");
    document.querySelector(".secondMiddleRight").classList.add("hidden");
    document.querySelector(".secondMiddle").classList.remove("hidden");
  }
  function sixCpy() {}
}


// Reset dice


function reset() {
    document.querySelectorAll(".dice")[0].style.backgroundColor="maroon";
    document.querySelectorAll(".dice")[1].style.backgroundColor="maroon";

    document.querySelector(".firstTopLeft").classList.remove("hidden");
    document.querySelector(".firstMiddleLeft").classList.remove("hidden");
    document.querySelector(".firstBottomLeft").classList.remove("hidden");
    document.querySelector(".firstMiddle").classList.add("hidden");
    document.querySelector(".firstTopRight").classList.remove("hidden");
    document.querySelector(".firstMiddleRight").classList.remove("hidden");
    document.querySelector(".firstBottomRight").classList.remove("hidden");
  
    document.querySelector(".secondTopLeft").classList.remove("hidden");
    document.querySelector(".secondMiddleLeft").classList.remove("hidden");
    document.querySelector(".secondBottomLeft").classList.remove("hidden");
    document.querySelector(".secondMiddle").classList.add("hidden");
    document.querySelector(".secondTopRight").classList.remove("hidden");
    document.querySelector(".secondMiddleRight").classList.remove("hidden");
    document.querySelector(".secondBottomRight").classList.remove("hidden");
}