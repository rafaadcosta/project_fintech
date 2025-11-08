import { useState } from "react";
import { apiClient } from "../../api/apiClient";

export default function UserForm({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await apiClient.post("/users", formData);
    onAdd(res.data);
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mt-3">
      <input
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
        required
      />
      <button className="btn btn-primary" type="submit">
        Adicionar
      </button>
    </form>
  );
}
