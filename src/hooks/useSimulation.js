import { useState, useEffect } from "react";

import driverRoute from "../data/route";
import pickupPoints from "../data/pickups";

import { generateCorridor } from "../utils/corridor";
import { convertToH3 } from "../utils/h3Utils";

function useSimulation() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const[running, setRunning] = useState(true);

    useEffect(() => {

        if(!running) return;

        const timer = setInterval(() => {

            setCurrentIndex((prev) => {

                if (prev >= driverRoute.length - 1)
                    return 0;

                return prev + 1;

            });

        }, 1000);

        return () => clearInterval(timer);

    }, [running]);

    function resetSimulation(){
        setCurrentIndex(0);
        setRunning(true);
    }

    const WINDOW_SIZE = 4;

    const start = Math.max(0, currentIndex - WINDOW_SIZE);

    const end = Math.min(
    driverRoute.length,
    currentIndex + WINDOW_SIZE + 1
    );

    const currentRoute = driverRoute.slice(start, end);

    const currentPosition = driverRoute[currentIndex];

    const corridor = generateCorridor(currentRoute);

    const currentCell = convertToH3(
        currentPosition[0],
        currentPosition[1]
    );

    const eligibleCount = pickupPoints.filter((pickup) => {

    const cell = convertToH3(
        pickup.lat,
        pickup.lng
    );

    return corridor.has(cell);

    }).length;

    return {

        currentIndex,
        currentRoute,
        currentPosition,
        corridor,
        eligibleCount,
        totalPoints: driverRoute.length,
        running,
        setRunning, 
        resetSimulation,
        currentCell

    };

}

export default useSimulation;