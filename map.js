document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map", { crs: L.CRS.Simple, minZoom: -2, maxZoom: 2 });

    window.map = map;

    var imageUrl = "/image/map_edit.jpg";
    var imageBounds = [[0, 0], [1000, 1500]];
    var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.fitBounds(imageBounds);

    window.markers = {
        buildings: [],
        study: [],
        food: [],
        sport: [],
        parking: []
    };



    var locations = [
        { name: "St. Gabriel's Hall (SG)", coords: [480.25, 373.75], icon: "/image/study.png", image: "/image/SG.jpg", description: "General academic building for classes and offices", category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Classrooms", "Faculty Offices", "Meeting Rooms", "Student Areas"]  },
        
        { name: "St. Michael's Hall (SM)", coords: [469.75, 474.5], icon: "/image/study.png", image: "/image/SM.jpg", description: "Houses humanities departments and lecture spaces",category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Classrooms", "Library", "Meeting Rooms"], customCategory: "Arts & Humanities",  facilities: ["Lecture Theaters", "Seminar Rooms", "Department Offices", "Student Lounge"] },

        { name: "St. Raphael's Hall (SR)", coords: [414.75, 492.75], icon: "/image/study.png", image: "/image/SR.jpg", description: "Primary science and research building with laboratories",category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Classrooms", "Library", "Meeting Rooms"], customCategory: "Science & Research",  facilities: ["Science Laboratories", "Research Facilities", "Faculty Office", "Lecture Halls"] },

        { name: "The Cathedral of Learning (CL)", coords: [546, 418], icon: "/image/study.png", image: "/image/CL.jpg", description: "Central administrative and academic building",category:["all","building","study", "food"], customCategory: "Academic Building",  facilities: ["Classrooms", "Library", "Meeting Rooms"], customCategory: "Main Academic Building",  facilities: ["Administrative Offices", "Classrooms", "Conference Rooms", "Student Services"]  },
        
        { name: "Sala Chaluramuk Phaisit", coords: [400.25, 311.75], icon: "/image/building.png", image: "/image/Sala.jpg", description: "Traditional Thai pavilion at main entrance landmark",category:["all","building"], facilities: ["Administrative Offices", "Classrooms", "Conference Rooms", "Student Services"], customCategory: "Cultural Landmark",  facilities: ["Reception Area", "Cultural Display", "Meeting Space", "Photo Point"]  },

        { name: "St. Louis Marie de Montfort's Church", coords: [266.25, 420.75], icon: "/image/building.png", image: "/image/church.jpg", description: "University church for religious services and ceremonies",category:["all","building"], customCategory: "Religious Building",  facilities: ["Main Chapel", "Prayer Rooms", "Meeting Spaces", "Ceremonial Areas"]  },

        { name: "John XXIII Conference Center", coords: [242.75, 351.5], icon: "/image/building.png", image: "/image/XXIII.jpg", description: "Main conference and event center for university functions",category:["all","building"], customCategory: "Conference Facility",  facilities: ["Conference Halls", "Meeting Rooms", "Event Spaces", "Audio-Visual Equipment"]  },

        { name: "The Crystal Restaurant by Chez Jean Pierre", coords: [244.5, 286.75], icon: "/image/building.png", image: "/image/crystal.jpg", description: "Main campus restaurant offering dining options",category:["all","building","food"], customCategory: "Dining Facility",  facilities: ["Dining Area", "Private Rooms", "Catering Service", "Kitchen Facilities"]  },

        { name: "Srisakdi Charmonman IT Building", coords: [544.5, 496.75], icon: "/image/building.png", image: "/image/It.jpg", description: "IT and computing center with technical facilities",category:["all","building","study"], customCategory: "Technology",  facilities: ["Computer Labs", "IT Classrooms", "Technical Support", "Server Rooms"] },

        { name: "Car Park Building ", coords: [564, 531.5], icon: "/image/car.png", image: "/image/Car1.jpg", description: "Multi-level parking structure for campus vehicles",category:["all","building","parking"], customCategory: "Parking Facility",  facilities: ["Multiple Parking Levels", "Security Office", "Payment Station", "CCTV System"] },

        { name: "Montfort Del Rosario School of Architecture and Design (AR)", coords: [597.75, 594], icon: "/image/study.png", image: "/image/AR.PNG", description: "School of Architecture with specialized design spaces",category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Design Studios", "Workshop Areas", "Exhibition Spaces", "Model Making Room"] },
        
        { name: "Albert Laurence School of Communication Arts (CA)", coords: [623.25, 641.5], icon: "/image/study.png", image: "/image/CA.PNG", description: "Communication Arts facility with media production",category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Media Labs", "Recording Studios", "Editing Rooms", "Broadcasting Room"]  },

        { name: "Communication Arts Studio (CA Studio)", coords: [646, 682.75], icon: "/image/building.png", image: "/image/CAS.PNG", description: "Professional media production space" ,category:["all","building","study"], customCategory: "Media Facility",  facilities: ["TV Studio", "Radio Studio", "Post-Production Suite", "Control Room"]  },

        { name: "Martin de Tours School of Management (MSM)", coords: [488, 604.25], icon: "/image/study.png", image: "/image/MSM.PNG", description: "Business school with modern learning facilities" ,category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Case Study Rooms", "Computer Labs", "Meeting Rooms", "Student Commons"] },

        { name: "Martin de Tours School of Economics (MSE)", coords: [523, 668.75], icon: "/image/study.png", image: "/image/MSE.PNG", description: "Economics department with research facilities" ,category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Research Labs", "Data Center", "Lecture Halls", "Study Areas"]  },

        { name: "Vincent Mary School of Engineering Science and Technology (VMES)", coords: [551, 718.75], icon: "/image/study.png", image: "/image/VMES.PNG", description: "Engineering facility with technical labs",category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Engineering Labs", "Workshop Spaces", "Technical Facilities", "Project Rooms"]  },

        { name: "Saint Luke School of Medicine", coords: [580.5, 774.5], icon: "/image/study.png", image: "/image/SLM.jpg", description: "Science and technology center with research facilities" ,category:["all","building","study"], customCategory: "Academic Building",  facilities: ["Research Facilities", "Science Labs", "Computer Labs", "Experiment Rooms", "True Labs"]  },

        { name: "AU Bus Stand", coords: [414.75, 679.5], icon: "/image/car.png", image: "/image/Bus.jpg", description: "University transport hub for shuttle services",category:["all","bus"], customCategory: "Transportation",  facilities: ["Waiting Area", "Information Board", "Ticket Counter", "Seating Area"]  },

        { name: "Pan Am International Flight Training Center - Thailand", coords: [500.75, 779], icon: "/image/building.png", image: "/image/Pan.PNG", description: "Aviation training center with specialized equipment" ,category:["all"], customCategory: "Training Facility",  facilities: ["Training Rooms", "Simulation Labs", "Briefing Rooms", "Equipment Storage"] },

        { name: "President House", coords: [678.75, 759.5], icon: "/image/building.png", image: "/image/PreHall.PNG", description: "Office of the university president",category:["all","building",], customCategory: "Administrative",  facilities: ["Executive Offices", "Meeting Rooms", "Reception Area", "Conference Room"]  },

        { name: "Cafeteria", coords: [748.5, 789.75], icon: "/image/food.png", image: "/image/Cafe.jpg", description: "Main campus food court",category:["all","building","food"], customCategory: "Food Court",  facilities: ["Food Court", "Seating Areas", "Reception Area"]  },

        { name: "AU Mall", coords: [764.25, 870.75], icon: "/image/food.png", image: "/image/AuMall.PNG", description: "Main campus food court" ,category:["all","building","food"], customCategory: "Food Court",  facilities: ["Food Court", "Seating Areas"]},

        { name: "Tennis Court", coords: [821.75, 960.5], icon: "/image/sport.png", image: "/image/TennisC.PNG", description: "Outdoor tennis facility",category:["all","sport"], customCategory: "Sports Facility",  facilities: ["Tennis Courts", "Equipment Room","Changing Rooms","Seating Area"]  },

        { name: "Football Field", coords: [854, 1017.75], icon: "/image/sport.png", image: "/image/Football.PNG", description: "Campus landmark with historical exhibits",category:["all","sport"], customCategory: "Landmark/Museum",  facilities: ["Exhibition Space", "Clock Mechanism","Viewing Area","Historical Displays"]  },

        { name: "Clock Tower & Museum", coords: [752.5, 1000], icon: "/image/building.png", image: "/image/Clock.PNG", description: "Student dormitory with modern amenities",category:["all","building"], customCategory: "Student Housing",  facilities: ["Student Rooms", "Common Areas","Study Rooms","Laundry Facility"] },

        { name: "King Solomon Residence Hall", coords: [819.75, 1021.25], icon: "/image/building.png", image: "/image/Solomon.PNG", description: "Student dormitory with modern amenities",category:["all","building","dorm"], customCategory: "Student Housing",  facilities: ["Student Rooms", "Common Areas","Study Rooms","Laundry Facility"] },

        { name: "King David Residence Hall", coords: [833.25, 1109.75], icon: "/image/building.png", image: "/image/Devid.PNG", description: "Student accommodation with support facilities",category:["all","building","dorm"], customCategory: "Student Housing",  facilities: ["Residential Rooms", "Common Lounge","Study Areas","Security Office"] },

        { name: "Queen of Sheba Residence Hall", coords: [779.75, 1091], icon: "/image/building.png", image: "/image/Sheba.PNG", description: "Modern student housing complex",category:["all","building","dorm"], customCategory: "Student Housing",  facilities: ["Student Rooms", "Social Spaces","Study Areas","Reception Desk"]  },

        { name: "Assumption University's Aquatic Center", coords: [708.25, 1175.75], icon: "/image/sport.png", image: "/image/Aqua.jpg", description: "Comprehensive water sports facility" ,category:["all","building","sport"], customCategory: "Sports Facility",  facilities: ["Swimming Pools", "Training Areas","Changing Rooms","Equipment Room"] },

        { name: "John Paul II Sports Center", coords: [649, 1226.5], icon: "/image/sport.png", image: "/image/II.jpg", description: "Main sports complex for various activities" ,category:["all","building","sport"], customCategory: "Student Housing",  facilities: ["Multi-purpose Court", "Training Areas","Equipment Room","Changing Rooms"] },

        { name: "Indoor Swimming Pool (25m)", coords: [663.25, 1281.25], icon: "/image/sport.png", image: "/image/25m.jpg", description: "Climate-controlled swimming facility" ,category:["all","building","sport"], customCategory: "Student Housing",  facilities: ["25m Pool", "Spectator Area","Changing Rooms","Lifeguard Station"]},

        { name: "Indoor Badminton Court", coords: [622.75, 1289], icon: "/image/sport.png" , image: "/image/Bad.PNG", description: "Indoor courts for badminton",category:["all","building","sport"], customCategory: "Student Housing",  facilities: ["Badminton Courts", "Seating Area","Equipment Room","Changing Rooms"]},

        { name: "Indoor Tennis Court", coords: [605.75, 1264.75], icon: "/image/sport.png" , image: "/image/InIennis.PNG", description: "Climate-controlled tennis facility" ,category:["all","building","sport"], customCategory: "Student Housing",  facilities: ["Tennis Courts", "Viewing Area","Equipment Storage","Changing Rooms"]},

        { name: "Car Park Area", coords: [548.75, 1190.5], icon: "/image/car.png" , image: "/image/Car2.PNG", description: "Open parking area for campus community" ,category:["all","parking",], customCategory: "Parking Facility",  facilities: ["Parking Spaces", "Security Post","Lighting System","CCTV Coverage"]}
    ];

    locations.forEach(loc => {
        var normalIcon = createIcon(40, loc.icon);
        var largeIcon = createIcon(50, loc.icon);
        var marker = L.marker(loc.coords, { icon: normalIcon });
    
        //Store marker in the correct category (but DO NOT add to the map yet)
        if (!window.markers[loc.category]) {
            window.markers[loc.category] = []; // Ensure the category exists
        }
        loc.category.forEach(cat => {
            if (!window.markers[cat]) {
                window.markers[cat] = [];
            }
            window.markers[cat].push(marker);
        });
    
        // Marker Interactions
        marker.on("click", () => showInfoPanel(loc));
    
        marker.on("mouseover", function () {
            marker.setIcon(largeIcon);
            marker.bindTooltip(loc.name, { permanent: false, direction: "top", offset: [0, -35] }).openTooltip();
        });
    
        marker.on("mouseout", function () {
            marker.setIcon(normalIcon);
            marker.unbindTooltip();
        });
    
        function createIcon(size, iconUrl) {
            return L.icon({
                iconUrl: iconUrl,
                iconSize: [size, size],
                iconAnchor: [size / 2, size],
                popupAnchor: [0, -size]
            });
        }
    });

    // Example filter function
function filterMarkers(selectedCategory) {
    Object.keys(window.markers).forEach(category => {
        window.markers[category].forEach(marker => {
            if (selectedCategory === "all" || window.markers[selectedCategory]) {
                map.addLayer(marker);
            } else {
                map.removeLayer(marker);
            }
        });
    });
}

    
    // Change into real map
    document.getElementById("toggle-map").addEventListener("click", function () {
        let customMap = document.getElementById("custom-map");
        let googleMapContainer = document.getElementById("google-map-container");
        let toggleButton = document.getElementById("toggle-map");
    
        if (customMap.style.display === "none") {
            // Show custom map, hide Google Maps
            customMap.style.display = "block";
            googleMapContainer.style.display = "none";
            toggleButton.innerText = "🌍";
        } else {
            // Show Google Maps, hide custom map
            customMap.style.display = "none";
            googleMapContainer.style.display = "block";
            toggleButton.innerText = "🌍";
        }
    });
    
    
    
});