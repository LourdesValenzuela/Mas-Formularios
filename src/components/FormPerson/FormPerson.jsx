import React from 'react';
import '../App/App.css'
const FormPerson = ({
  formData,
  errors,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleConfirmPasswordChange
}) => {
  return (
    <form>
      <div className="input-group input-group-sm mb-3 custom-group">
        <label htmlFor="firstName" className="input-group-text custom-label" id="inputGroup-sizing-sm">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleFirstNameChange}
          className="form-control custom-input"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </div>
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <div className="input-group input-group-sm mb-3 custom-group">
        <label htmlFor="lastName" className="input-group-text custom-label" id="inputGroup-sizing-sm">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleLastNameChange}
          className="form-control custom-input"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </div>
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <div className="input-group input-group-sm mb-3 custom-group">
        <label htmlFor="email" className="input-group-text custom-label" id="inputGroup-sizing-sm">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
          className="form-control custom-input"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </div>
      {errors.email && <p className="error">{errors.email}</p>}

      <div className="input-group input-group-sm mb-3 custom-group">
        <label htmlFor="password" className="input-group-text custom-label" id="inputGroup-sizing-sm">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handlePasswordChange}
          className="form-control custom-input"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </div>
      {errors.password && <p className="error">{errors.password}</p>}

      <div className="input-group input-group-sm mb-3 custom-group">
        <label htmlFor="confirmPassword" className="input-group-text custom-label" id="inputGroup-sizing-sm">
          Confirm<br />Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="form-control custom-input"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
    </form>
  );
};

export default FormPerson;


