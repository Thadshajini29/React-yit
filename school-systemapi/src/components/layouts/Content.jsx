import React from "react";
import "./Content.css";
import Student from "../pages/Student";
import Studentdetail from "../pages/Studentdetail";

export default function Content({ page }) {
  // 'page' prop can determine which component to render
  const renderPage = () => {
    switch (page) {
      case "student":
        return <Student />;
      case "studentdetail":
        return <Studentdetail />;
      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };

  return (
    <div className="content">
      {renderPage()}
    </div>
  );
}
