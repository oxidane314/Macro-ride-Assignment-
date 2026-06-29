import driverRoute from "./route";
import { generatePickupPoints } from "../utils/generatePickups";

const pickupPoints = generatePickupPoints(driverRoute, 200);

export default pickupPoints;