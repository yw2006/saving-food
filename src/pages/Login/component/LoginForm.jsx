import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/login.css'
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit the form data here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center pagecontainer h-100 w-100 loginpagecontainer">
      <div className="form-container p-5 w-100">
        <form onSubmit={handleSubmit} className="col-sm-12">
          <h2 className="text-white col-sm-12">LOGIN</h2>
          <p className="text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="loginlink">
              Create an account
            </Link>
          </p>
          <div className="form-group">
            <label htmlFor="email" className="text-white pb-2 pt-2">
              Email:
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p className="error text-white">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-white pb-2 pt-2">
              Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error text-white">{errors.password}</p>
            )}
          </div>
          <button type="submit" className="submitbutton mt-4">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm;
