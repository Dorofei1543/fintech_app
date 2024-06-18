import axios from "axios";
import { API_URL } from "../../const/url";
import { LoginResponse, RegisterResponse } from "./types";

const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  },

  register: async (
    username: string,
    email: string,
    password: string
  ): Promise<RegisterResponse> => {
    const response = await axios.post(`${API_URL}/auth/registration`, {
      username,
      email,
      password,
    });
    return response.data;
  },

  // logout: async (): Promise<void> => {
  //   await axios.post(`${API_URL}/auth/logout`);
  // },

  // getCurrentUser: async (): Promise<LoginResponse["user"]> => {
  //   const response = await axios.get(`${API_URL}/auth/user`);
  //   return response.data;
  // },
};

export default authService;
