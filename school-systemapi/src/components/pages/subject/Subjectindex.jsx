import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Mainindex.css";
import "./Subject.css";

export default function SubjectIndex() {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/api/subject", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch subjects");
        return res.json();
      })
      .then((data) => setSubjects(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    if (window.confirm("Do you want to delete this subject?")) {
      fetch(`http://127.0.0.1:8000/api/subject/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Delete failed");
          setSubjects((prev) => prev.filter((s) => s.id !== id));
        })
        .catch((error) => console.error(error));
    }
  };

  const filteredSubjects = subjects.filter((s) =>
    s.subject_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="student-card">
        <div className="student-header">
          <h2>Subject Details</h2>

          <div className="actions">
            <input
              type="text"
              placeholder="Search subject..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Link to="/subject/create" className="btn btn-success">
              + Create Subject
            </Link>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr className="text-center">
                <th>Subject Name</th>
                <th>Subject Index</th>
                <th>Subject Order</th>
                <th>Subject Color</th>
                <th>Subject Number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subject) => (
                  <tr key={subject.id} className="text-center">
                    <td>{subject.subject_name}</td>
                    <td>{subject.subject_index}</td>
                    <td>{subject.subject_order}</td>
                    <td>
                      <input
                        type="color"
                        value={subject.subject_color}
                        disabled
                      />
                    </td>
                    <td>{subject.subject_number}</td>
                    <td>
                      <Link
                        to={`/subject/show/${subject.id}`}
                        className="btn btn-info btn-sm mx-1"
                      >
                        Show
                      </Link>

                      <Link
                        to={`/subject/edit/${subject.id}`}
                        className="btn btn-warning btn-sm mx-1"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => handleDelete(subject.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No subjects found.
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
