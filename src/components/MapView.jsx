import { MapContainer, TileLayer } from "react-leaflet";
import DriverRoute from "./DriverRoute"
import PickupPoints from "./PickupPoints";
import driverRoute from "../data/route";
import { generateCorridor } from "../utils/corridor";
import Corridor from "./Corridor";
import DriverMarker from "./DriverMarker";
import { useState, useEffect } from "react";

function MapView() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentRoute = driverRoute.slice(0, currentIndex + 1);

    const corridor = generateCorridor(currentRoute);

    useEffect(() => {

    const timer = setInterval(() => {

        setCurrentIndex((prev) => {

            if(prev >= driverRoute.length-1)
                return 0;

            return prev+1;

        });

    },1000);

    return ()=>clearInterval(timer);

    },[]);

    const currentPosition = driverRoute[currentIndex];


    return (

        <MapContainer
    center={[28.4595,77.0266]}
    zoom={13}
    style={{height:"100vh",width:"100%"}}
>

    <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <DriverMarker
    position={currentPosition}
    />

    <DriverRoute route={currentRoute} />

    <Corridor corridor={corridor}/>

    <PickupPoints corridor = {corridor} />

</MapContainer>

    );

}

export default MapView;