import React, { useState } from "react";
import InputDefault from "./components/Input/input-default";
import Button from "./components/Buttons/buttons";
import { FiPlus } from "react-icons/fi"; // Ícone do botão
import Summary from "./components/Summary/summary";

export default function Pricing() {
  const [client, setClient] = useState<string>("");
  const [ProjectBegin, setProjectBegin] = useState<string>("");
  const [PhaseName, setPhaseName] = useState<string>("");
  const [Value, setValue] = useState<string>("");
  const [Fee, setFee] = useState<string>("");
  const [Expense, setExpense] = useState<string>("");
  const [Duration, setDuration] = useState<string>("");
  const [WeekOrMonth, setWeekOrMonth] = useState<string>("");
  const [recursos, setRecursos] = useState([{ cargo: "", alocacao: "" }]);

  const adicionarRecurso = () => {
    setRecursos([...recursos, { cargo: "", alocacao: "" }]);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#00244A85",
        display: "flex",
      }}
    >
      <Summary />
      <div className="form-container">
        <div className="button-grid">
          <Button text="Histórico" />
          <Button text="Params" />
        </div>
        <h1 className="form-title">Dados do Projeto </h1>
        <div className="form-grid">
          <div className="input-group">
            <InputDefault
              type="text"
              label="Cliente"
              placeholder="* Digite o nome do cliente"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="date"
              label="Início do projeto"
              placeholder="* Digite o nome do cliente"
              value={ProjectBegin}
              onChange={(e) => setProjectBegin(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="text"
              label="Nome da Fase"
              placeholder="* Digite o nome da fase"
              value={PhaseName}
              onChange={(e) => setPhaseName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="currency"
              label="* Valor do Projeto (R$ Mil)"
              placeholder="Digite o valor"
              value={Value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="currency"
              label="* Sucess Fee (R$ Mil)"
              placeholder="Digite o valor"
              value={Fee}
              onChange={(e) => setFee(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="currency"
              label="* Despesa não reembolsável (R$ Mil)"
              placeholder="Digite o valor"
              value={Expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="integer"
              label="* Duração"
              placeholder="Digite a duração"
              value={Duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputDefault
              type="select"
              label="* Semana ou Mês"
              options={[
                { value: "semana", label: "Semana" },
                { value: "mes", label: "Mês" },
              ]}
              placeholder="Semana ou Mês"
              value={WeekOrMonth}
              onChange={(e) => setWeekOrMonth(e.target.value)}
            />
          </div>
        </div>

        <h1 className="form-title">Dados do Recurso</h1>
        {recursos.map((recurso, index) => (
          <div key={index} className="form-grid">
            <div className="input-group">
              <InputDefault
                type="select"
                label="* Cargo"
                options={[
                  { value: "Estagiario", label: "Estagiário" },
                  { value: "Analyst ", label: "Analyst " },
                  { value: "Associate ", label: "Associate " },
                  { value: "Sr. Associate ", label: "Sr. Associate" },
                  { value: "Manager ", label: "Manager " },
                  { value: "Director ", label: "Director" },
                  { value: "Sr. Director ", label: "Sr. Director" },
                  { value: "MD ", label: "MD" },
                ]}
                placeholder="Selecione um cargo"
                value={recurso.cargo}
                onChange={(e) => {
                  const novosRecursos = [...recursos];
                  novosRecursos[index].cargo = e.target.value;
                  setRecursos(novosRecursos);
                }}
              />
            </div>
            <div className="input-group">
              <InputDefault
                type="integer"
                label="* Alocação (%)"
                placeholder="Porcentagem de alocação ao projeto"
                value={recurso.alocacao}
                onChange={(e) => {
                  const novosRecursos = [...recursos];
                  novosRecursos[index].alocacao = e.target.value;
                  setRecursos(novosRecursos);
                }}
                min={0}
                max={100}
              />
            </div>
          </div>
        ))}
        <div className="button-container">
          {/* Botão de adicionar redondo */}
          <button className="button-add" onClick={adicionarRecurso}>
            <FiPlus />
          </button>
        </div>
        <div className="button-grid">
          {/* Os botões agora ficam do mesmo tamanho */}
          <Button text="Atualizar Sumário" />
          <Button text="Salvar Precificação" />
        </div>
      </div>
    </div>
  );
}
