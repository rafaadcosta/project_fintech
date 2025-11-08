import { useEffect, useState } from "react";
import { apiClient } from "../../api/apiClient";
import WalletForm from "./WalletForm";
import { useNavigate } from "react-router-dom";

export default function WalletList() {
  const [wallets, setWallets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWallets() {
      try {
        const res = await apiClient.get("/wallets");
        setWallets(res.data);
      } catch {
        // fallback: dados locais se mock não existir
        setWallets([
          { id: 1, name: "Carteira Principal", balance: 1500 },
          { id: 2, name: "Poupança", balance: 3200 },
        ]);
      }
    }
    fetchWallets();
  }, []);

  function handleAddWallet(newWallet) {
    setWallets([...wallets, newWallet]);
  }

  return (
    <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Carteiras</h3>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
                ← Voltar
            </button>
          </div>
      <WalletForm onAdd={handleAddWallet} />
      <ul className="list-group mt-3">
        {wallets.map((wallet) => (
          <li key={wallet.id} className="list-group-item d-flex justify-content-between">
            <span>{wallet.name}</span>
            <strong>R$ {wallet.balance.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
