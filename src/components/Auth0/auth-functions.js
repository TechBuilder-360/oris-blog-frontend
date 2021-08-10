import { useAuth0 } from "@auth0/auth0-react";

export const Auth0Login = () => {
  const { loginWithRedirect } = useAuth0();
  return loginWithRedirect;
};

export const Auth0Logout = () => {
  const { logout } = useAuth0();
  return logout({
    returnTo: window.location.origin,
  });
};

export const Auth0Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return loginWithRedirect({
    screen_hint: "signup",
  });
};
