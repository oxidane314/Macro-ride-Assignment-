import { useState, useEffect } from "react";

import driverRoute from "../data/route";
import { generateCorridor } from "../utils/corridor";

function useSimulation() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentIndex(prev => {

                if (prev >= driverRoute.length - 1)
                    return 0;

                return prev + 1;

            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const currentRoute = driverRoute.slice(0, currentIndex + 1);

    const currentPosition = driverRoute[currentIndex];

    const corridor = generateCorridor(currentRoute);

    return {

        currentRoute,

        currentPosition,

        corridor,

        currentIndex

    };

}

export default useSimulation;