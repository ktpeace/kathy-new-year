let now = new Date().toLocaleTimeString("en-US", {
  timeZone: "America/Los_Angeles",
});
const timer = document.querySelector(".timer");
timer.innerHTML = calculateTime();

function calculateTime() {
  now = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const nums = now.split(/:| /); // ['9', '53', '42', 'PM']
  let hours = 12 - nums[0];
  let mins = 60 - nums[1];
  let secs = 60 - nums[2];
  if (nums[3] === "AM") {
    const h1 = document.querySelector("h1");
    h1.innerText = "🎆🌟HAPPY 2023, KATHY!🌟🎆";
    const belowH1 = document.querySelector(".below-h1");
    belowH1.innerHTML =
      '<img src="sheep.png" alt="rabbit riding sheep while yelling onward" class="sheep">';
  } else {
    if (mins.toString().length === 1) mins = `0${mins}`;
    if (secs.toString().length === 1) secs = `0${secs}`;
    return `${hours}:${mins}:${secs}`;
  }
}

function time() {
  timer.innerHTML = calculateTime();
}

setInterval(time, 1000);
