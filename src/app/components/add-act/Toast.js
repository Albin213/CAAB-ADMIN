import React from "react";

function Toast({ message, type, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-10 right-10 z-50 p-4 rounded-lg shadow-md text-white ${
        type === "success" ? "bg-green-500" : "bg-rose -500"
      }`}
    >
      <div className="flex justify-between items-center gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="text-xl font-bold">
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast;
