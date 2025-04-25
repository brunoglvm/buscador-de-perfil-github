import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const getProfile = async (username: string) => {
//   try {
//     const response = await api.get(`/users/${username}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching GitHub profile:", error);
//     throw error;
//   }
// };

export default api;
