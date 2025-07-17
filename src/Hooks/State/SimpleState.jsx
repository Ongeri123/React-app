import { useState} from 'react';
function SimpleState() { 

    const state = useState(0);

    // let clicked = (10);
    let increment = () => {
        console.log(state);
        let currentState = state[0];
        let newState = currentState + 1;
        let updateStateFunction = state[1];
        // state[1](newState);
        updateStateFunction(newState);
    }

    return (
        <div>
            <div>
                <button onClick={increment}>Click Me</button>
                <h2>Clicked {state[0]}</h2>
            </div>
        </div>
    )
}

export default SimpleState;