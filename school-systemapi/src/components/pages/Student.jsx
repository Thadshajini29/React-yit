import React from 'react'

import { Link } from "react-router-dom";
function Student() {
    const [student, setstudent] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/student")
            .then(res => res.json())
            .then(data => setstudent(data.student));
    }, []);
        return (
        <div>
            <h2>Student List</h2>
            {student.map(student => (
                <div key={student.id} style={{ marginBottom: "8px" }}>
                    <Link to={`/Student/${student.id}`}>
                        {student.father_name} {student.student_name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default Student;