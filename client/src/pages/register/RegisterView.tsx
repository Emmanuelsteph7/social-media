import { Button, FormField, LinkTag, Logo } from "components";
import { useMedia } from "hooks/utils/useMedia";
import { Path } from "notifications/routes";
import React from "react";
import { GoArrowSmallRight } from "react-icons/go";
import { API } from "types/client";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: API.FormData.RegisterFormData;
  errors: API.FormData.RegisterFormData;
  isLoading: boolean;
}

const RegisterView: React.FC<Props> = ({
  form,
  errors,
  handleChange,
  handleSubmit,
  isLoading,
}) => {
  const { isDesktop } = useMedia();
  return (
    <div className="lg:flex-1 flex">
      <div className="container">
        <div className="hidden lg:flex justify-center items-center mb-10">
          <Logo variant="lg" />
        </div>
        <h2 className="mb-4 text-3xl text-center text-white">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-3 lg:mx-auto lg:max-w-xl">
            <FormField
              onChange={handleChange}
              label="Username"
              name="userName"
              error={errors.userName}
              value={form.userName}
              className="mb-6"
            />
            <FormField
              onChange={handleChange}
              label="First Name"
              name="firstName"
              error={errors.firstName}
              value={form.firstName}
              className="mb-6"
            />
            <FormField
              onChange={handleChange}
              label="Last Name"
              name="lastName"
              error={errors.lastName}
              value={form.lastName}
              className="mb-6"
            />
            <FormField
              onChange={handleChange}
              label="Password"
              name="password"
              type="password"
              error={errors.password}
              value={form.password}
              className="mb-6"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button loading={isLoading} fullWidth={!isDesktop} type="submit">
              Submit
            </Button>
          </div>
        </form>
        <div className="lg:mx-auto mt-5 flex flex-col items-center lg:max-w-md">
          <p className="text-offWhite">Don't have an account?</p>
          <LinkTag className="flex items-center" to={Path.Login}>
            <span className="text-offWhite hover:text-primary duration-200">
              Login
            </span>
            <GoArrowSmallRight className="text-offWhite text-2xl" />
          </LinkTag>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
