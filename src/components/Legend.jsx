function Legend() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        zIndex: 1000,
        background: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: "220px",
      }}
    >
      <h3>Legend</h3>

      <p>🟢 Eligible Pickup</p>
      <p>🔴 Outside Corridor</p>
      <p>🔵 Driver Route</p>
      <p>🟠 Service Zone</p>
      <p>🟦 H3 Corridor</p>
    </div>
  );
}

export default Legend;