// Function to generate a random sentence
function generateSentence() {
  const randomPostType = postTypes[Math.floor(Math.random() * postTypes.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  return `Make a ${randomPostType} post about ${randomTopic}.`;
}

// DOM Elements
const sentenceElement = document.getElementById("generated-sentence");
const generateButton = document.getElementById("generate-btn");

// Event Listener for the Generate Button
generateButton.addEventListener("click", () => {
  sentenceElement.textContent = generateSentence();
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

// Attach event listener to the button
document.getElementById('generate-btn').addEventListener('click', () => {
    playSound(); // Play sound when button is clicked
    generateProfile(); // Generate profile
});