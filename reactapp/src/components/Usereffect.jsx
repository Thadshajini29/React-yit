import React, { useEffect, useState} from 'react'

export default function Usereffect() {
    const [counter1, setcounter1] = useState(0);
    const [counter2, setcounter2] = useState(0);

    const handlercounter1 = () => {
        setcounter1(counter1 + 1);
        console.log("Counter1 Value");
    };
    const handlercounter2 = () => {
        setcounter2(counter2 + 1);
        console.log("Counter2 Value");
    };
    useEffect(() => {
        console.log("Counter 1 Updated Value:");
    }, []);

    useEffect(() => {
        console.log("Counter 2 Updated Value:");
    }, [counter2]);

    // handleIncrement = () => {
    //     setcounter1(counter1 + 1);
    // };

    // handleDecrement = () => {
    //     setcounter2(counter2 + 1);
    // };

    return (
        <>
            <div>Usereffect</div>
            <div>
                <h1>
                    Counter {counter1}
                </h1>
                <button onClick={handlercounter1}>Increment Counter 1</button>

                <h1>
                    Counter {counter2}
                </h1>
                <button onClick={handlercounter2}>Increment Counter 2</button>
            </div>
        </>

    )
}
