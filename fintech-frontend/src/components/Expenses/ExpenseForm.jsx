import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount) {
      alert("Preencha todos os campos!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount),
    };

    onAdd(newExpense);
    setForm({ description: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mt-3">
      <input
        type="text"
        name="description"
        placeholder="Descrição"
        className="form-control"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Valor"
        className="form-control"
        value={form.amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Categoria"
        className="form-control"
        value={form.category}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-success">
        Adicionar
      </button>
    </form>
  );
}
