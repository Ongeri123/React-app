import { useState } from "react";

function SimpleState2() {

    const [currentState, SetCurrentState] = useState(0);

    const increment = () => {
        SetCurrentState(currentState + 1);
    }

    const decrement = () => {
        SetCurrentState(currentState - 1);
    }
    return (
        <div>
            <h2>Simple State</h2>
            <button onClick = {increment}>+</button>
            <span>{currentState }</span>
            <button onClick = {decrement}>-</button>
        </div>
    )
}

export default SimpleState2;