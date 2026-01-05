import React, { useState, useEffect } from 'react'
import Card from './state/card';
import './Githubusers.css';
import axios from 'axios';

export default function Githubusers() {
    const [users, setusers] = useState([]);
    

    const handledeleteAll = () => {
        setusers([]);
        settotalusers(0);
    }

    const handlereset = () => {
        setusers(Dataset);
        settotalusers(Dataset.length);
    }

    useEffect(() => {
       
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                setusers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    
        // fetchgithub();
    }, []);

    

    // async function fetchgithub() {
    //     try {
    //         const respons = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const data = await respons.json();
    //         console.log(data);
    //         setusers(data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <>
            <div>
                <div>
                    <h2>Github Users</h2>
                    <div className="users_card">
                        {users.map((user) => {
                            return (
                                <div key={user.id} >
                                    <Card id={user.id} name={user.name} email={user.email} username={user.username} />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <button onClick={handledeleteAll}>Delete All</button>
                <button onClick={handlereset}>Reset</button>
            </div>
            
            {/* <div>Githubusers</div>
            <table border="3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    );


}

