import L from "leaflet";
import { Marker } from "react-leaflet";

const carIcon = new L.Icon({

    iconUrl: "/car.svg",

    iconSize: [36,36],

    iconAnchor: [18,18]

});

function DriverMarker({ position }) {

    return (

        <Marker

            position={position}

            icon={carIcon}

        />

    );

}

export default DriverMarker;