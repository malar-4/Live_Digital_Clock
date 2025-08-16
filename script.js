// This function updates the clock every second and shows a greeting based on time.
function updateClock() {
  const now = new Date(); // get current date and time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // For 12-hour format and AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert 0 to 12
  // Add leading zeros to always show two digits
  const formattedHours = displayHours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  document.getElementById('clock').textContent = timeString;
  // Greeting based on the hour
  let greeting = "";
  if (hours >= 6 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
  } else if (hours >= 18 && hours < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }
  document.getElementById('greeting').textContent = greeting;
}
// Run the function once immediately, then repeat every second
updateClock();
setInterval(updateClock, 1000);