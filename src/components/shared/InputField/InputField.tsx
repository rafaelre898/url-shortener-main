import { InputHTMLAttributes } from "react";
import style from "./inputField.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    touched?: boolean;
    label?: string;
    required?: boolean;
  }
  
  const Input: React.FC<InputProps> = ({ error, touched, label, required, ...props }) => {
    const showError = touched && error;
  
    return (
      <div className={style.inputContainer}>
        {label && <label className={style.inputLabel}>{label}</label>}
        <input className={`${style.baseInput} ${showError ? style.error : ''}`} {...props} />
        {showError && <div className={style.errorMessage}>{error}</div>}
      </div>
    );
  };
  
  export default Input;