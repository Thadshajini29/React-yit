import React, { useEffect, useState } from 'react'

export default function Userinput() {
    const [name, setname] = useState("");

    const handlechange = (event) => {
        setname(event.target.value);
    }

    useEffect(() => {
        console.log("Name Updated Value:");
    }, [name]);

    return (
        <>
            <div>Userinput</div>
            <div>
                <input type="text" placeholder='Enter your name' onChange={handlechange} value={name} />
                <h2>Your name is:{name}</h2>
            </div>

        </>

    )
}
