document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map", { crs: L.CRS.Simple, minZoom: -2, maxZoom: 2 });
    
    window.map = map;

    var imageUrl = "/image/map.jpg";  
    var imageBounds = [[0, 0], [1000, 1500]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.fitBounds(imageBounds);


    window.markers = {
        buildings: [],
        study: [],
        food: [],
        sport: [], 
        parking: []
    };



    var locations = [
        { name: "St. Gabriel's Hall (SG)", coords: [480.25, 373.75], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.", category:"all"},
        
        { name: "St. Michael's Hall (SM)", coords: [469.75, 474.5], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "St. Raphael's Hall (SR)", coords: [414.75, 492.75], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "The Cathedral of Learning (CL)", coords: [546, 418], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },
        
        { name: "Sala Chaluramuk Phaisit", coords: [400.25, 311.75], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "St. Louis Marie de Montfort's Church", coords: [266.25, 420.75], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "John XXIII Conference Center", coords: [242.75, 351.5], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "The Crystal Restaurant by Chez Jean Pierre", coords: [244.5, 286.75], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "Srisakdi Charmonman IT Building", coords: [544.5, 496.75], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "Car Park Building ", coords: [564, 531.5], icon: "/image/car.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "Montfort Del Rosario School of Architecture and Design (AR)", coords: [597.75, 594], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },
        
        { name: "Albert Laurence School of Communication Arts (CA)", coords: [623.25, 641.5], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "Communication Arts Studio (CA Studio)", coords: [646, 682.75], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: "Martin de Tours School of Management (MSM)", coords: [488, 604.25], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: " Martin de Tours School of Economics (MSE)", coords: [523, 668.75], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: "Vincent Mary School of Engineering Science and Technology (VMES)", coords: [551, 718.75], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"   },

        { name: "SLM Building", coords: [580.5, 774.5], icon: "/image/study.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all"  },

        { name: "AU Bus Stand", coords: [414.75, 679.5], icon: "/image/car.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "Pan Am International Flight Training Center - Thailand", coords: [500.75, 779], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: "President House", coords: [678.75, 759.5], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "Cafeteria", coords: [748.5, 789.75], icon: "/image/food.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "AU Mall", coords: [764.25, 870.75], icon: "/image/food.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: "Tennis Court", coords: [821.75, 960.5], icon: "/image/sport.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "Football Field", coords: [854, 1017.75], icon: "/image/sport.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "Clock Tower & Museum", coords: [752.5, 1000], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "King Solomon Residence Hall", coords: [819.75, 1021.25], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: " King David Residence Hall", coords: [833.25, 1109.75], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all" },

        { name: "Queen of Sheba Residence Hall", coords: [779.75, 1091], icon: "/image/building.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"  },

        { name: "Assumption University's Aquatic Center", coords: [708.25, 1175.75], icon: "/image/sport.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: "John Paul II Sports Center", coords: [649, 1226.5], icon: "/image/sport.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all" },

        { name: "Indoor Swimming Pool (25m)", coords: [663.25, 1281.25], icon: "/image/sport.png", image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all"},

        { name: "Indoor Badminton Court", coords: [622.75, 1289], icon: "/image/sport.png" , image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus.",category:"all"},

        { name: "Indoor Tennis Court", coords: [605.75, 1264.75], icon: "/image/sport.png" , image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all"},

        { name: "Car Park Area", coords: [548.75, 1190.5], icon: "/image/car.png" , image: "/image/map.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit nec scelerisque pharetra, ligula risus posuere felis, non tincidunt erat ex non metus. Integer facilisis, nisi nec fringilla sagittis, tortor lorem facilisis ligula, vel feugiat nunc nulla ac purus. Fusce eget turpis nec magna gravida interdum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et varius libero, sit amet ullamcorper felis. Vivamus efficitur lorem id eros scelerisque, nec aliquet nisi rhoncus." ,category:"all"}
    ];

    locations.forEach(loc => {
        var normalIcon = createIcon(40, loc.icon);
        var largeIcon = createIcon(50, loc.icon);
        var marker = L.marker(loc.coords, { icon: normalIcon });
    
        // 📌 Store marker in the correct category (but DO NOT add to the map yet)
        if (!window.markers[loc.category]) {
            window.markers[loc.category] = []; // Ensure the category exists
        }
        window.markers[loc.category].push(marker);
    
        // 🖱️ Marker Interactions
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
    
    
});



    