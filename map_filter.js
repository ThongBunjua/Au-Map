document.addEventListener("DOMContentLoaded", function () {
    function toggleMarkers(category, show) {
        console.log(`Toggling category: ${category} - Show: ${show}`);

        if (window.markers[category]) {
            window.markers[category].forEach(marker => {
                if (show) {
                    if (!window.map.hasLayer(marker)) {
                        marker.addTo(window.map); // ✅ Show markers
                    }
                } else {
                    if (window.map.hasLayer(marker)) {
                        marker.remove(); // ✅ Hide markers
                    }
                }
            });
        } else {
            console.warn(`Category '${category}' not found!`);
        }
    }

    // Handle checkbox changes
    document.querySelectorAll(".filter-option").forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var category = this.getAttribute("data-category");
            toggleMarkers(category, this.checked);
        });
    });

    // Toggle filter panel visibility
    document.getElementById("filter-toggle").addEventListener("click", function () {
        document.getElementById("filter-panel").classList.add("visible");
    });

    document.getElementById("filter-close").addEventListener("click", function () {
        document.getElementById("filter-panel").classList.remove("visible");
    });
});
