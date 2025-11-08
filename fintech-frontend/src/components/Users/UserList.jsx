import { useEffect, useState } from "react";
import { apiClient } from "../../api/apiClient";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get("/users").then((res) => setUsers(res.data));
  }, []);

  function handleAddUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Usuários</h3>
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          ← Voltar
        </button>
      </div>
      <UserForm onAdd={handleAddUser} />
      <ul className="list-group mt-3">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
