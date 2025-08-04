const drumButtons = document.querySelectorAll(".drum");

// Map of keys to sound file paths
const soundMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/kick-bass.mp3",
  l: "sounds/crash.mp3"
};

// Function to play sound based on key
function playSound(key) {
  const sound = soundMap[key];
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  } else {
    console.log(`No sound mapped for: ${key}`);
  }
}

// Add click event listeners
drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    playSound(this.innerHTML);
  });
});

// Add keyboard event listener
document.addEventListener("keydown", function (event) {
  playSound(event.key);
});
