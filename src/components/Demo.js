import React, { useState, useMemo } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [val, setVal] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const prime = useMemo(() => findPrime(val), [val]);
    return (
        <div className={"mt-24 border border-black w-2/4 mx-2 " + (isDarkTheme && "bg-gray-900 text-white")}>
            <div className='m-2 flex justify-between'>
                <input className={'p-2 border border-black w-64 text-black'} type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder="Enter your text" />
                <button onClick={() => setIsDarkTheme(!isDarkTheme)} className='font-bold border border-black px-4 bg-white text-black'>{isDarkTheme ? 'Light' : 'Dark'}</button>
            </div>
            <div className='m-4'>
                <h1 className='font-bold'>Nth Prime - {prime}</h1>
            </div>
        </div>
    )
}

export default Demo