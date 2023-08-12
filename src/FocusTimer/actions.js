import state from "./state.js";
import * as timer from "./timer.js";

export function playRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function stopRunning() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function plusRunning() {
  state.minutes += 5;

  if (state.minutes > 60) {
    state.minutes = 60;
  }
  timer.updateDisplay(state.minutes);
}

export function minusRunning() {
  state.minutes -= 5;

  if (state.minutes < 0) {
    state.minutes = 0;
  }
  timer.updateDisplay(state.minutes);
}
