import React from "react";
import "../Input/input-style.css";
interface InputProps {
  type?:
    | "text"
    | "date"
    | "number"
    | "currency"
    | "integer"
    | "select"
    | "integer";
  max?: number;
  min?: number;
  label?: string;
  placeholder?: string;
  options?: { value: string | number; label: string }[];
  value: string | number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const InputDefault: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  options = [],
  value,
  onChange,
  min,
  max,
}) => {
  const formatCurrency = (value: string) => {
    return `${value}`
      .replace(/\D/g, "") // Remove tudo que não for número
      .replace(/(\d)(\d{2})$/, "$1,$2") // Adiciona a vírgula decimal
      .replace(/(?=(\d{3})+(\D))\B/g, "."); // Adiciona pontos separadores de milhar
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (type === "currency") {
      newValue = formatCurrency(newValue);
    } else if (type === "integer") {
      newValue = newValue.replace(/\D/g, ""); // Apenas números inteiros
    }

    onChange({
      ...e,
      target: { ...e.target, value: newValue },
    });
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}

      {type === "select" ? (
        <select value={value} onChange={onChange} className="input-field">
          <option value="" disabled>
            Selecione...
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type === "currency" || type === "integer" ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="input-field"
          min={min}
          max={max}
        />
      )}
    </div>
  );
};

export default InputDefault;
