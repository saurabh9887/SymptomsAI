import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Components/Layout";
import Symptoms from "../Pages/Symptoms";
import LoginPage from "../Pages/LoginPage";

export default function App() {
  const [aiResponse, setAiResponse] = useState(null);
  const userId = "689f741f855496e1024bfc07"; // Example userId

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* Login without navbar */}
          <Route path="/login" element={<LoginPage />} />

          {/* Layout with navbar */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* default child of Layout */}
            <Route path="symptoms-analysis" element={<Symptoms />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}
