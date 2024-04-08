import React, { useState } from 'react';

function CounterButton({ changeValue, changeFunc }) {
    return (
        <button className='bg-blue-200 font-bold p-2 mx-3 rounded' onClick={changeFunc}>
            {changeValue > 0 ? `+${changeValue}` : changeValue}
        </button>
    );
}

export default CounterButton