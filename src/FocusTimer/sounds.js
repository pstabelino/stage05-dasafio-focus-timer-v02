import state from "./state.js";
import * as audios from "./audios.js";

export function musicForest() {
  state.isMute = document.documentElement.classList.toggle("music-on-forest");

  if (state.isMute) {
    audios.buttonPressForest.play();
    return;
  }

  audios.buttonPressForest.pause();
}

export function musicRain() {
  state.isMute = document.documentElement.classList.toggle("music-on-rain");

  if (state.isMute) {
    audios.buttonPressRain.play();
    return;
  }

  audios.buttonPressRain.pause();
}

export function musicCoffee() {
  state.isMute = document.documentElement.classList.toggle("music-on-coffee");

  if (state.isMute) {
    audios.buttonPressCoffee.play();
    return;
  }

  audios.buttonPressCoffee.pause();
}

export function musicFlames() {
  state.isMute = document.documentElement.classList.toggle("music-on-flames");

  if (state.isMute) {
    audios.buttonPressFlames.play();
    return;
  }

  audios.buttonPressFlames.pause();
}
