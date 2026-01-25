import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Mainindex.css";
import "./Student.css";

export default function StudentIndex() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  const filteredStudents = students.filter(s =>
    s.student_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="student-card">
        <div className="student-header">
          <h2>Students List</h2>

          <div className="actions">
            <input
              type="text"
              placeholder="Search student..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Link to="/student/create" className="btn btn-primary">
              + Create Student
            </Link>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>Father</th>
                <th>Student</th>
                <th>Adm No</th>
                <th>Grade</th>
                <th>NIC</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Tel</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map(student => (
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
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
