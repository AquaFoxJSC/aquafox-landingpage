import * as React from "react";

function FormInput({ label, type, required }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="mb-6">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={label}
        aria-label={label}
        className="gap-2.5 self-stretch p-2.5 w-full border-b border-indigo-300 max-md:max-w-full bg-transparent"
      />
    </div>
  );
}

export default FormInput;