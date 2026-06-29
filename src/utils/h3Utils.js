import { latLngToCell } from "h3-js";

export function convertToH3(lat, lng) {
  const resolution = 9;
  return latLngToCell(lat, lng, resolution);
}