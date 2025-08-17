import { useEffect, useState } from "react";

export default function SymptomHistory({ userId }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/symptom-analysis/${userId}`)
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch(console.error);
  }, [userId]);

  return (
    <div className="card">
      <div className="card-header fw-bold">Your Symptom History</div>
      <ul className="list-group list-group-flush">
        {history.length === 0 ? (
          <li className="list-group-item">No history yet.</li>
        ) : (
          history.map((item) => (
            <li key={item._id} className="list-group-item">
              <small className="text-muted">
                {new Date(item.createdAt).toLocaleString()}
              </small>
              <div>
                <strong>Symptoms:</strong> {item.symptoms.join(", ")}
              </div>
              <div>{item.aiResponse}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
