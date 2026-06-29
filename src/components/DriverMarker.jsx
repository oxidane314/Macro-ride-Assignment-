import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const driverIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function DriverMarker({ position }) {
  return (
    <Marker position={position} icon={driverIcon}>
      <Popup>Driver</Popup>
    </Marker>
  );
}

export default DriverMarker;