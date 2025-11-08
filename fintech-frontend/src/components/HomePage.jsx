import { Link } from 'react-router-dom';

export default function HomePage() {
  const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  return (
    <div className="container text-center mt-5">
      <h1>Bem-vindo à Conllet</h1>
      <p className="text-muted">Gerencie suas finanças de forma inteligente.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/users" className="btn btn-outline-primary">Usuários</Link>
        <Link to="/wallets" className="btn btn-outline-success">Carteiras</Link>
        <Link to="/expenses" className="btn btn-outline-danger">Despesas</Link>
      </div>
      <button onClick={logout} className="btn btn-link mt-3 text-danger">Sair</button>
    </div>
  );
}
