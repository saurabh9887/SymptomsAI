import React, { useState } from "react";
import { LoginAPI } from "../APIServices/Login/Login";
import BootstrapToast from "../Components/BootstrapToast";
import { useNavigate } from "react-router-dom";
import { useToast } from "../Context/ToastContext";
import { useAuth } from "../Context/authContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [showToast, setShowToast] = useState(false);
  const { showToast } = useToast();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = false;
    if (
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
      email: email,
      password: password,
    };

    if (!isValid) {
      UserLoginAPI(api_params);
    }
  };

  const UserLoginAPI = async (api_params) => {
    try {
      const res = await LoginAPI(api_params);
      if (res.data.token) {
        showToast("Login Successful!");
        login(res.data.user);
        navigate("/");
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
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
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

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
      {/* <BootstrapToast showToast={showToast} setShowToast={setShowToast} /> */}
    </div>
  );
}
