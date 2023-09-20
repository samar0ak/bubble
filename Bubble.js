let container = "";

function makeBubble() {
  for (let i = 1; i <= 210; i++) {
    let random = Math.floor(Math.random() * 10);
    container += `  <div class="bubble">${random}</div>`;
  }
  document.querySelector(".pannel-bottom").innerHTML = container;
}

makeBubble();

// refejhbjrehfgbvyjhreeeeeeeeeeeeeeeeeeeeeeeeereyy

let timercount = 5;
function settimer() {
  let stopsetinterval = setInterval(function () {
    if (timercount > 0) {
      timercount--;
      document.querySelector(".timer-counter").textContent = timercount;
    } else {
      clearInterval(stopsetinterval);
      document.querySelector(".hit-container").textContent = '';
      document.querySelector(
        ".pannel-bottom"
      ).innerHTML = `<div  class="finish">Game over Your Score is ${setscore}</div> <br> <button class="btn" onclick=" onnewclick()" >mall ptaao bhai</button> `;
    }
  }, 1000);
}

// kshkdfhyuhyhfuirahuiraeshfgh

settimer();

let setscore = 0;
function increaseScore() {
  
  setscore += 10;
  document.querySelector(".set-score").textContent = setscore;
}

// jajssssssssssssssssssssssssssssss

let rndhit;
function newhit() {
  rndhit = Math.floor(Math.random() * 10);
  document.querySelector(".hit-container").textContent = rndhit;
}
newhit();

document.querySelector(".pannel-bottom")
  .addEventListener("click", function (details) {
    let recivednumber = Number(details.target.textContent);
    if (recivednumber == rndhit) {
      document.querySelector(".pannel-bottom").textContent = " ";
      increaseScore();
      newhit();
      timercount = 5;

      container = "";
      makeBubble();
    }
  });

function onnewclick() {
  container = "";
  setscore = 0;
  document.querySelector(".set-score").textContent = 0;

  makeBubble();
  timercount = 5;
  newhit();
  settimer();
}
