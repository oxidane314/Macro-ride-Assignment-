function Dashboard({

    eligibleCount,
    currentIndex,
    totalPoints,
    running

}) {

    return (

        <div
            style={{

                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 1000,
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                width: "240px"

            }}
        >

            <h2>🚗 Macro Rides</h2>

            <hr />

            <p>
                <strong>Status</strong>

                <br />

                {running ? "🟢 Running" : "⏸ Paused"}

            </p>

            <p>

                <strong>Eligible Pickups</strong>

                <br />

                {eligibleCount}

            </p>

            <p>

                <strong>Route Progress</strong>

                <br />

                {currentIndex + 1} / {totalPoints}

            </p>

        </div>

    );

}

export default Dashboard;