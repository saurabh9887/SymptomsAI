import React, { useState } from "react";
import SymptomForm from "../Components/SymptomsForm";
import SymptomResponse from "../Components/SymptomsResponse";

const Symptoms = () => {
  const [aiResponse, setAiResponse] = useState(null);
  return (
    <div
      className="container d-flex align-items-center justify-content-center gap-5"
      style={{ overflowX: "hidden", flexDirection: "column" }}
    >
      <SymptomForm onResult={setAiResponse} />
      <SymptomResponse response={aiResponse} />
    </div>
  );
};

export default Symptoms;
