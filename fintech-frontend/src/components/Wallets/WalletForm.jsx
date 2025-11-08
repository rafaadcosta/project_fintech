import { useState } from "react";

export default function WalletForm({ onAdd }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !balance) return;

    const newWallet = {
      id: Date.now(),
      name,
      balance: parseFloat(balance),
    };

    onAdd(newWallet);
    setName("");
    setBalance("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="input-group">
        <input
          type="text"
          placeholder="Nome da Carteira"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <input
          type="number"
          placeholder="Saldo Inicial"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </div>
    </form>
  );
}
