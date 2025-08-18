import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        backgroundImage: "url('/assets/img/hero-img-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">AI Symptom Analyzer</h1>
            <p className="lead">
              Enter your symptoms and let our AI help you understand possible
              conditions instantly.
            </p>
            <Link to="/symptoms-analysis">
              <button className="btn btn-primary btn-lg mt-3">Analyse</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
