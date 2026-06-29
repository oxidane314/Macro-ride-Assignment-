function Controls({

    running,
    setRunning,
    resetSimulation

}) {

    return (

        <div
            style={{

                position:"absolute",

                top:20,

                right:20,

                zIndex:1000,

                background:"white",

                padding:15,

                borderRadius:10,

                boxShadow:"0 4px 12px rgba(0,0,0,.15)",

                display:"flex",

                gap:"10px"

            }}
        >

            <button
                onClick={() => setRunning(true)}
            >
                ▶
            </button>

            <button
                onClick={() => setRunning(false)}
            >
                ⏸
            </button>

            <button
                onClick={resetSimulation}
            >
                🔄
            </button>

        </div>

    );

}

export default Controls;