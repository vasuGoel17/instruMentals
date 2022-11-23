const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const number = document.getElementById("number");
const respond = document.getElementById("like");
const feedbacks = document.getElementById("feedbacks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const numberValue = number.value;
  const respondValue = respond.value;
  const feedbacksValue = feedbacks.value;

  localStorage.setItem("First-name", firstNameValue);
  localStorage.setItem("Last-name", lastNameValue);
  localStorage.setItem("Email", emailValue);
  localStorage.setItem("number", numberValue);
  localStorage.setItem("respond", respondValue);
  localStorage.setItem("feedbacks", feedbacksValue);

  window.location.href = "/yourFeedback.html";
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
