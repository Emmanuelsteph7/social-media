import { AxiosConfig } from "config/axios";
import { API } from "types/client";

export const login = async (
  payload: API.FormData.LoginFormData
): Promise<API.Auth.User> => {
  return AxiosConfig.post("/api/auth/login", payload);
};

export const register = async (
  payload: API.FormData.RegisterFormData
): Promise<API.Auth.User> => {
  return AxiosConfig.post("/api/auth/register", payload);
};
