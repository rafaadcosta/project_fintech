import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../components/Auth/LoginPage';
import UserList from '../components/Users/UserList';
import WalletList from '../components/Wallets/WalletList';
import ExpenseList from '../components/Expenses/ExpenseList';
import HomePage from '../components/HomePage';
import NotFound from '../components/NotFound';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('authToken');
  return token ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
        <Route path="/wallets" element={<PrivateRoute><WalletList /></PrivateRoute>} />
        <Route path="/expenses" element={<PrivateRoute><ExpenseList /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
