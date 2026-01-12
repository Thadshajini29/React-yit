import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Studentdetail() {
      const { id } = useParams();
  const navigate = useNavigate();
  const [Student, setStudent] = useState(null);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data));
  }, [id]);
   if (!Student) return <p>Loading...</p>;
  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {Student.id}</p>
      <p><strong>Father Name:</strong> {Student.father_name}</p>
      <p><strong>Student Name:</strong> {Student.student_name}</p>
      <p><strong>Addmission No:</strong> {Student.admission_no}</p>
      <p><strong>Grade:</strong> {Student.grade}</p>
      <p><strong>NIC:</strong> {Student.nic_no}</p>
      <p><strong>Date of Birth:</strong> {Student.date_of_birth}</p>
      <p><strong>Gender:</strong> {Student.gender}</p>
      <p><strong>Telephone NO:</strong> {Student.telephone_no}</p>
      <p><strong>Address:</strong> {Student.address}</p>
      <img src={Student.image} width="120" alt="user" />
      <button onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}
export default Studentdetail;