import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className="button-style">
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
