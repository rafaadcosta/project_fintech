import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('authToken', 'fake-jwt-token');
      navigate('/');
    } else {
      alert('Preencha e-mail e senha!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="p-4 shadow rounded bg-white" style={{ width: '320px' }} onSubmit={handleLogin}>
        <h3 className="text-center mb-3">Conllet - Login</h3>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" type="submit">Entrar</button>
      </form>
    </div>
  );
}
