import React, { useState } from "react";
import { LoginAPI, RegisterAPI } from "../APIServices/Login/Login";
import BootstrapToast from "../Components/BootstrapToast";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../Context/ToastContext";
import { useAuth } from "../Context/authContext";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //   const [showToast, setShowToast] = useState(false);
  const { showToast } = useToast();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = false;
    if (
      name === "" ||
      name === undefined ||
      name === null ||
      email === "" ||
      email === undefined ||
      email === null ||
      password === "" ||
      password === undefined ||
      password === null
    ) {
      isValid = true;
      setError(true);
    }

    const api_params = {
      name: name,
      email: email,
      password: password,
    };

    if (!isValid) {
      UserRegisterAPI(api_params);
    }
  };

  const UserRegisterAPI = async (api_params) => {
    try {
      const res = await RegisterAPI(api_params);
      if (res) {
        showToast("User Registered, please login to continue!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "350px", borderRadius: "12px" }}
      >
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password field with toggle */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <span className="text-center mt-2">
          Don't have an account? <Link to="/login">Login here</Link>{" "}
        </span>
      </div>
      {/* <BootstrapToast showToast={showToast} setShowToast={setShowToast} /> */}
    </div>
  );
}
