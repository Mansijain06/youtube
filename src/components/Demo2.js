import React, { useRef, useState } from "react";

const Demo2 = () => {
    let x = 0;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    console.log(ref);
    return (
        <div className="mt-24 border border-black w-96 m-2 p-4">
            <div className="flex justify-between items-center mb-10">
                <h1 className="font-bold text-xl">Let - {x}</h1>
                <button
                    className="bg-green-500 font-bold text-white p-2 cursor-pointer"
                    onClick={() => {
                        x = x + 1;
                        console.log(x);
                    }}
                >
                    Increase
                </button>
            </div>

            <div className="flex justify-between items-center mb-10">
                <h1 className="font-bold text-lg">State - {y}</h1>
                <button
                    onClick={() => setY(y + 1)}
                    className="bg-green-500 p-2 text-white font-bold"
                >
                    Increase State
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg">State - {ref.current}</h1>
                <button
                    onClick={() => ++ref.current}
                    className="bg-green-500 p-2 text-white font-bold"
                >
                    Increase ref
                </button>
            </div>
        </div>
    );
};

export default Demo2;
