import { Loader } from "components";
import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Path } from "./routes";
import { AnimatePresence } from "framer-motion";

const Login = lazy(() => import("pages/login"));
const Register = lazy(() => import("pages/register"));
const Dashboard = lazy(() => import("pages/dashboard"));

const RouterConfig = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Dashboard} element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default RouterConfig;
