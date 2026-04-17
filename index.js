

// Function to update current time in milliseconds
function updateCurrentTime() {
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}
// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Start live time update
  updateCurrentTime();
  // Update time every 500ms (smooth feel)
  setInterval(updateCurrentTime, 500);
console.log('✅ HNG Stage 1b Profile Card loaded successfully');
});

document.querySelectorAll('.social-links a').forEach(link => {
  Link.setAttribute('target', '_blank');
  Link.setAttribute('rel', 'noopener noreferrer');
});


