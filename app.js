let localTime;
let pacificDate;
let pacificTime;

function getNow() {
  localTime = new Date();
  pacificDate = localTime.toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
  }); // '1/1/2023'
  pacificTime = localTime.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
  }); // '12:21:22 PM'
}

getNow();
const timer = document.querySelector(".timer");
countdown(); // to avoid a second of blank space

function calculateTime() {
  getNow();
  const nums = pacificTime.split(/:| /); // ['12', '21', '22', 'PM']
  let hours = 23 - nums[0];
  let mins = 60 - nums[1];
  let secs = 60 - nums[2];
  if (mins.toString().length === 1) mins = `0${mins}`;
  if (secs.toString().length === 1) secs = `0${secs}`;
  return `${hours}:${mins}:${secs}`;
}

function restOfTheYear() {
  getNow();
  timer.innerHTML = pacificDate;
}

function countdown() {
  timer.innerHTML = calculateTime();
}

function celebrate() {
  const h1 = document.querySelector("h1");
  h1.innerText = `🎆🌟HAPPY ${pacificDate.slice(4)}, KATHY!🌟🎆`;
  const belowH1 = document.querySelector(".below-h1");
  belowH1.innerHTML =
    '<img src="sheep.png" alt="rabbit riding sheep while yelling onward" class="sheep">';
}

if (pacificDate[0] === "1") {
  celebrate();
} else if (pacificDate.slice(0,5) = "12/31") {
setInterval(countdown, 1000);
} else {
  setInterval(restOfTheYear, 1000)
}
