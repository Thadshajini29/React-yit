import React, { useState } from 'react'

export default function Colour() {
    const [rcount, setrCount] = useState(255);
    const [gcount, setgCount] = useState(0);
    const [bcount, setbCount] = useState(255);
    const colourcode = `rgb(${rcount},${gcount},${bcount})`;

    const MIN_VALUE = 0;
    const MAX_VALUE = 255;
    const STEP = 10;

    return (
        <>
            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: colourcode,
                border: '1px solid black'
            }}>
            </div>

            <h1>{rcount}</h1>
            <button
                onClick={() => {
                    if (rcount + STEP <= MAX_VALUE) {
                        setrCount((prevState) => prevState + STEP);
                    }
                }}>Increment
            </button>
            <button
                onClick={() => {
                    if (rcount - STEP >= MIN_VALUE) {
                        setrCount((prevState) => prevState - STEP);
                    }
                }}>Decrement
            </button>

            <h1>{gcount}</h1>
            <button
                onClick={() => {
                    if (gcount + STEP <= MAX_VALUE) {
                        setgCount((prevState) => prevState + STEP);
                    }
                }}>Increment
            </button>
            <button
                onClick={() => {
                    if (gcount - STEP >= MIN_VALUE) {
                        setgCount((prevState) => prevState - STEP);
                    }
                }}>Decrement
            </button>

            <h1>{bcount}</h1>
            <button
                onClick={() => {
                    if (bcount + STEP <= MAX_VALUE) {
                        setbCount((prevState) => prevState + STEP);
                    }
                }}>Increment
            </button>
            <button
                onClick={() => {
                    if (bcount - STEP >= MIN_VALUE) {
                        setbCount((prevState) => prevState - STEP);
                    }
                }}>Decrement
            </button>

        </>

    )
}
