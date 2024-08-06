import React, { useEffect } from "react";

function RenderLog() {
    useEffect(() => {
        console.log('Component has rendered');
    });

    return (
        <div>
            <p>Check consolen for at se render log</p>
        </div>
    );
}

export default RenderLog;