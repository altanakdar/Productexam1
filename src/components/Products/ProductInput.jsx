import React from "react";

const ProductInput = ({
  handleChange,
  label,
  placeholder,
  name,
  type,
  value,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default ProductInput;
