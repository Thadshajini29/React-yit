import React from "react";

export default function Student(Props) {
  return (
    <div>
      <h2>Student Form</h2>
      <b>First Name:</b><i>{Props.fname}</i><br/>
      <b>Last Name:</b><i>{Props.lname}</i><br/>
      <b>Grade:</b><i>{Props.grade}</i><br/>
      <div>{Props.children}</div>
    </div>
  );
}
