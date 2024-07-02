import React from "react";
const Person = ({ formData }) => {
    return (
      <div className="person-container">
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {'*'.repeat(formData.password.length)}</p>
        <p>Confirm Password: {'*'.repeat(formData.confirmPassword.length)}</p>
      </div>
    );
  }
  
  export default Person;
  