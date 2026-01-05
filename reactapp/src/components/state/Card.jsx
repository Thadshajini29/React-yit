import React from 'react'
import './card.css'

export default function Card(props) {
        const handleDelete = (id) => {
        const filterusers = Users.filter((user) => {
            return (user.id !== id);
        })
        setusers(filterusers);
        settotalusers(filterusers.length);
    }
    return (
        <>
        <div className="card-container">
            <h2 className="card-title">Card Component</h2>
            <p className="card-description" >ID: {props.id}</p>
            <p className="card-description" >Name: {props.name}</p>
            <p className="card-description" >Email: {props.email}</p>
            <p className="card-description" >Username: {props.username}</p>
            <button className="delete-button" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
        </>
    )
}
