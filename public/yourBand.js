let drum = document.getElementsByClassName("drum");
let n = drum.length;
for (let i = 0; i < n; i++) {
  drum[i].addEventListener("click", function () {
    let soundBar = this.innerHTML;
    soundPlay(soundBar);
    animationChange(soundBar);
  });
}

document.addEventListener("keydown", function (event) {
  soundPlay(event.key);
  animationChange(event.key);
});

function soundPlay(sound) {
  if (sound == "w") {
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (sound == "a") {
    let audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (sound == "s") {
    let audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (sound == "d") {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (sound == "j") {
    let audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (sound == "k") {
    let audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (sound == "l") {
    let audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function animationChange(key) {
  let current = document.getElementById(key + "_drum");
  current.classList.add("pressed");

  setTimeout(function () {
    current.classList.remove("pressed");
  }, 1000);
}

function currentTime() {
  let date = new Date();
  let hh = ("0" + date.getHours()).slice(-2);
  let mm = ("0" + date.getMinutes()).slice(-2);
  let ss = ("0" + date.getSeconds()).slice(-2);
  let session = "Good Evening";

  if (hh >= 5 && hh < 12) {
    session = "Good Morning";
  } else if (hh >= 12 && hh < 18) {
    session = "Good Afternoon";
  }

  let time = hh + ":" + mm + ":" + ss + " ";
  let greeting = session;

  document.getElementById("session").innerText = greeting;
  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
