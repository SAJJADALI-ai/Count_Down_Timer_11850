const startBtn = document.getElementById('start-btn');
const alertSound = document.getElementById('alert-sound');

startBtn.addEventListener('click', startTimer);

function startTimer() {
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  if (isNaN(hours)) {
    hours = 0;
  }
  if (isNaN(minutes)) {
    minutes = 0;
  }
  if (isNaN(seconds)) {
    seconds = 0;
  }

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  let remainingSeconds = totalSeconds;

  const countdown = setInterval(() => {
    if (remainingSeconds === 0) {
      clearInterval(countdown);
      playAlert();
      showAlert();
    } else {
      remainingSeconds--;
      updateTimerDisplay(remainingSeconds);
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;

  const hoursDisplay = hours.toString().padStart(2, '0');
  const minutesDisplay = minutes.toString().padStart(2, '0');
  const secondsDisplay = secondsRemaining.toString().padStart(2, '0');

  document.title = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}

function playAlert() {
  alertSound.play();
}

function showAlert() {
  alert('Timer expired!');
}
