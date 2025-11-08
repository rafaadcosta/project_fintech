import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Mercado", amount: 120.5, category: "Alimentação" },
    { id: 2, description: "Transporte", amount: 50, category: "Mobilidade" },
  ]);
  const navigate = useNavigate();

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Despesas</h3>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
                ← Voltar
            </button>
          </div>
      
      <ExpenseForm onAdd={handleAddExpense} />
      <ul className="list-group mt-3">
        {expenses.map((exp) => (
          <li key={exp.id} className="list-group-item d-flex justify-content-between">
            <span>
              <strong>{exp.description}</strong> — {exp.category}
            </span>
            <span className="text-danger">R$ {exp.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
