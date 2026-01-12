import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function StudentIndex() {
    const [students, setStudents] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/student")
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                setStudents(data);
                setTotalStudents(data.length);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const handlerDelete = (id) => {
        const filtered = students.filter(student => student.id !== id);
        setStudents(filtered);
        setTotalStudents(filtered.length);
    };

    return (
        <div className='container mt-5'>
            
            {/* <h2>Total Students: {totalStudents}</h2> */}
            <div>
                <h1 align='center'>Students List</h1>
                <button type="button" className="btn btn-light mb-3">
                    <Link to="/student/create" >Create</Link>
                </button>
            </div>


            <table className="table table-striped table-hover" border={2}>
                <thead className="table-secondary">
                    <tr>
                        <th>Father Name</th>
                        <th>Student Name</th>
                        <th>Admission Number</th>
                        <th>Grade ID</th>
                        <th>NIC NO</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Telephone Number</th>
                        <th>Address</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.father_name}</td>
                            <td>{student.student_name}</td>
                            <td>{student.admission_no}</td>
                            <td>{student.grade}</td>
                            <td>{student.nic_no}</td>
                            <td>{student.date_of_birth}</td>
                            <td>{student.gender}</td>
                            <td>{student.telephone_no}</td>
                            <td>{student.address}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handlerDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}