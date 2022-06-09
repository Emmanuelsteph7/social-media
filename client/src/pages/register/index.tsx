import { AuthLayout } from "layouts";
import { registerBg } from "assets";
import React, { useState } from "react";
import RegisterView from "./RegisterView";
import { API } from "types/client";
import { useRegister } from "hooks/auth";

const Register = () => {
  const [form, setForm] = useState<API.FormData.RegisterFormData>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [errors, setErrors] = useState<API.FormData.RegisterFormData>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { mutate, isLoading } = useRegister();

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

    if (!form.firstName) {
      return setErrors((prev) => ({
        ...prev,
        firstName: "Please fill in your first name",
      }));
    }

    if (!form.lastName) {
      return setErrors((prev) => ({
        ...prev,
        lastName: "Please fill in your last name",
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
    <AuthLayout
      imageText="Perfect place to meet new friends."
      image={registerBg}
    >
      <RegisterView
        form={form}
        errors={errors}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default Register;
