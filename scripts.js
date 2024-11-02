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
