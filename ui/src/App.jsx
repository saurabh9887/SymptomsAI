import { useState } from "react";
import SymptomForm from "../Components/SymptomsForm";
import SymptomResponse from "../Components/SymptomsResponse";
import NavbarComponent from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../Components/HeroSection";

export default function App() {
  const [aiResponse, setAiResponse] = useState(null);
  const userId = "689f741f855496e1024bfc07"; // Example userId

  return (
    <div className="">
      <NavbarComponent />
      <HeroSection />
      {/* <h1 className="mb-4 text-center">AI Symptom Checker</h1>
      <SymptomForm onResult={setAiResponse} />
      <SymptomResponse response={aiResponse} /> */}
      {/* <SymptomHistory userId={userId} /> */}
    </div>
  );
}
