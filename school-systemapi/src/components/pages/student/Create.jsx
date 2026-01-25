import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Student.css";

export default function StudentCreate() {
  const navigate = useNavigate();

  const initialState = {
    student_name: "",
    father_name: "",
    admission_no: "",
    grade: "",
    nic_no: "",
    date_of_birth: "",
    gender: "",
    telephone_no: "",
    address: "",
  };

  const [formdata, setFormdata] = useState(initialState);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:8000/api/grade", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setGrades(res.data))
      .catch((err) => console.error("Grade fetch error:", err));
  }, []);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/student",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Student registered successfully!");
      setFormdata(initialState);
      navigate("/students");

    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="student-card">
        <h2 className="mb-4">Create Student</h2>

        {message && <div className="alert alert-danger">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                name="student_name"
                className="form-control"
                value={formdata.student_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Father Name</label>
              <input
                type="text"
                name="father_name"
                className="form-control"
                value={formdata.father_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Admission No</label>
              <input
                type="text"
                name="admission_no"
                className="form-control"
                value={formdata.admission_no}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Grade</label>
              <select
                name="grade"
                className="form-select"
                value={formdata.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
                {grades.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.grade_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">NIC No</label>
              <input
                type="text"
                name="nic_no"
                className="form-control"
                value={formdata.nic_no}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                className="form-control"
                value={formdata.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-check-input"
                    checked={formdata.gender === "male"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Male</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-check-input"
                    checked={formdata.gender === "female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Telephone</label>
            <input
              type="tel"
              name="telephone_no"
              className="form-control"
              value={formdata.telephone_no}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-control"
              rows="3"
              value={formdata.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
