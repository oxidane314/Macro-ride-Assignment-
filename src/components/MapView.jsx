import { MapContainer, TileLayer } from "react-leaflet";

import DriverRoute from "./DriverRoute";
import DriverMarker from "./DriverMarker";
import PickupPoints from "./PickupPoints";
import Corridor from "./Corridor";
import Dashboard from "./Dashboard";

import useSimulation from "../hooks/useSimulation";
import ZoneBoundary from "./ZoneBoundary";
import zone from "../data/zone";
import Legend from "./Legend";
import Controls from "./Controls";

function MapView() {

    const {

        currentRoute,
        currentPosition,
        currentCell,
        corridor,
        eligibleCount,
        currentIndex,
        totalPoints,
        running, 
        setRunning,
        resetSimulation

    } = useSimulation();

    return (

        <div
            style={{
                position: "relative"
            }}
        >

            <Dashboard

                eligibleCount={eligibleCount}
                currentIndex={currentIndex}
                totalPoints={totalPoints}
                running={running}
                currentCell={currentCell}

            />

            <Legend/>

            <Controls
                running = {running}
                setRunning = {setRunning}
                resetSimulation = {resetSimulation}
            />

            <MapContainer
                center={[28.4595, 77.0266]}
                zoom={13}
                style={{
                    height: "100vh",
                    width: "100%"
                }}
            >

                <TileLayer
                     attribution='&copy; OpenStreetMap contributors & CARTO'
    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <DriverMarker
                    position={currentPosition}
                />

                <DriverRoute
                    route={currentRoute}
                />

                <ZoneBoundary
                    zone = {zone}
                />

                <Corridor
                    corridor={corridor}
                />

                <PickupPoints
                    corridor={corridor}
                />

            </MapContainer>

        </div>

    );

}

export default MapView;