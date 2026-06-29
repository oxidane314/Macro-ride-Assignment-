import { Polygon } from "react-leaflet";
import { cellToBoundary } from "h3-js";

function ZoneBoundary({ zone }) {

    return (

        <>

            {[...zone].map(cell => {

                const boundary = cellToBoundary(cell);

                return (

                    <Polygon

                        key={cell}

                        positions={boundary}

                        pathOptions={{
                            color: "orange",
                            fillOpacity: 0.08,
                            weight: 1.5
                        }}

                    />

                );

            })}

        </>

    );

}

export default ZoneBoundary;