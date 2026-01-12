import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function StudentCreate() {
  const initialState = {
    image_id: null,
    father_name: "",
    student_name: "",
    admission_no: "",
    grade: "", // This should ideally store the Grade ID
    nic_no: "",
    date_of_birth: "",
    gender: "",
    telephone_no: "",
    address: ""
  };

  const [formdata, setFormdata] = useState(initialState);
  const [grades, setGrades] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch grades from your local API
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/grade")
      .then((res) => setGrades(res.data))
      .catch((err) => console.error("Error fetching grades:", err));
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    
    try {

      const response = await axios.post('http://127.0.0.1:8000/api/student', formdata);

      alert('Registration Successful!');
      setMessage("Student registered successfully!");
      setFormdata(initialState);
    } catch (error) {
      console.error('Error submitting form:', error);

      const errorMsg = error.response?.data?.message || 'Submission failed.';
      setMessage(errorMsg);
      alert(errorMsg);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Create Student</h1>
        
        {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-info'}`}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="student_name" className="form-label">Student Name</label>
              <input type="text" className="form-control" id="student_name" name="student_name" value={formdata.student_name} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="father_name" className="form-label">Father Name</label>
              <input type="text" className="form-control" id="father_name" name="father_name" value={formdata.father_name} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="admission_no" className="form-label">Admission Number</label>
              <input type="text" className="form-control" id="admission_no" name="admission_no" value={formdata.admission_no} onChange={handleChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="grade" className="form-label">Grade</label>
              <select name="grade" id="grade" value={formdata.grade} onChange={handleChange} className="form-select" required>
                <option value="">Select a grade</option>
                {grades.map((grade) => (
                  <option key={grade.id} value={grade.id}> {grade.grade_name} </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="nic_no" className="form-label">NIC Number</label>
              <input type="text" className="form-control" id="nic_no" name="nic_no" value={formdata.nic_no} onChange={handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
              <input type="date" className="form-control" id="date_of_birth" name="date_of_birth" value={formdata.date_of_birth} onChange={handleChange} required/>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label d-block">Gender</label>
              <div className="mt-2">
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" id="male" name="gender" value="male" checked={formdata.gender === "male"} onChange={handleChange} required/>
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" id="female" name="gender" value="female" checked={formdata.gender === "female"} onChange={handleChange}/>
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="telephone_no" className="form-label">Telephone Number</label>
            <input type="tel" className="form-control" id="telephone_no" name="telephone_no" value={formdata.telephone_no} onChange={handleChange} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" id="address" name="address" rows="3" value={formdata.address} onChange={handleChange} required></textarea>
          </div>
          <div>
            <label htmlFor="image_id" className="form-label">Image ID</label>
            <input type="file" className="form-control" id="image_id" name="image_id" value={formdata.image_id} onChange={handleChange} />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">Submit Registration</button>
          </div>
        </form>
      </div>
    </div>
  );
}