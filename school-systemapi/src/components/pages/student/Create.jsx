import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StudentCreate() {
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
    // image_id: null,
  };

  const [formdata, setFormdata] = useState(initialState);
  const [grades, setGrades] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/grade")
      .then((res) => setGrades(res.data))
      .catch((err) => console.error("Error fetching grades:", err));
  }, []);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image_id") {
      setFormdata({ ...formdata, image_id: files[0] });
    } else {
      setFormdata({ ...formdata, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const data = new FormData();
      for (const key in formdata) {
        if (formdata[key] !== null) {
          data.append(key, formdata[key]);
        }
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/student",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Student registered successfully!");
      alert("Registration Successful!");
      setFormdata(initialState);
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMsg =
        error.response?.data?.message || "Submission failed.";
      setMessage(errorMsg);
      alert(errorMsg);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Create Student</h1>

        {message && (
          <div
            className={`alert ${
              message.toLowerCase().includes("success")
                ? "alert-success"
                : "alert-danger"}`} >
            {message}
          </div>
        )}

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
              <label className="form-label">Admission Number</label>
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
                <option value="">Select a grade</option>
                {grades.map((grade) => (
                  <option key={grade.id} value={grade.id}>
                    {grade.grade_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">NIC Number</label>
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
              <label className="form-label d-block">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formdata.gender === "male"}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formdata.gender === "female"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Telephone Number</label>
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

          {/* <div className="mb-3">
            <label className="form-label">Image Upload</label>
            <input
              type="file"
              name="image_id"
              className="form-control"
              onChange={handleChange}
            />
          </div> */}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
