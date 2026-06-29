import { latLngToCell, gridDisk } from "h3-js";

const CENTER = [28.4685, 77.0410];

const RESOLUTION = 9;

const zoneCenter = latLngToCell(
    CENTER[0],
    CENTER[1],
    RESOLUTION
);

const zone = new Set(
    gridDisk(zoneCenter, 8)
);

export default zone;