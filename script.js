// Function to convert a string to Title Case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Function to generate a random sentence
function generateSentence() {
  const randomPostType = toTitleCase(postTypes[Math.floor(Math.random() * postTypes.length)]);
  const randomTopic = toTitleCase(topics[Math.floor(Math.random() * topics.length)]);

  return `Type: ${randomPostType}\n\nTopic: ${randomTopic}`;
}

// DOM Elements
const sentenceElement = document.getElementById("generated-sentence");
const generateButton = document.getElementById("generate-btn");

// Event Listener for the Generate Button
generateButton.addEventListener("click", () => {
  sentenceElement.textContent = generateSentence();
  playSound(); // Play sound when button is clicked
});

// Initialize with a random sentence on page load
window.onload = () => {
  sentenceElement.textContent = generateSentence();
};

// Play the sound
function playSound() {
  const audio = new Audio('click.mp3'); // Path to your sound file
  audio.play(); // Play the sound
}