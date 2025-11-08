import api from './apiClient';

export const fetchUsers = () => api.get('/expenses').then(res => res.data);
export const fetchUser = (id) => api.get(`/expenses/${id}`).then(res => res.data);
export const createUser = (payload) => api.post('/expenses', payload).then(res => res.data);
export const updateUser = (id, payload) => api.put(`/expenses/${id}`, payload).then(res => res.data);
export const deleteUser = (id) => api.delete(`/expenses/${id}`).then(res => res.status === 204);
