export default function SymptomResponse({ response }) {
  if (!response) return null;
  return (
    <div className="card mb-4">
      <div className="card-header fw-bold">AI Response</div>
      <div className="card-body">
        <p className="card-text">{response}</p>
      </div>
    </div>
  );
}
