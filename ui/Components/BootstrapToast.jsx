import React from "react";

const BootstrapToast = ({ showToast, setShowToast }) => {
  return (
    <div
      className="toast-container position-fixed top-0 end-0 p-3"
      style={{ zIndex: 1055 }}
    >
      <div
        className={`toast align-items-center text-bg-success border-0 ${
          showToast ? "show" : "hide"
        }`}
        role="alert"
      >
        <div className="d-flex">
          <div className="toast-body">✅ Login Successful!</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default BootstrapToast;
