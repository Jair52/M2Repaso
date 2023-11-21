import { useState } from "react";
import Display from "../Display/Display";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        if(counter > 0) setCounter(counter - 1);
    }

    return(
        <div>
            <h1>Este es el Counter</h1>
            <button onClick={handleIncrement}>Aumentar state</button>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decrementar state</button>
            {/* condicion ? siTrue : siFalse  */}
            {
                counter > 1 && counter < 5 ? <Display counter={counter} handleIncrement={handleIncrement}/> : null
            }
            
        </div>
    )
}

export default Counter;