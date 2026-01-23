import React from "react";

function Register() {

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register submitted");
    
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" />
        <br />

        <input type="email" placeholder="Email" />
        <br />

        <input type="password" placeholder="Password" />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
