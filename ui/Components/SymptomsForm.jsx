import { useState } from "react";

export default function SymptomForm({ onResult }) {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/symptoms/analyse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "689f741f855496e1024bfc07", // replace with logged-in user
        symptoms: symptoms.split(",").map((s) => s.trim()),
      }),
    });

    const data = await res.json();
    onResult(data.aiResponse);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter your symptoms (comma separated)..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
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
  );
}
