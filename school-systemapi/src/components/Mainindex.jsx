import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import StudentIndex from "./pages/student/Index";
import StudentCreate from "./pages/student/Create";

export default function Mainindex() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="students" element={<StudentIndex />} />
          <Route path="student/create" element={<StudentCreate />} />
        </Routes>
      </div>
    </div>
  );
}
