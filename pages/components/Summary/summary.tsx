import React from "react";
import "./Summary.css"; // Importa os estilos

interface SummaryItem {
  label: string;
  value: string | number;
  isPercentage?: boolean; // Indica se o valor é um percentual
}

const summaryData: SummaryItem[] = [
  { label: "Receita (R$ Mil)", value: 99 },
  {
    label: "Ganho/Desconto Comercial (%)",
    value: "+45,8%",
    isPercentage: true,
  },
  { label: "Receita Líquida (R$ Mil)", value: 145 },
  { label: "Fixo", value: 145 },
  { label: "Success Fee", value: "-" },
  { label: "Job Contribution (R$ Mil)", value: 51 },
  { label: "Job Contribution (%)", value: "35,0%", isPercentage: true },
  { label: "Apenas Fixo", value: "35,0%", isPercentage: true },
  { label: "Payroll / Receita (%)", value: "36,1%", isPercentage: true },
  { label: "Taxa hr média proposta (R$/h)", value: 906 },
  { label: "Taxa hr média padrão (R$/h)", value: 622 },
  { label: "Duração (meses)", value: 0.9 },
  { label: "Semanas", value: 4 },
  { label: "Máxima exposição caixa (R$ Mil)", value: 0 },
  { label: "Período de máxima exposição (mês)", value: 0 },
  { label: "Duração da exposição (meses)", value: 0 },
  { label: "Cash exposure máximo (R$ Mil)", value: 0 },
  { label: "Cash exposure máximo (Mês)", value: 0 },
];

const Summary: React.FC = () => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">Sumário</h2>
      <div className="summary-grid">
        {summaryData.map((item, index) => (
          <div key={index} className="summary-item">
            <span className="summary-label">{item.label}</span>
            <span
              className={`summary-value ${
                item.isPercentage ? "percentage" : ""
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
