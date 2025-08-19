import { useState } from "react";
import { analyseSymptoms } from "../APIServices/SymptomsAPI/SymptomsAPI";
import Card from "react-bootstrap/Card";

export default function SymptomForm({ onResult }) {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = false;

    if (symptoms === "" || symptoms === undefined || symptoms === null) {
      isValid = true;
      setError(true);
    }

    if (!isValid) {
      setLoading(true);
    }

    // const res = await fetch("http://localhost:5000/api/symptoms/analyse", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     userId: "689f741f855496e1024bfc07", // replace with logged-in user
    //     symptoms: symptoms.split(",").map((s) => s.trim()),
    //   }),
    // });

    const api_params = {
      userId: "689f741f855496e1024bfc07",
      symptoms: symptoms,
    };

    if (!isValid) {
      const res = await analyseSymptoms(api_params);
      // const data = await res.json();
      onResult(res.data.aiResponse);
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center mt-5"
      style={{ flexDirection: "column" }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Enter you Symptoms below
      </h3>
      <Card style={{ width: "82vw" }}>
        <Card.Body>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your symptoms (comma separated)..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              {error &&
              (symptoms === "" ||
                symptoms === undefined ||
                symptoms === null) ? (
                <span style={{ color: "red" }}>This field is required</span>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Analyze Symptoms"
              )}
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
