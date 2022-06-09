import { useMutation } from "react-query";
import { login, register } from "services/auth-service";
import { API } from "types/client";

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (data: API.Auth.User) => {
      console.log(data);
    },
  });
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: (data: API.Auth.User) => {
      console.log(data);
    },
  });
};
