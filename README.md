# Macro Rides Driver Pickup Corridor Simulator

This project is a simulation of a driver moving along a predefined route in Delhi NCR. It demonstrates how H3 spatial indexing can be used to identify pickup requests that fall within a 350-meter corridor around the driver's route.

The application is built using React, Leaflet, and H3-js.

## 📸 Demo

> **Live Demo:**https://lambent-unicorn-80e41d.netlify.app/

## Features

- Simulated driver moving along a predefined route
- Interactive map using Leaflet
- H3-based 350 m buffer corridor around the driver
- Service zone visualization
- Randomly generated pickup requests
- Eligible pickup detection using H3 indexing
- Dashboard showing simulation details
- Play, Pause and Reset controls

# 📷 Screenshots

## Main Dashboard
```
screenshots/Dashboard.png
```

---

## H3 Corridor
```
screenshots/corridor.png
```

---

## Simulation
```
screenshots/demo.gif
```


## Tech Stack

- React
- Vite
- Leaflet
- React Leaflet
- H3-js

## Project Structure

```
src/
│
├── components/
├── data/
├── hooks/
├── utils/
├── App.jsx
└── main.jsx
```

## How it Works

1. A predefined driver route is loaded.
2. The driver moves along the route using a simulation.
3. Each route point is converted into H3 cells.
4. Neighboring H3 cells are added to create a corridor.
5. Pickup locations are converted to H3 cells.
6. Pickups inside the corridor and service zone are marked as eligible.

## Running the Project

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build the project

```bash
npm run build
```

## Future Improvements

- Real-time GPS updates
- Backend integration
- Multiple driver simulation
- Live pickup requests
- Better UI and animations

