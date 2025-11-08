const useMock = true;

const mockUsers = [
  { id: 1, name: "Rafael", email: "rafael@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" }
];

export const apiClient = {
  get: async (url) => {
    if (useMock) {
      if (url === "/users") {
        return { data: mockUsers };
      }
    }
    throw new Error(`Rota não implementada: ${url}`);
  },

  post: async (url, body) => {
    if (useMock) {
      if (url === "/users") {
        const newUser = { id: mockUsers.length + 1, ...body };
        mockUsers.push(newUser);
        return { data: newUser };
      }
    }
    throw new Error(`Rota não implementada: ${url}`);
  }
};
