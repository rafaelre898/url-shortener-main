import React, { ButtonHTMLAttributes } from 'react';
import style from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', leftIcon, rightIcon, ...props }) => {
  return (
    <button className={`${style.button} ${style[variant]}`} {...props}>
      {leftIcon && <span className={style.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={style.icon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
