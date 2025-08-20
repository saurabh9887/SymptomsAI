import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { useToast } from "../Context/ToastContext";

const HistoryFeature = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleCheckHistory = () => {
    if (!user) {
      showToast("Please login, before you proceed", "primary");
      navigate("/login");
    } else {
      navigate("/analysis-history");
    }
  };
  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold">Now track your history with us 📜</h2>
      <p className="text-muted mt-2">
        Every symptom you check is securely saved, so you can revisit your past
        queries anytime in the history section.
      </p>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleCheckHistory}
      >
        Check history
      </button>
    </Container>
  );
};

export default HistoryFeature;
