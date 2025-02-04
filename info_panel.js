function showInfoPanel(location) {
    console.log("Showing info panel for:", location.name); // Debugging log

    var panel = document.getElementById("info-panel");
    if (panel) {
        panel.classList.add("visible");
        panel.classList.remove("hidden"); // Ensure it's not hidden
        document.getElementById("info-title").innerText = location.name;
        document.getElementById("info-description").innerText = location.description;
        document.getElementById("info-image").src = location.image;
        console.log("Info panel should now be visible.");
    } else {
        console.error("Info panel not found in DOM!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var closeButton = document.getElementById("close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            var panel = document.getElementById("info-panel");
            panel.classList.remove("visible");
            panel.classList.add("hidden");
        });
    } else {
        console.error("Close button not found in DOM!");
    }
});
