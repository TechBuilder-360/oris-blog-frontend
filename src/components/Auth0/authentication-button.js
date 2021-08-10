import React from "react";

import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import SignupButton from "./components/signup-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <LogoutButton />
  ) : (
    <>
      <LoginButton />&nbsp;&nbsp;&nbsp;<SignupButton />
    </>
  );
};

export default AuthenticationButton;
