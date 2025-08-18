import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Components/Layout";
import Symptoms from "../Pages/Symptoms";

export default function App() {
  const [aiResponse, setAiResponse] = useState(null);
  const userId = "689f741f855496e1024bfc07"; // Example userId

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="symptoms-analysis" element={<Symptoms />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}
