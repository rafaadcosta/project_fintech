import api from './apiClient';

export const fetchUsers = () => api.get('/wallets').then(res => res.data);
export const fetchUser = (id) => api.get(`/wallets/${id}`).then(res => res.data);
export const createUser = (payload) => api.post('/wallets', payload).then(res => res.data);
export const updateUser = (id, payload) => api.put(`/wallets/${id}`, payload).then(res => res.data);
export const deleteUser = (id) => api.delete(`/wallets/${id}`).then(res => res.status === 204);
