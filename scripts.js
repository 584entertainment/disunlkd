function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("popup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    closePopup();
    alert("Thank you! Your free chapter will be sent to your email shortly.");
});

<script>
// Set the countdown duration (in seconds)
let countdownDuration = 10 * 60; // 10 minutes

// Update the countdown timer every second
let countdownInterval = setInterval(function() {
    // Calculate remaining minutes and seconds
    let minutes = Math.floor(countdownDuration / 60);
    let seconds = countdownDuration % 60;

    // Display the timer
    document.getElementById("countdown-timer").innerHTML = 
        `Limited Time Offer: ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;

    // Decrement the countdown
    countdownDuration--;

    // When countdown reaches zero, stop the timer and update the display
    if (countdownDuration < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "Offer Expired";
    }
}, 1000);
</script>
