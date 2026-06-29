import { Polyline } from "react-leaflet";

function DriverRoute({ route }) {
  return (
    <Polyline
      positions={route}
      pathOptions={{
        color: "blue",
        weight: 5,
      }}
    />
  );
}

export default DriverRoute;