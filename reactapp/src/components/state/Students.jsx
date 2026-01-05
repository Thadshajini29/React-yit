import { Dataset } from "../../data/Dataset";
import { useState } from 'react'
import Card from "./card";


export default function Students() {
    // State to hold the list of students
    const [Students, setstudent] = useState(Dataset);

    // State to hold the total number of students
    const [total, settotalstudents] = useState(Dataset.length);

    // Function to handle deleting all students
    const handledeleteAll = () => {
        setstudent([]);
        settotalstudents(0);
    }

    // Function to handle resetting the student list to the original dataset
    const handlereset = () => {
        setstudent(Dataset);
        settotalstudents(Dataset.length);
    }
    // Function to handle deleting a specific student by id
    const handleDelete = (id) => {
        const fillterstudent = Students.filter((student) => {
            return (student.id !== id);
        })
        setstudent(fillterstudent);
        settotalstudents(fillterstudent.length);
    }

    return (
        <div>
            {Students.map((student) => {
                return (
                    <div key={student.id}>
                        <Card id={student.id} name={student.name} username={student.age} email={student.grade} /> 
                    </div>
                );
            })}
        </div>
        // <div>
        //     <h1>Student List</h1>
        //     <div>Total Students:{total}</div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Id</th>
        //                 <th>Name</th>
        //                 <th>Age</th>
        //                 <th>Grade</th>
        //                 <th>Action</th>
        //             </tr>
        //         </thead>

        //         {
        //             Students.map((student) => {
        //                 return (
        //                     <tbody>
        //                         <tr>
        //                             <td>{student.id}</td>
        //                             <td>{student.name}</td>
        //                             <td>{student.age}</td>
        //                             <td>{student.grade}</td>
        //                             <td><button onClick={() => {
        //                                 handleDelete(student.id)
        //                             }}>Delete</button></td>
        //                         </tr>
        //                     </tbody>
        //                 );
        //             })
        //         }
        //         <button onClick={handledeleteAll}>Delete All</button>
        //         <button onClick={handlereset}>Reset</button>
        //     </table>
        // </div>
    )
}
