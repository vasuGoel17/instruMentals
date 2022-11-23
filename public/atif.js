//DECLARING EVERY REQUIRED TAGS
let soundIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let songitemplay = Array.from(document.getElementsByClassName("songitemplay"));
let songinfo = document.getElementsByClassName("songinfo");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let masterSongName = document.getElementById("masterSongName");
let index = 1;
let nmbr = 0;

//MAKING AN ARRAY OBJECT TO PUT NAMES AND SONGS
let songs = [
  {
    key: "1",
    songName: "Tu Chaiye",
    coverPath: "songs/atif/1.mp3",
    filePath: "images/atif/1.jpg",
    duration: "4:32",
  },
  {
    key: "2",
    songName: "Pehli Nazar Mein",
    coverPath: "songs/atif/2.mp3",
    filePath: "images/atif/2.jpg",
    duration: "5:13",
  },
  {
    key: "3",
    songName: "Dekhte Dekhte",
    coverPath: "songs/atif/3.mp3",
    filePath: "images/atif/3.jpg",
    duration: "4:16",
  },
  {
    key: "4",
    songName: "Dil Diaan Gallan",
    coverPath: "songs/atif/4.mp3",
    filePath: "images/atif/4.jpg",
    duration: "4:20",
  },
  {
    key: "5",
    songName: "Hona Tha Pyar",
    coverPath: "songs/atif/5.mp3",
    filePath: "images/atif/5.jpg",
    duration: "3:42",
  },
  {
    key: "6",
    songName: "Jab Koi Baat",
    coverPath: "songs/atif/6.mp3",
    filePath: "images/atif/6.jpg",
    duration: "3:12",
  },
  {
    key: "7",
    songName: "Musafir",
    coverPath: "songs/atif/7.mp3",
    filePath: "images/atif/7.jpg",
    duration: "3:00",
  },
  {
    key: "8",
    songName: "Pehli Dafa",
    coverPath: "songs/atif/8.mp3",
    filePath: "images/atif/8.jpg",
    duration: "4:42",
  },
  {
    key: "9",
    songName: "Tera Hone Laga Hoon",
    coverPath: "songs/atif/9.mp3",
    filePath: "images/atif/9.jpg",
    duration: "4:46",
  },
  {
    key: "10",
    songName: "Tu Jaane Na",
    coverPath: "songs/atif/10.mp3",
    filePath: "images/atif/10.jpg",
    duration: "5:41",
  },
];

//CHANGING NAMES AND ADDING SONGS AND IMAGES
songitem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].filePath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
  element.getElementsByClassName("timestamp")[0].innerHTML = songs[i].duration;
});

//ADDING DEFAULT AUDIO
let audioElement = new Audio("songs/atif/1.mp3");

//ADDING CLICK EVENT ON MASTER PLAY BUTTON SO THAT IT CAN PAUSE AND PLAY
masterPlay.addEventListener("click", () => {
  masterPlay.classList.add("color");
  setTimeout(function () {
    masterPlay.classList.remove("color");
  }, 300);
  masterSongName.innerText = songs[index - 1].songName;
  if (audioElement.paused || audioElement.currenttime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = "0";
  }
});

//CHANGE THE PROGRESS RANGE FROM 0 TO 100
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

//CHANGING THE SONG LENGTH ON CHANGING THE PROGRESS RANGE
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

//FUNCTION TO MAKE EVERY PLAY BUTTON PAUSE
const makeAllPlay = () => {
  songitemplay.forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};

//PLAYING SONGS ON CLICK THERE PLAY BUTTONS
let pauseCheck = -1;
let playAfterPause = -1;
songitemplay.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.classList == "far songitemplay fa fa-play-circle") {
      index = parseInt(e.target.id);
      makeAllPlay();
      masterSongName.innerText = songs[index - 1].songName;
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      if (pauseCheck != index) {
        audioElement.currentTime = 0;
        audioElement.src = `songs/atif/${index}.mp3`;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = "1";
      } else {
        audioElement.src = `songs/atif/${index}.mp3`;
        audioElement.currentTime = playAfterPause;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = "1";
      }
    } else if (e.target.classList == "far songitemplay fa fa-pause-circle") {
      index = parseInt(e.target.id);
      makeAllPlay();
      masterSongName.innerText = songs[index - 1].songName;
      e.target.classList.remove("fa-pause-circle");
      e.target.classList.add("fa-play-circle");
      playAfterPause = audioElement.currentTime;
      audioElement.src = `songs/atif/${index}.mp3`;
      audioElement.pause();
      audioElement.currentTime = playAfterPause;
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      gif.style.opacity = "0";
      pauseCheck = index;
    }
  });
});

//EVENT FOR CLICKING ON PREVIOUS BUTTON
previous.addEventListener("click", () => {
  previous.classList.add("color");
  setTimeout(function () {
    previous.classList.remove("color");
  }, 300);

  if (index <= 1) {
    index = 10;
  } else {
    index -= 1;
  }
  masterSongName.innerText = songs[index - 1].songName;
  audioElement.currentTime = 0;
  audioElement.src = `songs/atif/${index}.mp3`;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");

  makeAllPlay();
  console.log("this is index: " + index);
  songitemplay.forEach((element) => {
    if (index == element.id) {
      if (element.classList.value == "far songitemplay fa fa-play-circle") {
        console.log("hello");
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
      }
    }
  });
});

//EVENT FOR CLICKING ON NEXT BUTTON
next.addEventListener("click", () => {
  next.classList.add("color");
  setTimeout(function () {
    next.classList.remove("color");
  }, 300);

  if (index >= 10) {
    index = 1;
  } else {
    index += 1;
  }
  masterSongName.innerText = songs[index - 1].songName;
  audioElement.currentTime = 0;
  audioElement.src = `songs/atif/${index}.mp3`;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  makeAllPlay();
  console.log("this is index: " + index);
  songitemplay.forEach((element) => {
    if (index == element.id) {
      if (element.classList.value == "far songitemplay fa fa-play-circle") {
        console.log("hello");
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
      }
    }
  });
});

// ON CLICK PAUSE and play TO MASTER PLAY BUTTON EVERY BUTTON SHOULD BE PAUSE and play
masterPlay.addEventListener("click", () => {
  songitemplay.forEach((element) => {
    if (element.classList.contains("fa-pause-circle")) {
      console.log(element);
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    } else {
      if (index == element.id) {
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
      }
    }
  });
});

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
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
