import { Marker, Popup } from "react-leaflet";
import pickupPoints from "../data/pickups";
import { convertToH3 } from "../utils/h3Utils";
import { greenIcon, redIcon } from "../utils/markerIcons";

function PickupPoints({ corridor }) {
  return (
    <>
      {pickupPoints.map((pickup) => {

        const cell = convertToH3(
          pickup.lat,
          pickup.lng
        );

        const eligible = corridor.has(cell);
  

        console.log(pickup.name, eligible);

        return (
          <Marker
            key={pickup.id}
            position={[pickup.lat, pickup.lng]}
            icon={eligible ? greenIcon : redIcon}
          >
            <Popup><b>{pickup.name}</b>
            <br />
            Eligible:{eligible ? " Yes" : " No"}</Popup>
          </Marker>
        );

      })}
    </>
  );
}

export default PickupPoints;