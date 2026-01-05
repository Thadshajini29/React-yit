import React, { use, useState } from 'react'

export default function Createstudent() {
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    const handlerchangevalue=(e)=>{
        setfname(e.target.value);
    }
    const handlerchangelname=(e)=>{
        setlname(e.target.value);
    }

    return (
        <div>
            <form action="">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname"value={fname} onChange={(e)=>{handlerchangevalue(e)}}/><br/><br/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" value={lname} onChange={(e)=>{handlerchangelname(e)}}/><br/><br/>
                <input type="Submit" value="Submit" />
            </form>


            <h1>
                my full name is {fname} {lname}
            </h1>
        </div>
    )
}
