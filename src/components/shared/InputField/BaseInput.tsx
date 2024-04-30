import React, { ChangeEvent, useState } from 'react';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const BaseInput: React.FC<InputProps> = ({ label, type = 'text', value, error, onChange }) => {
  const [touched, setTouched] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
   
    setTouched(true);
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        onBlur={() => setTouched(true)}
      />
      {touched && error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default BaseInput;
