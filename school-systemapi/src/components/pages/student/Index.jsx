import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function StudentIndex() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8000/api/student", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch students");
        return res.json();
      })
      .then(data => setStudents(data))
      .catch(err => console.error(err));
  }, []);

  // Delete student (just removes from frontend state)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const updated = students.filter(student => student.id !== id);
      setStudents(updated);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Students List</h2>
        <Link to="/student/create" className="btn btn-primary">Create Student</Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Father Name</th>
              <th>Student Name</th>
              <th>Admission No</th>
              <th>Grade</th>
              <th>NIC No</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map(student => (
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
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}