import { Polygon } from "react-leaflet";
import { cellToBoundary } from "h3-js";

function Corridor({ corridor }) {

  return (
    <>
      {[...corridor].map((cell) => {

        const boundary = cellToBoundary(cell);

        const positions = boundary.map(([lat, lng]) => [
          lat,
          lng
        ]);

        return (

          <Polygon
            key={cell}
            positions={positions}
            pathOptions={{
              color: "#2196F3",
              weight: 1,
              fillOpacity: 0.25
            }}
          />

        );

      })}
    </>
  );

}

export default Corridor;