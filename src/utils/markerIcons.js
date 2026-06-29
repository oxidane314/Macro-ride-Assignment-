import L from "leaflet";

export const greenIcon = new L.Icon({

    iconUrl: "/markers/green.png",

    shadowUrl: "/markers/shadow.png",

    iconSize: [25,41],

    iconAnchor: [12,41],

    popupAnchor: [1,-34]

});

export const redIcon = new L.Icon({

    iconUrl: "/markers/red.png",

    shadowUrl: "/markers/shadow.png",

    iconSize: [25,41],

    iconAnchor: [12,41],

    popupAnchor: [1,-34]

});