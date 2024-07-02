import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormPerson from "../FormPerson/FormPerson";
import Person from "../Person/Person";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      firstName: value
    }));
    if (value.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name must be at least 2 characters"
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: ""
      }));
    }
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      lastName: value
    }));
    if (value.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last Name must be at least 2 characters"
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: ""
      }));
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      email: value
    }));
    if (value.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email must be at least 5 characters"
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ""
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      password: value
    }));
    if (value.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters"
      }));
    } else if (value !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
        confirmPassword: "Passwords must match"
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
        confirmPassword: ""
      }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      confirmPassword: value
    }));
    if (value.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Confirm Password must be at least 8 characters"
      }));
    } else if (value !== formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords must match"
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: ""
      }));
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <FormPerson 
          formData={formData}
          errors={errors}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
        />
      </div>
      <h2>Your Form Data</h2>
      <div className="person-container">
        <Person formData={formData} />
      </div>
    </div>
  );
}

export default App;
