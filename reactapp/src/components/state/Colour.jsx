import React, { useState } from 'react'

export default function Colour() {
    const [redcount, setredcount] = useState(255);
    const [greencount, setgreencount] = useState(0);
    const [bluecount, setbluecount] = useState(0);
    const colourcode = `rgb(${redcount},${greencount},${bluecount})`;

    const minimum_value = 0;
    const maximum_value = 256;
    const steps = 10;

    return (
        <>
            <div style={{
                width: '200px',
                height: '100px',
                backgroundColor: colourcode,
                border: '1px solid black'
            }}>
            </div>

            <h3>Red:{redcount}</h3>
            <button
                onClick={() => {
                    if (redcount + steps < maximum_value) {
                        setredcount((prevState) => prevState + steps);
                    }
                }}>Increment
            </button>
            <button
                onClick={() => {
                    if (redcount - steps > minimum_value) {
                        setredcount((prevState) => prevState - steps);
                    }
                }}>Decrement
            </button>

            <h3>Green:{greencount}</h3>
            <button
                onClick={() => {
                    if (greencount + steps < maximum_value) {
                        setgreencount((prevState) => prevState + steps);
                    }
                }}>Increment
            </button>
            <button
                onClick={() => {
                    if (greencount - steps > minimum_value) {
                        setgreencount((prevState) => prevState - steps);
                    }
                }}>Decrement
            </button>

            <h3>Blue:{bluecount}</h3>
            <button
                onClick={() => {
                    if (bluecount + steps < maximum_value) {
                        setbluecount((prevState) => prevState + steps);
                    }
                }}>Increment
            </button>
            <button
                onClick={() => {
                    if (bluecount - steps > minimum_value) {
                        setbluecount((prevState) => prevState - steps);
                    }
                }}>Decrement
            </button>

        </>

    )
}
