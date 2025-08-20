// src/components/ProtectedRoute.jsx
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { useToast } from "../Context/ToastContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  if (!user) {
    // redirect to login if not logged in
    showToast("Please login, before you proceed", "primary");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
