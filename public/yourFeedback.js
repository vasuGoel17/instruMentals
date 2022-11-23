const firstName = localStorage.getItem("First-name");
const lastName = localStorage.getItem("Last-name");
const email = localStorage.getItem("Email");
const number = localStorage.getItem("number");
const respond = localStorage.getItem("respond");
const feedbacks = localStorage.getItem("feedbacks");

document.getElementById("First-name").textContent = firstName;
document.getElementById("Last-name").textContent = lastName;
document.getElementById("Email").textContent = email;
document.getElementById("number").textContent = number;
document.getElementById("respond").textContent = respond;
document.getElementById("feedbacks").textContent = feedbacks;

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
