import React, {useState} from "react";

function CounterButton() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> Du har klikket på knappen {count} gange</p>
            <button onClick={() => setCount(count + 1)}>
                tryk på mig
            </button>
        </div>
    );
}

export default CounterButton;