function Dashboard({

    eligibleCount,
    currentIndex,
    totalPoints,
    running,
    currentCell
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

            <p>

                <strong>Current H3 Cell</strong>

                <br />

                <span
                    style={{
                        fontSize: "12px",
                        wordBreak: "break-all",
                        color: "#555"
                    }}
                >
                    {currentCell}
                </span>
                
            </p>

        </div>

    );

}

export default Dashboard;