import { latLngToCell, gridDisk } from "h3-js";

const RESOLUTION = 9;
const RING_SIZE = 1;

export function generateCorridor(route) {

  const corridor = new Set();

  route.forEach(([lat, lng]) => {

    const cell = latLngToCell(
      lat,
      lng,
      RESOLUTION
    );

    const neighbours = gridDisk(
      cell,
      RING_SIZE
    );

    neighbours.forEach(corridor.add, corridor);

  });

  return corridor;
}