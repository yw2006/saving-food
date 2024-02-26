import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/signup.css";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    role: 'user',
  });
  const navigation = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const validateForm = (data) => {
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    
    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!data.birthDate.trim()) {
      errors.birthDate = "Birthdate is required";
    }
    
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic can go here
      console.log("Form submitted successfully");
      if(formData.role=="user"){
        navigation("/userdashboard");
      }
      else{
        navigation("/chiratiesdachboard");
      }
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <div className="container-fluid h-auto align-items-center pagecontainer w-100 signuppagecontainer">
      <div className="form-container p-5 text-white w-100">
        <h2 className="">JOIN OUR COMMUNITY</h2>
        <p className="text-white">
          Already have an account?{" "}
          <Link to="/login" className="loginlink">
            Login
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-2">First Name:</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label className="mt-2 mb-2">Last Name:</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <label className="mt-2 mb-2">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label className="mt-2 mb-2">Birthdate:</label>
            <br />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="date-input"
            />
            {errors.birthDate && <p>{errors.birthDate}</p>}
          </div>
          <div>
            <label className="mt-2 mb-2">Choose Your Role:</label>
            <br />
            <select className="select" name="role" value={formData.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label className="mt-2 mb-2">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <label className="mt-2 mb-2">Confirm Password:</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="submitbutton mt-4">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
