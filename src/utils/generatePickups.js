export function generatePickupPoints(route, count = 200) {

    const pickups = [];

    for (let i = 0; i < count; i++) {

        const randomPoint =
            route[Math.floor(Math.random() * route.length)];

        const latOffset =
            (Math.random() - 0.5) * 0.02;

        const lngOffset =
            (Math.random() - 0.5) * 0.02;

        pickups.push({

            id: i + 1,

            name: `Pickup ${i + 1}`,

            lat: randomPoint[0] + latOffset,

            lng: randomPoint[1] + lngOffset

        });

    }

    return pickups;

}