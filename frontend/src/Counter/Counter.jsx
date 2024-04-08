import React, { useState } from 'react'
import CounterButton from './CounterButton';


function Counter() {
    const [number, setNumber] = useState(0);

    const increment = (value) => {
        setNumber(number + value);
    }

    const resetValue = () => {
        setNumber(0);
    }

    return (
        <div>
            <h1 className='text-9xl font-bold p-3'>{number}</h1>
            <button onClick={resetValue} className='p-3 bg-red-200 rounded m-3' type="button">Reset</button>
            <div>
                <CounterButton changeValue={1} changeFunc={() => increment(1)} />
                <CounterButton changeValue={3} changeFunc={() => increment(3)} />
                <CounterButton changeValue={5} changeFunc={() => increment(5)} />
                <CounterButton changeValue={-5} changeFunc={() => increment(-5)} />
                <CounterButton changeValue={-3} changeFunc={() => increment(-3)} />
                <CounterButton changeValue={-1} changeFunc={() => increment(-1)} />
            </div>
        </div>
    );
}

export default Counter;
