import { AuthLayout } from "layouts";
import { loginBg } from "assets";
import React, { useState } from "react";
import LoginView from "./LoginView";
import { useLogin } from "hooks/auth";
import { API } from "types/client";

const Login = () => {
  const [form, setForm] = useState<API.FormData.LoginFormData>({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState<API.FormData.LoginFormData>({
    userName: "",
    password: "",
  });
  const { mutate, isLoading } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.userName) {
      return setErrors((prev) => ({
        ...prev,
        userName: "Please fill in your username",
      }));
    }

    if (!form.password) {
      return setErrors((prev) => ({
        ...prev,
        password: "Please fill in your password",
      }));
    }

    mutate(form);
  };

  return (
    <AuthLayout imageText="Perfect place to meet new friends." image={loginBg}>
      <LoginView
        form={form}
        errors={errors}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default Login;
