// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");

  // Load all the available voices from SpeechSynthesizer
  function populateVoices() {
    const voices = synth.getVoices();
    voices.forEach(function(voice) {
      let option = document.createElement("option");
      option.textContent = voice.name;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();
  synth.addEventListener("voiceschanged", populateVoices);

  let btn = document.querySelector("button");
  let textArea = document.getElementById("text-to-speak");
  btn.addEventListener("click", function() {
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    // Find the voice that matches what user selected
    let voices = synth.getVoices();
    let selectedVoice = voices.find(function(voice) {
      return voice.name === voiceSelect.value;
    });
    utterance.voice = selectedVoice;

    let img = document.querySelector("#explore img");
    utterance.addEventListener("start", function() {
      img.src = "assets/images/smiling-open.png";
    })

    utterance.addEventListener("end", function() {
      img.src = "assets/images/smiling.png";
    })
    synth.speak(utterance);
    
  });


}