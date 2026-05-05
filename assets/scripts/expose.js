// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let select = document.getElementById("horn-select");

  select.addEventListener("change", function() {
    // Image update to the correct horn
    let img = document.querySelector("#expose img");
    img.src = "assets/images/" + select.value + ".svg";

    // Audio update to the correct sound
    let aud = document.querySelector("#expose audio");
    aud.src = "assets/audio/" + select.value + ".mp3";
    let btn = document.querySelector("button");
    btn.addEventListener("click", function() {
      aud.play();
      if (select.value == "party-horn") {
        const jsConfetti = new JSConfetti();
        // jsConfetti.addConfetti();
        jsConfetti.addConfetti({emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],});
      }
    });

    // Volume update to the correct option
    let vol = document.getElementById("volume");
    vol.addEventListener("input", function() {
      // Change the volume 
      aud.volume = vol.value / 100;

      // Change the icon image to match
      let volIcon = document.querySelector("volume-control img");
      if (vol.value == 0) {
        volIcon.src = "assets/icons/volume-level-0.svg";
      } else if (vol.value >= 1 && vol.value < 33) {
        volIcon.src = "assets/icons/volume-level-1.svg";
      } else if (vol.value >= 33 && vol.value < 67) {
        volIcon.src = "assets/icons/volume-level-2.svg";
      } else if (vol.value >= 67) {
        volIcon.src = "assets/icons/volume-level-3.svg";
      }
    });
  })
}

// // 1. Select the button
// const btn = document.getElementById("myButton");

// // 2 & 3. Add listener and define the action
// btn.addEventListener("click", function() {
//     alert("Button was clicked!");
// });
