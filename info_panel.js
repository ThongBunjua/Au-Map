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

        // Populate Custom Category (Separate from filtering categories)
        var categoryElement = document.getElementById("info-category");
        if (categoryElement) {
            categoryElement.innerText = "Category: " + (location.customCategory ? location.customCategory : "N/A");
        } else {
            console.error("Category section not found in DOM!");
        }

        // Populate Facilities List
        var facilitiesList = document.getElementById("info-facilities");
        if (facilitiesList) {
            facilitiesList.innerHTML = "";  // Clear previous entries

            if (location.facilities && location.facilities.length > 0) {
                location.facilities.forEach(facility => {
                    let li = document.createElement("li");
                    li.innerText = facility;
                    facilitiesList.appendChild(li);
                });
            } else {
                let li = document.createElement("li");
                li.innerText = "No facilities available";
                facilitiesList.appendChild(li);
            }
        } else {
            console.error("Facilities list not found in DOM!");
        }
    } else {
        console.error("Info panel not found in DOM!");
    }
}

// Close button functionality
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
