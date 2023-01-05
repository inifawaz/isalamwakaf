import React from "react";

const Input = ({ label, value, name, type = "text", onChange }) => {
  return (
    <label className="block mb-4">
      <span className="block mb-1 text-gray-500">{label}</span>
      <input
        className="rounded bg-white w-full border-gray-300 shadow-sm"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
